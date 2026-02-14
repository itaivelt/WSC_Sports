import { useRef } from "react";
import { ChevronLeft, ChevronRight, Play, Check, Plus, ThumbsUp, ChevronDown, Download, Share2, LayoutTemplate } from "lucide-react";
import { cn } from "@/lib/utils";

interface Asset {
    id: number;
    title: string;
    duration: string;
    thumbnail: string;
    date: string;
}

interface ContentRowProps {
    title: React.ReactNode;
    assets: Asset[];
}

export function ContentRow({ title, assets }: ContentRowProps) {
    const rowRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (rowRef.current) {
            const { current } = rowRef;
            const scrollAmount = direction === 'left' ? -current.offsetWidth * 0.8 : current.offsetWidth * 0.8;
            current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <div className="mb-8 group/row">
            <h2 className="text-xl font-bold text-white mb-4 px-6 md:px-12 flex items-center gap-2">
                {title}
                <ChevronRight className="w-4 h-4 text-[#d0f200] opacity-0 group-hover/row:opacity-100 transition-opacity -ml-1" />
            </h2>

            <div className="relative group">
                <button
                    onClick={() => scroll('left')}
                    className="absolute left-0 top-0 bottom-0 z-40 bg-black/50 hover:bg-black/80 text-white w-12 flex items-center justify-center transition-all duration-300 backdrop-blur-sm cursor-pointer opacity-0 group-hover:opacity-100"
                >
                    <ChevronLeft className="w-8 h-8" />
                </button>

                <div
                    ref={rowRef}
                    className="flex gap-4 overflow-x-auto px-4 md:px-12 pb-12 pt-8 scroll-smooth snap-x snap-mandatory"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {assets.map((asset) => (
                        <div
                            key={asset.id}
                            className="flex-none w-[280px] md:w-[320px] aspect-video relative group/card cursor-pointer transition-all duration-300 hover:scale-110 hover:z-50 origin-center snap-start"
                        >
                            <div className="w-full h-full rounded-md overflow-hidden bg-[#111] shadow-lg transition-all duration-300 group-hover/card:shadow-[#d0f200]/20 group-hover/card:ring-2 group-hover/card:ring-[#d0f200]">
                                <img
                                    src={asset.thumbnail}
                                    alt={asset.title}
                                    className="w-full h-full object-cover"
                                />

                                {/* Netflix-style Hover Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">

                                    {/* Actions Row */}
                                    <div className="flex items-center justify-between mb-3 translate-y-4 group-hover/card:translate-y-0 transition-transform duration-300 delay-75">
                                        <div className="flex items-center gap-2">
                                            <button className="bg-white text-black p-2 rounded-full hover:bg-neutral-200 transition-colors" title="Play">
                                                <Play className="w-4 h-4 fill-current" />
                                            </button>
                                            <button className="border-2 border-neutral-500 text-white p-1.5 rounded-full hover:border-white hover:bg-white/10 transition-colors" title="Add to My List">
                                                <Plus className="w-4 h-4" />
                                            </button>
                                            <button className="border-2 border-neutral-500 text-white p-1.5 rounded-full hover:border-white hover:bg-white/10 transition-colors" title="Like">
                                                <ThumbsUp className="w-4 h-4" />
                                            </button>
                                        </div>

                                        <div className="flex items-center gap-2">
                                            <button className="bg-[#222] text-neutral-300 p-1.5 rounded-full hover:text-white hover:bg-[#333] border border-[#333]" title="Download">
                                                <Download className="w-3.5 h-3.5" />
                                            </button>
                                            <button className="bg-[#222] text-neutral-300 p-1.5 rounded-full hover:text-white hover:bg-[#333] border border-[#333]" title="9:16 Preview">
                                                <LayoutTemplate className="w-3.5 h-3.5" />
                                            </button>
                                            <button className="border-2 border-neutral-500 text-white p-1.5 rounded-full hover:border-white hover:bg-white/10 ml-1">
                                                <ChevronDown className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </div>

                                    {/* Metadata */}
                                    <div className="translate-y-4 group-hover/card:translate-y-0 transition-transform duration-300 delay-100">
                                        <div className="flex items-center gap-2 text-[10px] font-bold text-[#46d369] mb-1">
                                            <span>98% Match</span>
                                            <span className="text-neutral-400 border border-neutral-600 px-1 rounded text-[8px] uppercase">HD</span>
                                            <span className="text-neutral-400">{asset.duration}</span>
                                        </div>

                                        <h3 className="text-white font-bold text-sm leading-tight mb-1 line-clamp-1">{asset.title}</h3>

                                        <div className="flex items-center gap-2 text-[10px] text-neutral-300">
                                            <span>Sports</span>
                                            <span className="text-neutral-600">•</span>
                                            <span>Action</span>
                                            <span className="text-neutral-600">•</span>
                                            <span>Viral</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <button
                    onClick={() => scroll('right')}
                    className="absolute right-0 top-0 bottom-0 z-40 bg-black/50 hover:bg-black/80 text-white w-12 flex items-center justify-center transition-all duration-300 backdrop-blur-sm cursor-pointer opacity-0 group-hover:opacity-100"
                >
                    <ChevronRight className="w-8 h-8" />
                </button>
            </div>
        </div>
    );
}
