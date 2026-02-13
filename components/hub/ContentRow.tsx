"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight, Play, Check } from "lucide-react";
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
            const scrollAmount = direction === 'left' ? -current.offsetWidth + 200 : current.offsetWidth - 200;
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
                    className="absolute left-0 top-0 bottom-0 z-40 bg-black/50 hover:bg-black/80 text-white w-12 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-sm"
                >
                    <ChevronLeft className="w-8 h-8" />
                </button>

                <div
                    ref={rowRef}
                    className="flex gap-4 overflow-x-auto scrollbar-hide px-4 md:px-12 pb-8 pt-2 scroll-smooth"
                >
                    {assets.map((asset) => (
                        <div
                            key={asset.id}
                            className="flex-none w-[280px] md:w-[320px] aspect-video relative group/card cursor-pointer transition-transform duration-300 hover:scale-105 hover:z-20 origin-center"
                        >
                            <img
                                src={asset.thumbnail}
                                alt={asset.title}
                                className="w-full h-full object-cover rounded-md"
                            />

                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover/card:opacity-100 transition-opacity rounded-md flex flex-col justify-between p-4 border border-[#d0f200]/50">
                                <div className="flex justify-end">
                                    <div className="bg-[#d0f200] text-black text-xs font-bold px-1.5 py-0.5 rounded">
                                        {asset.duration}
                                    </div>
                                </div>

                                <div>
                                    <div className="flex gap-2 mb-3">
                                        <button className="bg-white hover:bg-[#d0f200] text-black p-1.5 rounded-full transition-colors">
                                            <Play className="w-3 h-3 fill-current" />
                                        </button>
                                        <button className="border border-white hover:border-[#d0f200] text-white hover:text-[#d0f200] p-1.5 rounded-full transition-colors">
                                            <Check className="w-3 h-3" />
                                        </button>
                                    </div>
                                    <h3 className="text-white font-bold text-sm leading-tight mb-1">{asset.title}</h3>
                                    <p className="text-neutral-400 text-xs">{asset.date}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <button
                    onClick={() => scroll('right')}
                    className="absolute right-0 top-0 bottom-0 z-40 bg-black/50 hover:bg-black/80 text-white w-12 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-sm"
                >
                    <ChevronRight className="w-8 h-8" />
                </button>
            </div>
        </div>
    );
}
