"use client";

import { Search, Filter, Folder, Image, Video, FileText } from "lucide-react";

export default function LibraryPage() {
    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-extrabold text-white mb-2">Content Library</h1>
                    <p className="text-neutral-400">Centralized asset management and archive.</p>
                </div>
                <div className="flex items-center gap-3">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
                        <input
                            type="text"
                            placeholder="Search assets..."
                            className="bg-[#1a1a1a] border border-[#333] text-white pl-10 pr-4 py-2 rounded-md focus:outline-none focus:border-[#d0f200] w-64 text-sm"
                        />
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="col-span-1 bg-[#111] p-4 rounded-xl border border-[#333] h-[calc(100vh-200px)]">
                    <h3 className="font-bold text-white mb-4 flex items-center gap-2">
                        <Filter className="w-4 h-4" /> Filters
                    </h3>
                    <div className="space-y-4 text-sm text-neutral-400">
                        <div className="space-y-2">
                            <div className="font-medium text-white">Type</div>
                            <label className="flex items-center gap-2"><input type="checkbox" className="rounded bg-[#333] border-none" /> Video</label>
                            <label className="flex items-center gap-2"><input type="checkbox" className="rounded bg-[#333] border-none" /> Image</label>
                            <label className="flex items-center gap-2"><input type="checkbox" className="rounded bg-[#333] border-none" /> Document</label>
                        </div>
                        <div className="space-y-2">
                            <div className="font-medium text-white">Date</div>
                            <label className="flex items-center gap-2"><input type="checkbox" className="rounded bg-[#333] border-none" /> Last 24h</label>
                            <label className="flex items-center gap-2"><input type="checkbox" className="rounded bg-[#333] border-none" /> Last Week</label>
                        </div>
                    </div>
                </div>

                <div className="col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-min">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                        <div key={i} className="bg-[#1a1a1a] rounded-lg overflow-hidden border border-[#333] hover:border-[#d0f200] transition-colors group cursor-pointer">
                            <div className="aspect-video bg-neutral-800 relative">
                                <img src={`https://loremflickr.com/400/225/sports?random=${i}`} className="w-full h-full object-cover" />
                                <div className="absolute top-2 right-2 bg-black/60 px-1.5 py-0.5 rounded text-[10px] text-white">0:45</div>
                            </div>
                            <div className="p-3">
                                <div className="font-medium text-white text-sm mb-1 truncate">Game Highlight #{i}</div>
                                <div className="text-xs text-neutral-500">Feb {14 - i}, 2026 • 15 MB</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
