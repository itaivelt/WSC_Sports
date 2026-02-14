"use client";

import { Search, Filter, LayoutGrid, LayoutList } from "lucide-react";

interface FilterBarProps {
    viewMode: 'grid' | 'feed';
    setViewMode: (mode: 'grid' | 'feed') => void;
}

export function FilterBar({ viewMode, setViewMode }: FilterBarProps) {
    return (
        <div className="bg-[#111] backdrop-blur-sm border-b border-white/5 p-4 sticky top-0 z-40 flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto scrollbar-hide">
                <select className="bg-black border border-white/10 text-neutral-300 text-sm rounded-md focus:ring-[#d0f200] focus:border-[#d0f200] block p-2.5">
                    <option>All Sports</option>
                    <option>Soccer</option>
                    <option>Basketball</option>
                    <option>American Football</option>
                </select>
                <select className="bg-black border border-white/10 text-neutral-300 text-sm rounded-md focus:ring-[#d0f200] focus:border-[#d0f200] block p-2.5">
                    <option>All Seasons</option>
                    <option>2023-24</option>
                    <option>2022-23</option>
                </select>
                <div className="h-6 w-px bg-white/10 mx-1"></div>
                <div className="flex bg-black border border-white/10 rounded-md p-1">
                    <button
                        onClick={() => setViewMode('feed')}
                        className={`p-1.5 rounded ${viewMode === 'feed' ? 'bg-[#d0f200] text-black' : 'text-neutral-400 hover:text-white'}`}
                        title="Feed View"
                    >
                        <LayoutList className="w-4 h-4" />
                    </button>
                    <button
                        onClick={() => setViewMode('grid')}
                        className={`p-1.5 rounded ${viewMode === 'grid' ? 'bg-[#d0f200] text-black' : 'text-neutral-400 hover:text-white'}`}
                        title="Grid View"
                    >
                        <LayoutGrid className="w-4 h-4" />
                    </button>
                </div>
            </div>

            <div className="relative w-full md:w-64">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-4 w-4 text-neutral-500" />
                </div>
                <input
                    type="text"
                    className="bg-black border border-white/10 text-neutral-300 text-sm rounded-md focus:ring-[#d0f200] focus:border-[#d0f200] block w-full pl-10 p-2.5"
                    placeholder="Search assets..."
                />
            </div>
        </div>
    );
}
