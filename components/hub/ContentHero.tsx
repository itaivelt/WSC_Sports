"use client";

import { Play, Info } from "lucide-react";

export function ContentHero() {
    return (
        <div className="relative h-[65vh] w-full mb-8">
            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    src="https://images.unsplash.com/photo-1540747913346-19e32dc3e96e?auto=format&fit=crop&q=80&w=2000"
                    alt="Featured Content"
                    className="w-full h-full object-cover mask-image-b"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />
            </div>

            {/* Content */}
            <div className="absolute bottom-0 left-0 p-4 md:p-16 max-w-2xl w-full">
                <div className="flex items-center gap-2 mb-2 md:mb-4">
                    <span className="bg-[#d0f200] text-black text-xs font-bold px-2 py-0.5 rounded uppercase">Featured</span>
                    <span className="text-neutral-300 text-sm font-medium">Premier League • 2024</span>
                </div>
                <h1 className="text-3xl md:text-6xl font-extrabold text-white mb-2 md:mb-4 leading-tight">
                    Manchester City <br /> vs Liverpool
                </h1>
                <p className="text-neutral-300 text-sm md:text-lg mb-4 md:mb-8 line-clamp-2 hidden md:block">
                    Experience the intensity of the title race decider.
                    Includes exclusive multi-angle replays and AI-generated player tracking analysis.
                </p>
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 md:gap-4">
                    <button className="bg-[#d0f200] hover:bg-[#badd00] text-black px-4 md:px-8 py-2 md:py-3 rounded-md font-bold text-sm md:text-lg flex items-center justify-center transition-all hover:scale-105">
                        <Play className="w-4 h-4 md:w-5 md:h-5 mr-2 fill-current" />
                        Play Now
                    </button>
                    <button className="bg-neutral-800/80 hover:bg-neutral-700 text-white px-4 md:px-8 py-2 md:py-3 rounded-md font-bold text-sm md:text-lg flex items-center justify-center backdrop-blur-sm transition-all hover:scale-105">
                        <Info className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                        More Info
                    </button>
                </div>
            </div>
        </div>
    );
}
