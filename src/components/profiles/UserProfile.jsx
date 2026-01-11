// src/components/profiles/UserProfile.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Mail, Phone, MapPin, Calendar, Edit2, Save, X } from 'lucide-react';

/**
 * User Profile Component
 * Displays and allows editing of user profile information
 */
const UserProfile = ({ user, onUpdate, editable = true }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState(user || {});
    const [avatar, setAvatar] = useState(user?.avatar || null);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleAvatarChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setAvatar(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSave = () => {
        if (onUpdate) {
            onUpdate({ ...formData, avatar });
        }
        setIsEditing(false);
    };

    const handleCancel = () => {
        setFormData(user);
        setAvatar(user?.avatar);
        setIsEditing(false);
    };

    return (
        <div className="bg-[#1c1f24] border border-white/10 rounded-2xl overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-[#1ba6d6] to-[#0e1114] p-8 relative">
                <div className="flex items-start justify-between">
                    <div className="flex items-center gap-6">
                        {/* Avatar */}
                        <div className="relative">
                            <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white/20">
                                {avatar ? (
                                    <img src={avatar} alt={formData.name} className="w-full h-full object-cover" />
                                ) : (
                                    <div className="w-full h-full bg-white/10 flex items-center justify-center">
                                        <User size={40} className="text-white/50" />
                                    </div>
                                )}
                            </div>
                            {isEditing && (
                                <label className="absolute bottom-0 right-0 w-8 h-8 bg-[#1ba6d6] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#f4b41a] transition-colors">
                                    <Edit2 size={16} className="text-white" />
                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={handleAvatarChange}
                                        className="hidden"
                                    />
                                </label>
                            )}
                        </div>

                        {/* Basic Info */}
                        <div>
                            <h2 className="text-3xl font-black text-white mb-1">{formData.name || 'User Name'}</h2>
                            <p className="text-sm text-white/60">{formData.role || 'Role'}</p>
                        </div>
                    </div>

                    {/* Edit Button */}
                    {editable && !isEditing && (
                        <button
                            onClick={() => setIsEditing(true)}
                            className="px-4 py-2 bg-white/10 text-white font-bold text-sm uppercase tracking-wider rounded-lg hover:bg-white/20 transition-colors flex items-center gap-2"
                        >
                            <Edit2 size={16} />
                            Edit
                        </button>
                    )}

                    {/* Save/Cancel Buttons */}
                    {isEditing && (
                        <div className="flex gap-2">
                            <button
                                onClick={handleSave}
                                className="px-4 py-2 bg-[#25d366] text-white font-bold text-sm uppercase tracking-wider rounded-lg hover:bg-[#25d366]/80 transition-colors flex items-center gap-2"
                            >
                                <Save size={16} />
                                Save
                            </button>
                            <button
                                onClick={handleCancel}
                                className="px-4 py-2 bg-red-500/20 text-red-400 font-bold text-sm uppercase tracking-wider rounded-lg hover:bg-red-500/30 transition-colors flex items-center gap-2"
                            >
                                <X size={16} />
                                Cancel
                            </button>
                        </div>
                    )}
                </div>
            </div>

            {/* Profile Details */}
            <div className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Email */}
                    <div className="space-y-2">
                        <label className="text-xs font-bold text-gray-400 uppercase tracking-wider flex items-center gap-2">
                            <Mail size={14} />
                            Email
                        </label>
                        {isEditing ? (
                            <input
                                type="email"
                                name="email"
                                value={formData.email || ''}
                                onChange={handleChange}
                                className="w-full bg-black/30 border border-white/10 p-3 text-white text-sm focus:border-[#1ba6d6] focus:outline-none transition-colors rounded-lg"
                            />
                        ) : (
                            <p className="text-white">{formData.email || 'Not provided'}</p>
                        )}
                    </div>

                    {/* Phone */}
                    <div className="space-y-2">
                        <label className="text-xs font-bold text-gray-400 uppercase tracking-wider flex items-center gap-2">
                            <Phone size={14} />
                            Phone
                        </label>
                        {isEditing ? (
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone || ''}
                                onChange={handleChange}
                                className="w-full bg-black/30 border border-white/10 p-3 text-white text-sm focus:border-[#1ba6d6] focus:outline-none transition-colors rounded-lg"
                            />
                        ) : (
                            <p className="text-white">{formData.phone || 'Not provided'}</p>
                        )}
                    </div>

                    {/* Location */}
                    <div className="space-y-2">
                        <label className="text-xs font-bold text-gray-400 uppercase tracking-wider flex items-center gap-2">
                            <MapPin size={14} />
                            Location
                        </label>
                        {isEditing ? (
                            <input
                                type="text"
                                name="location"
                                value={formData.location || ''}
                                onChange={handleChange}
                                className="w-full bg-black/30 border border-white/10 p-3 text-white text-sm focus:border-[#1ba6d6] focus:outline-none transition-colors rounded-lg"
                            />
                        ) : (
                            <p className="text-white">{formData.location || 'Not provided'}</p>
                        )}
                    </div>

                    {/* Join Date */}
                    <div className="space-y-2">
                        <label className="text-xs font-bold text-gray-400 uppercase tracking-wider flex items-center gap-2">
                            <Calendar size={14} />
                            Member Since
                        </label>
                        <p className="text-white">{formData.joinDate ? new Date(formData.joinDate).toLocaleDateString() : 'Not available'}</p>
                    </div>
                </div>

                {/* Bio */}
                <div className="mt-6 space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Bio</label>
                    {isEditing ? (
                        <textarea
                            name="bio"
                            value={formData.bio || ''}
                            onChange={handleChange}
                            rows={4}
                            className="w-full bg-black/30 border border-white/10 p-3 text-white text-sm focus:border-[#1ba6d6] focus:outline-none transition-colors rounded-lg resize-none"
                        />
                    ) : (
                        <p className="text-gray-400 leading-relaxed">{formData.bio || 'No bio provided'}</p>
                    )}
                </div>

                {/* Social Links */}
                {formData.social && (
                    <div className="mt-6">
                        <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Social Links</h3>
                        <div className="flex gap-3">
                            {formData.social.linkedin && (
                                <a href={formData.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-[#1ba6d6] hover:text-white transition-colors">
                                    LinkedIn
                                </a>
                            )}
                            {formData.social.twitter && (
                                <a href={formData.social.twitter} target="_blank" rel="noopener noreferrer" className="text-[#1ba6d6] hover:text-white transition-colors">
                                    Twitter
                                </a>
                            )}
                            {formData.social.github && (
                                <a href={formData.social.github} target="_blank" rel="noopener noreferrer" className="text-[#1ba6d6] hover:text-white transition-colors">
                                    GitHub
                                </a>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default UserProfile;
