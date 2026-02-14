"use client";

import { Play, Info } from "lucide-react";
import { useRightsProvider } from "@/lib/rights-provider-context";

const HERO_CONTENT = {
    NBA: {
        image: "https://images.unsplash.com/photo-1546519638-68e109498ad0?auto=format&fit=crop&q=80&w=2000",
        label: "NBA Finals • 2026",
        title: <>Celtics <br /> vs Lakers</>,
        description: "Game 7 of the NBA Finals. History in the making as two legendary franchises collide.",
        match: "Celtics vs Lakers"
    },
    "Premier League": {
        image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&q=80&w=2000",
        label: "Premier League • 2026",
        title: <>Manchester City <br /> vs Liverpool</>,
        description: "Experience the intensity of the title race decider. Includes exclusive multi-angle replays.",
        match: "Man City vs Liverpool"
    },
    Bundesliga: {
        image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=2000",
        label: "Bundesliga • 2026",
        title: <>Bayern Munich <br /> vs Dortmund</>,
        description: "Der Klassiker! Watch the biggest match in German football with AI-enhanced highlights.",
        match: "Bayern vs Dortmund"
    },
    "La Liga": {
        image: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&q=80&w=2000",
        label: "La Liga • 2026",
        title: <>Real Madrid <br /> vs Barcelona</>,
        description: "El Clásico. The world is watching as the giants of Spain face off at the Bernabéu.",
        match: "Real Madrid vs Barcelona"
    },
    "Serie A": {
        image: "https://images.unsplash.com/photo-1522778119026-d647f0565c6a?auto=format&fit=crop&q=80&w=2000",
        label: "Serie A • 2026",
        title: <>Juventus <br /> vs AC Milan</>,
        description: "A clash of titans in Serie A. Watch the full match replay and key moments.",
        match: "Juventus vs Milan"
    },
    UFC: {
        image: "https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?auto=format&fit=crop&q=80&w=2000",
        label: "UFC 320 • 2026",
        title: <>Main Event <br /> Title Fight</>,
        description: "The lightweight championship is on the line. Witness every strike and takedown.",
        match: "Championship Bout"
    },
    F1: {
        image: "https://images.unsplash.com/photo-1533560906234-8c430e462dbe?auto=format&fit=crop&q=80&w=2000",
        label: "Monaco GP • 2026",
        title: <>Monaco <br /> Grand Prix</>,
        description: "Qualifying highlights and race replay from the most prestigious track in Formula 1.",
        match: "Monaco Grand Prix"
    }
};

export function ContentHero() {
    const { selectedProvider } = useRightsProvider();
    // @ts-ignore
    const content = HERO_CONTENT[selectedProvider] || HERO_CONTENT["NBA"];

    return (
        <div className="relative h-[65vh] w-full mb-8">
            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    src={content.image}
                    alt={content.match}
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
                    <span className="text-neutral-300 text-sm font-medium">{content.label}</span>
                </div>
                <h1 className="text-3xl md:text-6xl font-extrabold text-white mb-2 md:mb-4 leading-tight">
                    {content.title}
                </h1>
                <p className="text-neutral-300 text-sm md:text-lg mb-4 md:mb-8 line-clamp-2 hidden md:block">
                    {content.description}
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
