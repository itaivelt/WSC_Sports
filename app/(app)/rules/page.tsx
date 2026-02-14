"use client";

import { Save, Plus, ArrowRight, Video, FileText, Image, Layout, Settings, Play } from "lucide-react";

export default function RulesPage() {
    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-extrabold text-white mb-2">Content Creation Rules</h1>
                    <p className="text-neutral-400">Automate your content generation workflow.</p>
                </div>
                <div className="flex items-center gap-3">
                    <button className="bg-[#d0f200] hover:bg-[#badd00] text-black px-4 py-2 rounded-md font-bold text-sm flex items-center transition-colors">
                        <Plus className="w-4 h-4 mr-2" />
                        Create New Rule
                    </button>
                </div>
            </div>

            <div className="space-y-4">
                {[
                    { id: 1, name: "Auto-Highlight: Goals", status: "Active", condition: "If 'Goal' detected in 'Soccer' match", action: "Create Short Highlight + Distribute to Social" },
                    { id: 2, name: "Replay Compilation", status: "Paused", condition: "End of Half: 'Top 5 Plays'", action: "Create 3min Reel + Email to Subscribers" },
                    { id: 3, name: "Player Spotlight", status: "Active", condition: "If 'LeBron James' plays > 20min", action: "Generate Player Recap VOD" },
                ].map((rule) => (
                    <div key={rule.id} className="bg-[#111] border border-[#333] rounded-xl p-6 group hover:border-neutral-500 transition-colors cursor-pointer relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                            <Settings className="w-5 h-5 text-neutral-500 hover:text-white" />
                        </div>
                        <div className="flex items-start gap-4">
                            <div className={`p-3 rounded-lg ${rule.id === 1 ? 'bg-green-500/10 text-green-400' : rule.id === 2 ? 'bg-amber-500/10 text-amber-400' : 'bg-blue-500/10 text-blue-400'}`}>
                                <Play className="w-6 h-6 fill-current" />
                            </div>
                            <div className="flex-1">
                                <div className="flex items-center gap-3 mb-1">
                                    <h3 className="font-bold text-white text-lg">{rule.name}</h3>
                                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${rule.status === 'Active' ? 'bg-green-500/20 text-green-400' : 'bg-neutral-800 text-neutral-400'}`}>
                                        {rule.status}
                                    </span>
                                </div>
                                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mt-3 text-sm">
                                    <div className="flex items-center gap-2 text-neutral-400 bg-[#1a1a1a] px-3 py-1.5 rounded border border-[#333]">
                                        <span className="font-mono text-xs text-[#d0f200]">IF</span> {rule.condition}
                                    </div>
                                    <ArrowRight className="hidden md:block w-4 h-4 text-neutral-600" />
                                    <div className="flex items-center gap-2 text-neutral-400 bg-[#1a1a1a] px-3 py-1.5 rounded border border-[#333]">
                                        <span className="font-mono text-xs text-[#d0f200]">THEN</span> {rule.action}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
