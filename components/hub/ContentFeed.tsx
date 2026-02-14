"use client";

import { ContentHero } from "./ContentHero";
import { ContentRow } from "./ContentRow";

import { useRightsProvider } from "@/lib/rights-provider-context";

export function ContentFeed() {
    const { selectedProvider } = useRightsProvider();

    const getProviderContent = (provider: string) => {
        const key = provider === "Premier League" ? "soccer,premierleague" :
            provider === "Bundesliga" ? "soccer,bundesliga" :
                provider === "La Liga" ? "soccer,laliga" :
                    provider === "Serie A" ? "soccer,seriea" :
                        provider === "UFC" ? "mma,ufc" :
                            provider === "F1" ? "f1,racing" :
                                "basketball,nba";

        const sport = provider === "UFC" ? "Fight" : provider === "F1" ? "Race" : "Match";

        // Generate dynamic mock data based on provider
        const trending = [
            { id: 1, title: `${provider} - Highlight of the Week`, duration: "0:45", date: "Feb 14, 2026", thumbnail: `https://loremflickr.com/600/337/${key}?random=1` },
            { id: 2, title: "Unbelievable Moment Catch", duration: "0:32", date: "Feb 14, 2026", thumbnail: `https://loremflickr.com/600/337/${key}?random=2` },
            { id: 3, title: "Championship Decider", duration: "1:12", date: "Feb 13, 2026", thumbnail: `https://loremflickr.com/600/337/${key}?random=3` },
            { id: 4, title: "Top 5 Plays", duration: "0:28", date: "Feb 13, 2026", thumbnail: `https://loremflickr.com/600/337/${key}?random=4` },
            { id: 5, title: "Exclusive Interview", duration: "5:30", date: "Feb 12, 2026", thumbnail: `https://loremflickr.com/600/337/${key}?random=5` },
        ];

        const newReleases = [
            { id: 6, title: "Live Locker Room Cam", duration: "2:05", date: "3d ago", thumbnail: `https://loremflickr.com/600/337/${key}?random=6` },
            { id: 7, title: "Post-${sport} Analysis", duration: "15:00", date: "5h ago", thumbnail: `https://loremflickr.com/600/337/${key}?random=7` },
            { id: 8, title: "Fan Reactions Compilation", duration: "0:45", date: "1d ago", thumbnail: `https://loremflickr.com/600/337/${key}?random=8` },
            { id: 9, title: "Coach Press Conference", duration: "1:20", date: "2d ago", thumbnail: `https://loremflickr.com/600/337/${key}?random=9` },
            { id: 10, title: "Classic Rewind: 2020", duration: "10:00", date: "3d ago", thumbnail: `https://loremflickr.com/600/337/${key}?random=10` },
        ];

        const forYou = [
            { id: 11, title: "Your Team: Season Recap", duration: "4:30", date: "1w ago", thumbnail: `https://loremflickr.com/600/337/${key}?random=11` },
            { id: 12, title: "Player Profile: Rising Star", duration: "3:15", date: "2w ago", thumbnail: `https://loremflickr.com/600/337/${key}?random=12` },
            { id: 13, title: "Tactical Breakdown", duration: "8:00", date: "3d ago", thumbnail: `https://loremflickr.com/600/337/${key}?random=13` },
            { id: 14, title: "Behind the Scenes", duration: "12:00", date: "5d ago", thumbnail: `https://loremflickr.com/600/337/${key}?random=14` },
            { id: 15, title: "Skill School", duration: "5:00", date: "1d ago", thumbnail: `https://loremflickr.com/600/337/${key}?random=15` },
        ];

        return { trending, newReleases, forYou };
    };

    const { trending, newReleases, forYou } = getProviderContent(selectedProvider);

    return (
        <div className="pb-20">
            <ContentHero />
            <div className="-mt-12 relative z-10 space-y-8 pl-4">
                <ContentRow title="Trending Now" assets={trending} />
                <ContentRow
                    title={
                        <div className="flex items-center gap-3">
                            <span>New Arrivals</span>
                            <div className="flex items-center gap-1.5 bg-red-600/90 text-white text-[10px] font-bold px-2 py-0.5 rounded animate-pulse shadow-[0_0_10px_rgba(220,38,38,0.5)]">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                                </span>
                                LIVE LOCKER
                            </div>
                        </div>
                    }
                    assets={newReleases}
                />
                <ContentRow title="Picked For You" assets={forYou} />
            </div>
        </div>
    );
}
