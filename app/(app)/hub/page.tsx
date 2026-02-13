"use client";

import { useState } from "react";
import { FilterBar } from "@/components/hub/FilterBar";
import { ContentGrid } from "@/components/hub/ContentGrid";
import { ContentFeed } from "@/components/hub/ContentFeed";

export default function HubPage() {
    const [viewMode, setViewMode] = useState<'grid' | 'feed'>('feed');

    return (
        <div className="flex flex-col h-full">
            <div className="p-6 pb-2">
                <h1 className="text-3xl font-extrabold text-white mb-2">
                    Content <span className="text-[#d0f200]">Hub</span>
                </h1>
                <p className="text-neutral-400 text-sm">
                    Browse and download AI-curated highlights from your licensed properties.
                </p>
            </div>

            <FilterBar viewMode={viewMode} setViewMode={setViewMode} />

            {viewMode === 'grid' ? <ContentGrid /> : <ContentFeed />}
        </div>
    );
}
