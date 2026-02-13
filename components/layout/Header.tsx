"use client";

import { Search, Bell, Menu } from "lucide-react";

export function Header({ onMenuClick }: { onMenuClick?: () => void }) {
    return (
        <header className="h-16 border-b border-[#1a1a1a] bg-black/80 backdrop-blur-md flex items-center justify-between px-6 sticky top-0 z-50">
            <div className="flex items-center flex-1 gap-4">
                <button
                    onClick={onMenuClick}
                    className="p-2 -ml-2 rounded-md text-neutral-400 hover:text-white hover:bg-[#1a1a1a] lg:hidden"
                >
                    <Menu className="h-6 w-6" />
                </button>
                <div className="relative w-full max-w-md">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Search className="h-4 w-4 text-neutral-500" />
                    </div>
                    <input
                        type="text"
                        className="block w-full pl-10 pr-3 py-1.5 border border-[#333] rounded-md leading-5 bg-[#111] text-white placeholder-neutral-500 focus:outline-none focus:bg-black focus:ring-1 focus:ring-[#d0f200] focus:border-[#d0f200] sm:text-sm transition-colors"
                        placeholder="Search..."
                    />
                </div>
            </div>
            <div className="flex items-center space-x-4">
                <button className="p-2 rounded-full text-neutral-400 hover:text-white hover:bg-[#1a1a1a] transition-colors relative">
                    <Bell className="h-5 w-5" />
                    <span className="absolute top-1.5 right-1.5 block h-2 w-2 rounded-full bg-[#d0f200] ring-2 ring-black"></span>
                </button>
            </div>
        </header>
    );
}
