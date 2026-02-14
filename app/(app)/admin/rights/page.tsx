"use client";

import { useState } from "react";
import { Upload, Shield, Clock, Globe, FileText, Check, AlertTriangle, Eye, Search, Layers } from "lucide-react";

export default function RightsManagerPage() {
    const [activeTab, setActiveTab] = useState<'rules' | 'groups' | 'inspector'>('rules');

    return (
        <div className="max-w-7xl mx-auto space-y-8 pb-10">
            {/* Header */}
            <div>
                <h1 className="text-3xl font-extrabold text-white mb-2">Rights Logic Engine</h1>
                <p className="text-neutral-400">Manage automated permissions, geo-fencing, and contract logic.</p>
            </div>

            {/* AI Contract Ingest (Future Feature) */}
            <div className="bg-gradient-to-r from-[#111] to-[#1a1a1a] border border-[#333] rounded-xl p-8 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <FileText className="w-32 h-32 text-[#d0f200]" />
                </div>
                <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="bg-[#d0f200]/10 p-2 rounded-lg">
                            <FileText className="w-6 h-6 text-[#d0f200]" />
                        </div>
                        <h2 className="text-xl font-bold text-white">Contract Ingest AI</h2>
                        <span className="bg-[#d0f200] text-black text-[10px] font-bold px-2 py-0.5 rounded uppercase">Beta</span>
                    </div>
                    <p className="text-neutral-400 max-w-2xl mb-6">
                        Upload a partner contract (PDF) to automatically parse rights, expiration dates, and territory restrictions.
                        The Logic Engine will auto-configure the rules below.
                    </p>
                    <button className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-lg font-bold hover:bg-neutral-200 transition-colors">
                        <Upload className="w-4 h-4" />
                        Upload Contract PDF
                    </button>
                </div>
            </div>

            {/* Main Content Tabs */}
            <div className="flex flex-col gap-6">
                <div className="flex border-b border-[#333]">
                    <button
                        onClick={() => setActiveTab('rules')}
                        className={`px-6 py-3 text-sm font-medium border-b-2 transition-colors ${activeTab === 'rules' ? 'border-[#d0f200] text-[#d0f200]' : 'border-transparent text-neutral-400 hover:text-white'}`}
                    >
                        Global Rules
                    </button>
                    <button
                        onClick={() => setActiveTab('groups')}
                        className={`px-6 py-3 text-sm font-medium border-b-2 transition-colors ${activeTab === 'groups' ? 'border-[#d0f200] text-[#d0f200]' : 'border-transparent text-neutral-400 hover:text-white'}`}
                    >
                        Partner Groups (RBAC)
                    </button>
                    <button
                        onClick={() => setActiveTab('inspector')}
                        className={`px-6 py-3 text-sm font-medium border-b-2 transition-colors ${activeTab === 'inspector' ? 'border-[#d0f200] text-[#d0f200]' : 'border-transparent text-neutral-400 hover:text-white'}`}
                    >
                        Visibility Inspector
                    </button>
                </div>

                {/* Tab Content */}
                <div className="min-h-[400px]">
                    {activeTab === 'rules' && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Geo-Fencing */}
                            <div className="bg-[#111] border border-[#333] rounded-xl p-6">
                                <div className="flex items-start justify-between mb-4">
                                    <div className="flex items-center gap-3">
                                        <div className="bg-blue-500/10 p-2 rounded-lg">
                                            <Globe className="w-5 h-5 text-blue-400" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-white">Geo-Fencing Guard</h3>
                                            <p className="text-xs text-neutral-500">Territory restrictions</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center">
                                        <span className="text-xs text-[#d0f200] font-bold mr-2">Active</span>
                                        <div className="w-8 h-4 bg-[#d0f200]/20 rounded-full relative">
                                            <div className="absolute right-0.5 top-0.5 w-3 h-3 bg-[#d0f200] rounded-full"></div>
                                        </div>
                                    </div>
                                </div>
                                <p className="text-sm text-neutral-400 mb-4">
                                    Automated filter checking User IP against asset metadata.
                                </p>
                                <div className="space-y-3">
                                    <div className="flex items-center justify-between bg-black/50 p-3 rounded border border-[#222]">
                                        <span className="text-sm text-neutral-300">Block UK users from PL clips</span>
                                        <span className="text-[10px] bg-red-500/10 text-red-400 px-2 py-1 rounded">Blocking 12k Req/mo</span>
                                    </div>
                                    <div className="flex items-center justify-between bg-black/50 p-3 rounded border border-[#222]">
                                        <span className="text-sm text-neutral-300">Block EU users from NBA live</span>
                                        <span className="text-[10px] bg-red-500/10 text-red-400 px-2 py-1 rounded">Blocking 5k Req/mo</span>
                                    </div>
                                </div>
                            </div>

                            {/* Embargo Timer */}
                            <div className="bg-[#111] border border-[#333] rounded-xl p-6">
                                <div className="flex items-start justify-between mb-4">
                                    <div className="flex items-center gap-3">
                                        <div className="bg-amber-500/10 p-2 rounded-lg">
                                            <Clock className="w-5 h-5 text-amber-400" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-white">Embargo Timer</h3>
                                            <p className="text-xs text-neutral-500">Time-lock logic</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center">
                                        <span className="text-xs text-[#d0f200] font-bold mr-2">Active</span>
                                        <div className="w-8 h-4 bg-[#d0f200]/20 rounded-full relative">
                                            <div className="absolute right-0.5 top-0.5 w-3 h-3 bg-[#d0f200] rounded-full"></div>
                                        </div>
                                    </div>
                                </div>
                                <p className="text-sm text-neutral-400 mb-4">
                                    Prevent downloads until specific timestamps (e.g., Game End + 1h).
                                </p>
                                <div className="space-y-3">
                                    <div className="flex items-center justify-between bg-black/50 p-3 rounded border border-[#222]">
                                        <span className="text-sm text-neutral-300">Linear TV Holdback (1 Hour)</span>
                                        <span className="text-[10px] bg-amber-500/10 text-amber-400 px-2 py-1 rounded">24 Assets Pending</span>
                                    </div>
                                    <div className="flex items-center justify-between bg-black/50 p-3 rounded border border-[#222]">
                                        <span className="text-sm text-neutral-300">Exclusive Window (24 Hours)</span>
                                        <span className="text-[10px] bg-amber-500/10 text-amber-400 px-2 py-1 rounded">2 Assets Pending</span>
                                    </div>
                                </div>
                            </div>

                            {/* Pointer Architecture Info */}
                            <div className="bg-[#111] border border-[#333] rounded-xl p-6 md:col-span-2">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="bg-purple-500/10 p-2 rounded-lg">
                                        <Layers className="w-5 h-5 text-purple-400" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-white">Pointer Architecture Status</h3>
                                        <p className="text-xs text-neutral-500">Infrastructure Health</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-8">
                                    <div className="flex-1">
                                        <div className="text-2xl font-bold text-white mb-1">0% Duplication</div>
                                        <p className="text-xs text-neutral-400">All partners access the "Golden Master" asset via permission layers.</p>
                                    </div>
                                    <div className="h-10 w-px bg-[#333]"></div>
                                    <div className="flex-1">
                                        <div className="text-2xl font-bold text-white mb-1">14ms Latency</div>
                                        <p className="text-xs text-neutral-400">Average permission check time.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'groups' && (
                        <div className="bg-[#111] border border-[#333] rounded-xl overflow-hidden">
                            <table className="w-full text-left">
                                <thead className="bg-black border-b border-[#333]">
                                    <tr>
                                        <th className="p-4 text-xs font-bold text-neutral-500 uppercase">Group Name</th>
                                        <th className="p-4 text-xs font-bold text-neutral-500 uppercase">Permissions</th>
                                        <th className="p-4 text-xs font-bold text-neutral-500 uppercase">Members</th>
                                        <th className="p-4 text-xs font-bold text-neutral-500 uppercase">Status</th>
                                        <th className="p-4"></th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-[#222]">
                                    <tr className="group hover:bg-[#1a1a1a]">
                                        <td className="p-4">
                                            <div className="font-bold text-white">Gold Sponsors</div>
                                            <div className="text-xs text-neutral-500">Tier 1 Access</div>
                                        </td>
                                        <td className="p-4">
                                            <span className="text-xs bg-[#d0f200]/10 text-[#d0f200] px-2 py-1 rounded">Full Library</span>
                                            <span className="text-xs bg-[#d0f200]/10 text-[#d0f200] px-2 py-1 rounded ml-2">Clean Feed</span>
                                        </td>
                                        <td className="p-4 text-sm text-neutral-300">Nike, FedEx, Amex</td>
                                        <td className="p-4 text-green-400 text-xs font-bold">Active</td>
                                        <td className="p-4 text-right">
                                            <button className="text-neutral-500 hover:text-white font-medium text-xs">Edit</button>
                                        </td>
                                    </tr>
                                    <tr className="group hover:bg-[#1a1a1a]">
                                        <td className="p-4">
                                            <div className="font-bold text-white">News Agencies</div>
                                            <div className="text-xs text-neutral-500">Tier 2 Access</div>
                                        </td>
                                        <td className="p-4">
                                            <span className="text-xs bg-neutral-800 text-neutral-300 px-2 py-1 rounded">Highlights Only</span>
                                            <span className="text-xs bg-neutral-800 text-neutral-300 px-2 py-1 rounded ml-2">Embargo: 1h</span>
                                        </td>
                                        <td className="p-4 text-sm text-neutral-300">Reuters, AP</td>
                                        <td className="p-4 text-green-400 text-xs font-bold">Active</td>
                                        <td className="p-4 text-right">
                                            <button className="text-neutral-500 hover:text-white font-medium text-xs">Edit</button>
                                        </td>
                                    </tr>
                                    <tr className="group hover:bg-[#1a1a1a]">
                                        <td className="p-4">
                                            <div className="font-bold text-white">Regional Partners (EU)</div>
                                            <div className="text-xs text-neutral-500">Geo Restricted</div>
                                        </td>
                                        <td className="p-4">
                                            <span className="text-xs bg-red-500/10 text-red-400 px-2 py-1 rounded">Geo-Fence: EU Only</span>
                                        </td>
                                        <td className="p-4 text-sm text-neutral-300">Sky Sports, Canal+</td>
                                        <td className="p-4 text-green-400 text-xs font-bold">Active</td>
                                        <td className="p-4 text-right">
                                            <button className="text-neutral-500 hover:text-white font-medium text-xs">Edit</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    )}

                    {activeTab === 'inspector' && (
                        <div className="space-y-6">
                            <div className="bg-[#111] border border-[#333] rounded-xl p-6">
                                <h3 className="font-bold text-white mb-4">Visibility Inspector</h3>
                                <div className="flex gap-4 mb-6">
                                    <div className="flex-1 relative">
                                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
                                        <input
                                            type="text"
                                            placeholder="Enter Asset ID or Title to inspect permissions..."
                                            className="w-full bg-black border border-[#333] rounded-md py-2 pl-10 pr-4 text-white focus:outline-none focus:border-[#d0f200]"
                                        />
                                    </div>
                                    <button className="bg-[#d0f200] text-black font-bold px-6 rounded-md hover:bg-[#badd00] transition-colors">
                                        Inspect
                                    </button>
                                </div>

                                {/* Mock Result */}
                                <div className="bg-black border border-[#222] rounded-lg p-6 flex gap-8">
                                    <div className="w-48 aspect-video bg-[#222] rounded flex items-center justify-center relative overflow-hidden">
                                        <img src="https://images.unsplash.com/photo-1546519638-68e109498ad0?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover opacity-50" />
                                        <Eye className="w-8 h-8 text-neutral-500 absolute" />
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="text-lg font-bold text-white mb-1">LeBron James - Dunk Highlight</h4>
                                        <p className="text-xs text-neutral-500 mb-4">ID: asset_8823_nk2</p>

                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <p className="text-xs font-bold text-neutral-400 uppercase mb-2">Visible To</p>
                                                <div className="space-y-1">
                                                    <div className="flex items-center gap-2 text-sm text-green-400">
                                                        <Check className="w-3 h-3" /> Gold Sponsors
                                                    </div>
                                                    <div className="flex items-center gap-2 text-sm text-green-400">
                                                        <Check className="w-3 h-3" /> Broadcasters
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <p className="text-xs font-bold text-neutral-400 uppercase mb-2">Hidden From</p>
                                                <div className="space-y-1">
                                                    <div className="flex items-center gap-2 text-sm text-red-400">
                                                        <AlertTriangle className="w-3 h-3" /> News Agencies (Embargo: 45m remaining)
                                                    </div>
                                                    <div className="flex items-center gap-2 text-sm text-red-400">
                                                        <AlertTriangle className="w-3 h-3" /> Basic Tier (Not included)
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
