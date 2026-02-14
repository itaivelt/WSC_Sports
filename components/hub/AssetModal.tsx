"use client";

import { X, Play, Download, Share2, LayoutTemplate, EyeOff, Palette, ShoppingBag, Clapperboard, MonitorPlay } from "lucide-react";

// Actually, I don't know if shadcn is installed. I'll build a custom fixed overlay for safety.

export interface Asset {
    id: number;
    title: string;
    duration: string;
    date: string;
    thumbnail: string;
    tags?: string[];
}

interface AssetModalProps {
    asset: Asset | null;
    isOpen: boolean;
    onClose: () => void;
}

export function AssetModal({ asset, isOpen, onClose }: AssetModalProps) {
    if (!isOpen || !asset) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            ></div>

            {/* Modal Content */}
            <div className="relative bg-[#111] border border-[#333] rounded-xl w-full max-w-5xl max-h-[90vh] overflow-hidden flex flex-col md:flex-row shadow-2xl animate-in fade-in zoom-in-95 duration-200">

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/80 text-white rounded-full backdrop-blur-md transition-colors"
                >
                    <X className="w-5 h-5" />
                </button>

                {/* Left: Video Player */}
                <div className="w-full md:w-2/3 bg-black flex flex-col relative group">
                    <div className="flex-1 relative flex items-center justify-center bg-black aspect-video">
                        <img
                            src={asset.thumbnail}
                            alt={asset.title}
                            className="w-full h-full object-contain opacity-50"
                        />
                        <button className="absolute inset-0 flex items-center justify-center group-hover:scale-105 transition-transform">
                            <div className="bg-[#d0f200] p-6 rounded-full text-black shadow-[0_0_30px_rgba(208,242,0,0.3)]">
                                <Play className="w-12 h-12 fill-current ml-1" />
                            </div>
                        </button>

                        {/* Player Controls Mockup */}
                        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                            <div className="h-1 bg-white/20 rounded-full mb-4 overflow-hidden">
                                <div className="h-full w-1/3 bg-[#d0f200]"></div>
                            </div>
                            <div className="flex justify-between text-white text-xs font-medium">
                                <span>00:15 / {asset.duration}</span>
                                <span>1080p • 60fps</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right: Actions & Metadata */}
                <div className="w-full md:w-1/3 bg-[#111] p-6 md:p-8 overflow-y-auto border-l border-[#333]">
                    <div className="mb-6">
                        <h2 className="text-2xl font-bold text-white mb-2 leading-tight">{asset.title}</h2>
                        <div className="flex flex-wrap gap-2 text-xs mb-4">
                            {(asset.tags || ["Sport", "Action", "Highlight"]).map(tag => (
                                <span key={tag} className="px-2 py-1 bg-[#222] text-neutral-300 rounded border border-[#333]">
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <p className="text-sm text-neutral-400">
                            High-quality broadcast clip available for immediate distribution.
                            Rights cleared for: <span className="text-[#d0f200]">Global, Digital, Social</span>.
                        </p>
                    </div>

                    <div className="space-y-6">
                        {/* Primary Actions */}
                        <div>
                            <h3 className="text-xs font-bold text-neutral-500 uppercase mb-3 tracking-wider">Distribution</h3>
                            <div className="grid grid-cols-1 gap-3">
                                <button className="flex items-center gap-3 p-3 bg-[#d0f200] hover:bg-[#badd00] text-black rounded-lg font-bold transition-colors text-sm">
                                    <Download className="w-4 h-4" />
                                    <span>Download Broadcast Pack</span>
                                </button>
                                <button className="flex items-center gap-3 p-3 bg-[#222] hover:bg-[#333] text-white rounded-lg transition-colors text-sm border border-[#333] group">
                                    <Share2 className="w-4 h-4 text-[#d0f200]" />
                                    <span>Push to Social Media</span>
                                    <span className="ml-auto text-[10px] bg-black px-2 py-0.5 rounded text-neutral-500 group-hover:text-neutral-400">Direct API</span>
                                </button>
                            </div>
                        </div>

                        {/* Adjustments */}
                        <div>
                            <h3 className="text-xs font-bold text-neutral-500 uppercase mb-3 tracking-wider">Studio Actions</h3>
                            <div className="grid grid-cols-2 gap-3">
                                <button className="flex flex-col items-center justify-center gap-2 p-3 bg-[#1a1a1a] hover:bg-[#222] text-neutral-300 rounded-lg border border-[#333] hover:border-neutral-500 transition-all text-xs text-center h-24">
                                    <LayoutTemplate className="w-5 h-5 text-[#d0f200]" />
                                    <span>9:16 Crop</span>
                                </button>
                                <button className="flex flex-col items-center justify-center gap-2 p-3 bg-[#1a1a1a] hover:bg-[#222] text-neutral-300 rounded-lg border border-[#333] hover:border-neutral-500 transition-all text-xs text-center h-24">
                                    <EyeOff className="w-5 h-5 text-neutral-400" />
                                    <span>Clean Feed</span>
                                </button>
                                <button className="flex flex-col items-center justify-center gap-2 p-3 bg-[#1a1a1a] hover:bg-[#222] text-neutral-300 rounded-lg border border-[#333] hover:border-neutral-500 transition-all text-xs text-center h-24">
                                    <Palette className="w-5 h-5 text-purple-400" />
                                    <span>Sponsor Studio</span>
                                </button>
                                <button className="flex flex-col items-center justify-center gap-2 p-3 bg-[#1a1a1a] hover:bg-[#222] text-neutral-300 rounded-lg border border-[#333] hover:border-neutral-500 transition-all text-xs text-center h-24">
                                    <ShoppingBag className="w-5 h-5 text-blue-400" />
                                    <span>Commerce</span>
                                </button>
                            </div>
                        </div>

                        <div className="pt-4 border-t border-[#333]">
                            <div className="flex items-center justify-between text-xs text-neutral-500">
                                <span>Asset ID: {asset.id}_2024</span>
                                <span>Ingested: {asset.date}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
