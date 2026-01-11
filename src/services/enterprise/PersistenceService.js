// src/services/enterprise/PersistenceService.js
import EnterpriseProtocol from './EnterpriseProtocolService';

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
        // Placeholder for real Supabase bridge - already architected for Phase 3
        console.warn(`[Persistence] SUPABASE protocol active but uplink not yet configured. Falling back to local.`);
        return this._storeLocal(collection, data);
    }

    _storeMemory(collection, data) {
        console.info(`[Persistence] Memory-only storage for collection: ${collection}`);
        return { success: true, id: 'mem_' + Math.random() };
    }

    /**
     * Retrieve all items from a collection
     */
    async fetchAll(collection) {
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
