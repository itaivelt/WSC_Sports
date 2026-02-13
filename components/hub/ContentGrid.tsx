"use client";

import { Play, Download, Share2, MoreHorizontal } from "lucide-react";
import Image from "next/image";

// Mock Data
const MOCK_ASSETS = [
    {
        id: 1,
        title: "Lionel Messi - Goal vs Real Madrid",
        duration: "0:45",
        date: "2 hours ago",
        thumbnail: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&q=80&w=600",
        tags: ["Soccer", "La Liga", "Goal"],
    },
    {
        id: 2,
        title: "LeBron James - Dunk Highlight",
        duration: "0:32",
        date: "4 hours ago",
        thumbnail: "https://images.unsplash.com/photo-1546519638-68e109498ad0?auto=format&fit=crop&q=80&w=600",
        tags: ["Basketball", "NBA", "Dunk"],
    },
    {
        id: 3,
        title: "Touchdown - Super Bowl LVIII",
        duration: "1:12",
        date: "1 day ago",
        thumbnail: "https://images.unsplash.com/photo-1566577739112-5180d4bf9390?auto=format&fit=crop&q=80&w=600",
        tags: ["NFL", "Touchdown", "Finals"],
    },
    {
        id: 4,
        title: "Steph Curry - 3 Pointer",
        duration: "0:28",
        date: "2 days ago",
        thumbnail: "https://images.unsplash.com/photo-1519861531473-92002639313cc?auto=format&fit=crop&q=80&w=600",
        tags: ["Basketball", "NBA", "3-Point"],
    },
    {
        id: 5,
        title: "Haaland - Hat Trick vs United",
        duration: "2:05",
        date: "3 days ago",
        thumbnail: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&q=80&w=600",
        tags: ["Soccer", "PL", "Pro"],
    },
    {
        id: 6,
        title: "F1 - Monaco GP Highlights",
        duration: "5:30",
        date: "1 week ago",
        thumbnail: "https://images.unsplash.com/photo-1533560906234-8c430e462dbe?auto=format&fit=crop&q=80&w=600",
        tags: ["Racing", "F1", "Monaco"],
    },
];

export function ContentGrid() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6">
            {MOCK_ASSETS.map((asset) => (
                <div key={asset.id} className="group bg-[#111] border border-white/5 rounded-lg overflow-hidden hover:border-[#d0f200]/50 transition-all hover:shadow-lg hover:shadow-[#d0f200]/10">
                    {/* Thumbnail */}
                    <div className="relative aspect-video bg-[#000]">
                        {/* Use standard img for demo simplicity and external URLs */}
                        <img
                            src={asset.thumbnail}
                            alt={asset.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                        />
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                            <button className="bg-[#d0f200] p-4 rounded-full text-black hover:scale-110 transition-all shadow-[0_0_20px_rgba(208,242,0,0.5)]">
                                <Play className="w-6 h-6 fill-current" />
                            </button>
                        </div>
                        <div className="absolute bottom-2 right-2 bg-black/80 px-1.5 py-0.5 rounded text-xs text-white font-medium border border-white/10">
                            {asset.duration}
                        </div>
                    </div>

                    {/* Details */}
                    <div className="p-4">
                        <div className="flex justify-between items-start mb-2">
                            <h3 className="text-white font-semibold text-sm line-clamp-2 leading-tight group-hover:text-[#d0f200] transition-colors">
                                {asset.title}
                            </h3>
                            <button className="text-neutral-500 hover:text-white">
                                <MoreHorizontal className="w-4 h-4" />
                            </button>
                        </div>

                        <div className="flex flex-wrap gap-1 mb-3">
                            {asset.tags.map(tag => (
                                <span key={tag} className="text-[10px] bg-black text-neutral-400 px-1.5 py-0.5 rounded border border-white/10">
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <div className="flex items-center justify-between pt-3 border-t border-white/5">
                            <span className="text-xs text-neutral-500">{asset.date}</span>
                            <div className="flex gap-2">
                                <button className="p-1.5 hover:bg-[#222] rounded text-neutral-400 hover:text-[#d0f200] transition-colors" title="Download">
                                    <Download className="w-4 h-4" />
                                </button>
                                <button className="p-1.5 hover:bg-[#222] rounded text-neutral-400 hover:text-white transition-colors" title="Share">
                                    <Share2 className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
