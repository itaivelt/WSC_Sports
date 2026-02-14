"use client";

import { Search, Filter, LayoutGrid, LayoutList, ChevronDown, Check, Bell } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { useRightsProvider, RightsProvider } from "@/lib/rights-provider-context";
import { useUserRole } from "@/lib/user-role-context";
import { cn } from "@/lib/utils";

// Duplicate of PROVIDERS from Sidebar (ideally should be a shared constant)
const PROVIDERS: { name: RightsProvider; logo: string }[] = [
    { name: "NBA", logo: "https://cdn.nba.com/logos/leagues/logo-nba.svg" },
    { name: "Premier League", logo: "https://upload.wikimedia.org/wikipedia/en/f/f2/Premier_League_Logo.svg" },
    { name: "Bundesliga", logo: "https://upload.wikimedia.org/wikipedia/en/d/df/Bundesliga_logo_%282017%29.svg" },
    { name: "La Liga", logo: "https://upload.wikimedia.org/wikipedia/commons/0/0f/LaLiga_logo_2023.svg" },
    { name: "Serie A", logo: "https://upload.wikimedia.org/wikipedia/commons/e/e9/Serie_A_logo_2019.svg" },
    { name: "UFC", logo: "https://upload.wikimedia.org/wikipedia/commons/9/92/UFC_Logo.svg" },
    { name: "F1", logo: "https://upload.wikimedia.org/wikipedia/commons/3/33/F1.svg" },
];

const PARTNERS = [
    { name: "FedEx", logo: "https://upload.wikimedia.org/wikipedia/commons/9/9d/FedEx_Express.svg" },
    { name: "ESPN", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/ESPN_wordmark.svg" },
    { name: "TNT Sports", logo: "https://cdn.brandfetch.io/tntsports.co.uk/w/400/h/400" },
    { name: "State Farm", logo: "https://cdn.brandfetch.io/statefarm.com/w/400/h/400" },
    { name: "Nike", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg" },
    { name: "American Express", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/American_Express_logo_%282018%29.svg" },
    { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
    { name: "Beats by Dre", logo: "https://upload.wikimedia.org/wikipedia/commons/1/17/Beats_Electronics_logo.svg" },
];

interface FilterBarProps {
    viewMode: 'grid' | 'feed';
    setViewMode: (mode: 'grid' | 'feed') => void;
}

export function FilterBar({ viewMode, setViewMode }: FilterBarProps) {
    const { selectedProvider, setSelectedProvider } = useRightsProvider();
    const { userRole } = useUserRole();
    const [selectedPartner, setSelectedPartner] = useState(PARTNERS[0].name);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const currentProvider = PROVIDERS.find(p => p.name === selectedProvider) || PROVIDERS[0];
    const currentPartner = PARTNERS.find(p => p.name === selectedPartner) || PARTNERS[0];

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsDropdownOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const isWscAdmin = userRole === 'WSC_ADMIN';
    const currentSelection = isWscAdmin ? currentPartner : currentProvider;
    const items = isWscAdmin ? PARTNERS : PROVIDERS;
    const label = isWscAdmin ? "Select Partner" : "Select Rights Holder";

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

            <div className="flex items-center gap-4 w-full md:w-auto">
                {/* Search Bar */}
                <div className="relative flex-1 md:w-80">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Search className="h-4 w-4 text-neutral-500" />
                    </div>
                    <input
                        type="text"
                        className="bg-black border border-white/10 text-neutral-300 text-sm rounded-md focus:ring-[#d0f200] focus:border-[#d0f200] block w-full pl-10 pr-10 p-2.5"
                        placeholder='Search by action (e.g. "Sad Fan", "Buzzer Beater")...'
                    />
                    <div className="absolute inset-y-0 right-0 pr-2 flex items-center">
                        <button className="text-neutral-500 hover:text-[#d0f200] transition-colors p-1" title="Subscribe to Search [V1]">
                            <Bell className="h-4 w-4" />
                        </button>
                    </div>
                </div>

                {/* Rights Holder / Partner Switcher (Dropdown) */}
                <div className="relative" ref={dropdownRef}>
                    <button
                        className="flex items-center gap-2 bg-black border border-white/10 hover:border-[#d0f200] text-white p-2 rounded-md transition-colors min-w-[200px]"
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    >
                        <div className="bg-white p-0.5 rounded-sm h-5 w-5 flex items-center justify-center overflow-hidden">
                            <img src={currentSelection.logo} alt={currentSelection.name} className="w-full h-full object-contain" />
                        </div>
                        <span className="text-sm font-medium flex-1 text-left truncate">{currentSelection.name}</span>
                        <ChevronDown className={cn("h-4 w-4 text-neutral-500 transition-transform", isDropdownOpen && "rotate-180")} />
                    </button>

                    {isDropdownOpen && (
                        <div className="absolute top-full right-0 mt-2 w-64 bg-[#111] border border-[#333] rounded-md shadow-xl z-50 py-1 max-h-96 overflow-y-auto">
                            <div className="px-3 py-2 text-xs font-bold text-neutral-500 uppercase tracking-wider">{label}</div>
                            {items.map((item) => (
                                <button
                                    key={item.name}
                                    className="flex items-center gap-3 w-full text-left px-3 py-2 hover:bg-[#222] transition-colors"
                                    onClick={() => {
                                        if (isWscAdmin) {
                                            setSelectedPartner(item.name);
                                        } else {
                                            setSelectedProvider(item.name as RightsProvider);
                                        }
                                        setIsDropdownOpen(false);
                                    }}
                                >
                                    <div className="bg-white p-0.5 rounded-sm h-6 w-6 flex items-center justify-center">
                                        <img src={item.logo} alt={item.name} className="w-full h-full object-contain" />
                                    </div>
                                    <span className={cn("text-sm flex-1", (isWscAdmin ? selectedPartner : selectedProvider) === item.name ? "text-[#d0f200] font-bold" : "text-neutral-300")}>
                                        {item.name}
                                    </span>
                                    {(isWscAdmin ? selectedPartner : selectedProvider) === item.name && <Check className="h-3 w-3 text-[#d0f200]" />}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
