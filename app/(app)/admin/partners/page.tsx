"use client";

import { useState } from "react";
import { Plus, Search, MoreHorizontal, Link, Shield, AlertCircle } from "lucide-react";
import { useRightsProvider } from "@/lib/rights-provider-context";

export default function PartnersListPage() {
    const { setSelectedProvider } = useRightsProvider();

    const [partners] = useState([
        { id: 1, name: "FedEx", logo: "https://upload.wikimedia.org/wikipedia/commons/9/9d/FedEx_Express.svg", status: "Active", users: 120, alerts: 0 },
        { id: 2, name: "ESPN", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/ESPN_wordmark.svg", status: "Active", users: 312, alerts: 2 },
        { id: 3, name: "TNT Sports", logo: "https://upload.wikimedia.org/wikipedia/commons/1/14/TNT_Sports_logo.svg", status: "Active", users: 189, alerts: 0 },
        { id: 4, name: "State Farm", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a2/State_Farm_logo.svg", status: "Active", users: 56, alerts: 0 },
        { id: 5, name: "Nike", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg", status: "Active", users: 450, alerts: 1 },
        { id: 6, name: "American Express", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/American_Express_logo_%282018%29.svg", status: "Active", users: 95, alerts: 0 },
        { id: 7, name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg", status: "Active", users: 800, alerts: 3 },
        { id: 8, name: "Beats by Dre", logo: "https://upload.wikimedia.org/wikipedia/commons/1/17/Beats_Electronics_logo.svg", status: "Maintenance", users: 45, alerts: 0 },
    ]);

    return (
        <div className="max-w-7xl mx-auto space-y-8 pb-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-extrabold text-white mb-2">Partners Overview</h1>
                    <p className="text-neutral-400">Manage all connected sports organizations and rights holders.</p>
                </div>
                <div className="flex items-center gap-3">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
                        <input
                            type="text"
                            placeholder="Search partners..."
                            className="bg-[#1a1a1a] border border-[#333] text-white pl-10 pr-4 py-2 rounded-md focus:outline-none focus:border-[#d0f200] w-64 text-sm"
                        />
                    </div>
                    <button className="bg-[#d0f200] hover:bg-[#badd00] text-black px-4 py-2 rounded-md font-bold text-sm flex items-center transition-colors">
                        <Plus className="w-4 h-4 mr-2" />
                        Add Partner
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {partners.map((partner) => (
                    <div key={partner.id} className="bg-[#111] border border-[#333] rounded-xl p-6 hover:border-neutral-500 transition-colors group relative overflow-hidden">
                        {/* Status Indicator */}
                        <div className="absolute top-4 right-4 flex items-center gap-2">
                            {partner.alerts > 0 && (
                                <span className="flex items-center justify-center w-5 h-5 bg-red-500/20 text-red-400 rounded-full text-xs font-bold ring-1 ring-red-500/50" title={`${partner.alerts} Alerts`}>
                                    {partner.alerts}
                                </span>
                            )}
                            <div className={`w-2 h-2 rounded-full ${partner.status === 'Active' ? 'bg-green-500' : partner.status === 'Maintenance' ? 'bg-amber-500' : 'bg-red-500'}`} title={partner.status}></div>
                        </div>

                        <div className="flex flex-col items-center text-center mb-6">
                            <div className="w-16 h-16 bg-white rounded-lg p-2 flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                                <img src={partner.logo} alt={partner.name} className="w-full h-full object-contain" />
                            </div>
                            <h3 className="text-lg font-bold text-white">{partner.name}</h3>
                            <p className="text-xs text-neutral-500 mt-1">{partner.users} Active Users</p>
                        </div>

                        <div className="grid grid-cols-2 gap-3 pt-4 border-t border-[#222]">
                            <button
                                onClick={() => setSelectedProvider(partner.name as any)}
                                className="flex items-center justify-center px-3 py-2 bg-[#1a1a1a] hover:bg-[#252525] text-neutral-300 rounded text-xs font-medium transition-colors"
                            >
                                <Link className="w-3 h-3 mr-2" />
                                View Hub
                            </button>
                            <button className="flex items-center justify-center px-3 py-2 bg-[#1a1a1a] hover:bg-[#252525] text-neutral-300 rounded text-xs font-medium transition-colors">
                                <Shield className="w-3 h-3 mr-2" />
                                Manage
                            </button>
                        </div>
                    </div>
                ))}

                {/* Add New Card */}
                <button className="border border-dashed border-[#333] rounded-xl p-6 flex flex-col items-center justify-center gap-4 hover:border-[#d0f200] hover:bg-[#d0f200]/5 transition-all group h-full min-h-[200px]">
                    <div className="w-12 h-12 rounded-full bg-[#1a1a1a] flex items-center justify-center group-hover:bg-[#d0f200] transition-colors">
                        <Plus className="w-6 h-6 text-neutral-500 group-hover:text-black transition-colors" />
                    </div>
                    <span className="text-sm font-medium text-neutral-400 group-hover:text-[#d0f200]">Create New Partner</span>
                </button>
            </div>
        </div>
    );
}
