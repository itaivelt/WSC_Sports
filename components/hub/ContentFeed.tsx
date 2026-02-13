"use client";

import { ContentHero } from "./ContentHero";
import { ContentRow } from "./ContentRow";

// Expanded Mock Data
const TRENDING_ASSETS = [
    { id: 1, title: "Lionel Messi - Goal vs Real Madrid", duration: "0:45", date: "2h ago", thumbnail: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&q=80&w=600" },
    { id: 2, title: "LeBron James - Dunk Highlight", duration: "0:32", date: "4h ago", thumbnail: "https://images.unsplash.com/photo-1546519638-68e109498ad0?auto=format&fit=crop&q=80&w=600" },
    { id: 3, title: "Touchdown - Super Bowl LVIII", duration: "1:12", date: "1d ago", thumbnail: "https://images.unsplash.com/photo-1566577739112-5180d4bf9390?auto=format&fit=crop&q=80&w=600" },
    { id: 4, title: "Steph Curry - 3 Pointer", duration: "0:28", date: "2d ago", thumbnail: "https://images.unsplash.com/photo-1519861531473-92002639313cc?auto=format&fit=crop&q=80&w=600" },
    { id: 5, title: "F1 - Monaco GP Highlights", duration: "5:30", date: "1w ago", thumbnail: "https://images.unsplash.com/photo-1533560906234-8c430e462dbe?auto=format&fit=crop&q=80&w=600" },
];

const NEW_RELEASES = [
    { id: 6, title: "Haaland - Hat Trick vs United", duration: "2:05", date: "3d ago", thumbnail: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&q=80&w=600" },
    { id: 7, title: "UFC 300 - Main Event", duration: "15:00", date: "5h ago", thumbnail: "https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?auto=format&fit=crop&q=80&w=600" },
    { id: 8, title: "Wimbledon Final Shot", duration: "0:45", date: "1d ago", thumbnail: "https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?auto=format&fit=crop&q=80&w=600" },
    { id: 9, title: "Golf - Masters Winning Putt", duration: "1:20", date: "2d ago", thumbnail: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?auto=format&fit=crop&q=80&w=600" },
    { id: 10, title: "NBA - Classics Rewind", duration: "10:00", date: "3d ago", thumbnail: "https://images.unsplash.com/photo-1504450758481-7338eba7524a?auto=format&fit=crop&q=80&w=600" },
];

const FOR_YOU = [
    { id: 11, title: "Top 10 Goals of the Month", duration: "4:30", date: "1w ago", thumbnail: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?auto=format&fit=crop&q=80&w=600" },
    { id: 12, title: "Player Profile: Mbappe", duration: "3:15", date: "2w ago", thumbnail: "https://images.unsplash.com/photo-1517927033932-b3d18e61fb3a?auto=format&fit=crop&q=80&w=600" },
    { id: 13, title: "Tactical Analysis - City", duration: "8:00", date: "3d ago", thumbnail: "https://images.unsplash.com/photo-1560272564-c83b66b1ad12?auto=format&fit=crop&q=80&w=600" },
    { id: 14, title: "Behind the Scenes - Arsenal", duration: "12:00", date: "5d ago", thumbnail: "https://images.unsplash.com/photo-1522778119026-d647f0565c6a?auto=format&fit=crop&q=80&w=600" },
    { id: 15, title: "Skill School - Dribbling", duration: "5:00", date: "1d ago", thumbnail: "https://images.unsplash.com/photo-1552667466-07770ae110d0?auto=format&fit=crop&q=80&w=600" },
];

export function ContentFeed() {
    return (
        <div className="pb-20">
            <ContentHero />
            <div className="-mt-32 relative z-10 space-y-8 pl-4">
                <ContentRow title="Trending Now" assets={TRENDING_ASSETS} />
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
                    assets={NEW_RELEASES}
                />
                <ContentRow title="Picked For You" assets={FOR_YOU} />
            </div>
        </div>
    );
}
