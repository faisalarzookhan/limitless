// src/services/enterprise/PersistenceService.js
import EnterpriseProtocol from './EnterpriseProtocolService';
import supabase from '../supabaseClient';

class PersistenceService {
    constructor() {
        this.storageKeyPrefix = 'limitless_ent_';
    }

    /**
     * Store data based on current persistence protocol
     */
    async store(collection, data) {
        const mode = EnterpriseProtocol.getProtocol('PERSISTENCE_MODE');
        const payload = {
            ...data,
            _timestamp: new Date().toISOString(),
            _meta: {
                protocol: mode,
                version: EnterpriseProtocol.config.VERSION
            }
        };

        switch (mode) {
            case 'SUPABASE':
                return this._storeSupabase(collection, payload);
            case 'LOCAL_STORAGE':
                return this._storeLocal(collection, payload);
            default:
                return this._storeMemory(collection, payload);
        }
    }

    _storeLocal(collection, data) {
        try {
            const key = `${this.storageKeyPrefix}${collection}`;
            const existing = JSON.parse(localStorage.getItem(key) || '[]');
            existing.push(data);
            localStorage.setItem(key, JSON.stringify(existing));
            console.info(`[Persistence] Data stored in local collection: ${collection}`);
            return { success: true, id: Date.now() };
        } catch (e) {
            console.error('[Persistence] Local storage failure', e);
            return { success: false, error: e.message };
        }
    }

    async _storeSupabase(collection, data) {
        if (!supabase) {
            console.warn(`[Persistence] SUPABASE protocol active but client not initialization. Check environment variables. Falling back to local.`);
            return this._storeLocal(collection, data);
        }

        try {
            const { data: insertedData, error } = await supabase
                .from(collection)
                .insert([data])
                .select();

            if (error) throw error;

            console.info(`[Persistence] Data stored in Supabase collection: ${collection}`);
            return { success: true, data: insertedData };
        } catch (error) {
            console.error(`[Persistence] Supabase storage failure:`, error);
            return { success: false, error: error.message };
        }
    }

    _storeMemory(collection, data) {
        console.info(`[Persistence] Memory-only storage for collection: ${collection}`);
        return { success: true, id: 'mem_' + Math.random() };
    }

    /**
     * Retrieve all items from a collection
     */
    async fetchAll(collection) {
        const mode = EnterpriseProtocol.getProtocol('PERSISTENCE_MODE');

        if (mode === 'SUPABASE') {
            if (!supabase) return [];
            
            const { data, error } = await supabase
                .from(collection)
                .select('*')
                .order('created_at', { ascending: false });
                
            if (error) {
                console.error(`[Persistence] Failed to fetch Supabase collection "${collection}":`, error);
                return [];
            }
            return data;
        }

        try {
            const key = `${this.storageKeyPrefix}${collection}`;
            const data = localStorage.getItem(key);
            return data ? JSON.parse(data) : [];
        } catch (error) {
            console.error(`[Persistence] Failed to fetch collection "${collection}":`, error);
            return [];
        }
    }
}

export default new PersistenceService();
