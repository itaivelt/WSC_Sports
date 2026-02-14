"use client";

import { useState } from "react";
import { User, Shield, Network, Building2, Save, Trash2, Mail, Plus } from "lucide-react";

export default function PartnerManagementPage() {
    const [ssoEnabled, setSsoEnabled] = useState(false);
    const [provider, setProvider] = useState<"okta" | "microsoft">("okta");

    const [users] = useState([
        { id: 1, name: "John Doe", email: "john@nba.com", role: "Admin", status: "Active" },
        { id: 2, name: "Sarah Smith", email: "sarah@nba.com", role: "Viewer", status: "Active" },
        { id: 3, name: "Mike Jones", email: "mike@nba.com", role: "Viewer", status: "Invited" },
    ]);

    const [network] = useState([
        { id: 1, name: "NBA Properties", role: "Owner", connected: true },
        { id: 2, name: "WNBA", role: "Affiliate", connected: true },
        { id: 3, name: "G-League", role: "Affiliate", connected: true },
    ]);

    return (
        <div className="max-w-4xl mx-auto space-y-8 pb-10">
            <div>
                <h1 className="text-3xl font-extrabold text-white mb-2">Manage Partner</h1>
                <p className="text-neutral-400">Control identity, access, and network connections for your organization.</p>
            </div>

            {/* 1. Identity & SSO Integration */}
            <div className="bg-[#111] backdrop-blur-sm p-6 rounded-xl border border-white/5 shadow-lg">
                <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-4">
                    <Shield className="w-6 h-6 text-[#d0f200]" />
                    <div>
                        <h2 className="text-xl font-bold text-white">Identity & SSO</h2>
                        <p className="text-xs text-neutral-400">Enterprise login connection [V1]</p>
                    </div>
                </div>

                <div className="space-y-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <div className="text-white font-medium">Enable SSO</div>
                            <div className="text-sm text-neutral-400">Allow users to log in with your organization's identity provider.</div>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input
                                type="checkbox"
                                className="sr-only peer"
                                checked={ssoEnabled}
                                onChange={() => setSsoEnabled(!ssoEnabled)}
                            />
                            <div className="w-11 h-6 bg-[#333] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#d0f200]"></div>
                        </label>
                    </div>

                    {ssoEnabled && (
                        <div className="bg-[#1a1a1a] p-4 rounded-lg animate-in fade-in slide-in-from-top-2">
                            <label className="block text-sm font-medium text-neutral-300 mb-2">Select Provider</label>
                            <div className="flex gap-4">
                                <button
                                    onClick={() => setProvider("okta")}
                                    className={`flex-1 p-3 rounded-md border text-center transition-all ${provider === "okta"
                                            ? "border-[#d0f200] bg-[#d0f200]/10 text-white"
                                            : "border-[#333] hover:border-neutral-500 text-neutral-400"
                                        }`}
                                >
                                    Okta
                                </button>
                                <button
                                    onClick={() => setProvider("microsoft")}
                                    className={`flex-1 p-3 rounded-md border text-center transition-all ${provider === "microsoft"
                                            ? "border-[#d0f200] bg-[#d0f200]/10 text-white"
                                            : "border-[#333] hover:border-neutral-500 text-neutral-400"
                                        }`}
                                >
                                    Microsoft Entra ID
                                </button>
                            </div>
                            <div className="mt-4">
                                <label className="block text-sm font-medium text-neutral-300 mb-1">Metadata URL</label>
                                <input
                                    type="text"
                                    className="block w-full px-3 py-2 border border-[#333] rounded-md bg-[#000] text-white placeholder-neutral-600 focus:outline-none focus:border-[#d0f200] sm:text-sm"
                                    placeholder="https://"
                                />
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* 2. User Management (CRM Dashboard) */}
            <div className="bg-[#111] backdrop-blur-sm p-6 rounded-xl border border-white/5 shadow-lg">
                <div className="flex items-center justify-between mb-6 border-b border-white/10 pb-4">
                    <div className="flex items-center gap-3">
                        <User className="w-6 h-6 text-[#d0f200]" />
                        <div>
                            <h2 className="text-xl font-bold text-white">User Management</h2>
                            <p className="text-xs text-neutral-400">Partner CRM Dashboard [FE] [V1]</p>
                        </div>
                    </div>
                    <button className="bg-[#d0f200] hover:bg-[#badd00] text-black px-3 py-1.5 rounded-md font-bold text-sm flex items-center transition-colors">
                        <Plus className="w-4 h-4 mr-2" />
                        Invite User
                    </button>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="text-neutral-500 text-sm border-b border-white/10">
                                <th className="pb-3 pl-2 font-medium">User</th>
                                <th className="pb-3 font-medium">Role</th>
                                <th className="pb-3 font-medium">Status</th>
                                <th className="pb-3 pr-2 text-right font-medium">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm">
                            {users.map((user) => (
                                <tr key={user.id} className="group border-b border-white/5 hover:bg-[#1a1a1a] transition-colors">
                                    <td className="py-3 pl-2">
                                        <div className="font-medium text-white">{user.name}</div>
                                        <div className="text-xs text-neutral-500">{user.email}</div>
                                    </td>
                                    <td className="py-3">
                                        <span className={`px-2 py-0.5 rounded text-xs font-bold ${user.role === 'Admin' ? 'bg-purple-500/20 text-purple-400' : 'bg-neutral-800 text-neutral-400'
                                            }`}>
                                            {user.role}
                                        </span>
                                    </td>
                                    <td className="py-3">
                                        <span className={`flex items-center gap-1.5 ${user.status === 'Active' ? 'text-green-400' : 'text-amber-400'
                                            }`}>
                                            <span className={`w-1.5 h-1.5 rounded-full ${user.status === 'Active' ? 'bg-green-400' : 'bg-amber-400'
                                                }`}></span>
                                            {user.status}
                                        </span>
                                    </td>
                                    <td className="py-3 pr-2 text-right opacity-0 group-hover:opacity-100 transition-opacity">
                                        <button className="text-neutral-400 hover:text-white mr-3 transition-colors" title="Edit Permissions">
                                            <Shield className="w-4 h-4" />
                                        </button>
                                        <button className="text-neutral-400 hover:text-red-500 transition-colors" title="Revoke Access">
                                            <Trash2 className="w-4 h-4" />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* 3. Network & Tenant Switcher Settings */}
            <div className="bg-[#111] backdrop-blur-sm p-6 rounded-xl border border-white/5 shadow-lg">
                <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-4">
                    <Network className="w-6 h-6 text-[#d0f200]" />
                    <div>
                        <h2 className="text-xl font-bold text-white">Unified Partner Network</h2>
                        <p className="text-xs text-neutral-400">Manage connected libraries for Tenant Switcher [V1]</p>
                    </div>
                </div>

                <div className="space-y-4">
                    <div className="p-4 bg-[#1a1a1a] rounded-lg border border-white/5">
                        <div className="flex items-start gap-3">
                            <Building2 className="w-5 h-5 text-neutral-400 mt-0.5" />
                            <div>
                                <h3 className="text-sm font-bold text-white">Network Configuration</h3>
                                <p className="text-xs text-neutral-400 mt-1 mb-3">
                                    Users in your organization can switch between these connected partner libraries without re-authenticating.
                                </p>
                                <div className="space-y-2">
                                    {network.map((item) => (
                                        <div key={item.id} className="flex items-center justify-between bg-black/50 p-2 rounded border border-white/5">
                                            <div className="flex items-center gap-2">
                                                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                                <span className="text-sm text-white">{item.name}</span>
                                                <span className="text-[10px] bg-neutral-800 text-neutral-400 px-1.5 rounded uppercase">{item.role}</span>
                                            </div>
                                            <button className="text-xs text-[#d0f200] hover:underline">Configure</button>
                                        </div>
                                    ))}
                                    <button className="w-full py-2 border border-dashed border-neutral-700 text-neutral-500 text-xs rounded hover:border-neutral-500 hover:text-neutral-300 transition-colors flex items-center justify-center gap-2">
                                        <Plus className="w-3 h-3" />
                                        Add Partner Library
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
