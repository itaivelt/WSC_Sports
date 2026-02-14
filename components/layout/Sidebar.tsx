import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { PlaySquare, BarChart3, Settings, Zap, ChevronDown, Check, Users, Globe, Building, Library, FileCog, Brain } from "lucide-react";
import { useRightsProvider, RightsProvider } from "@/lib/rights-provider-context";
import { useUserRole, UserRole } from "@/lib/user-role-context";

const PROVIDERS: { name: RightsProvider; logo: string }[] = [
    { name: "NBA", logo: "https://cdn.nba.com/logos/leagues/logo-nba.svg" },
    { name: "Premier League", logo: "https://upload.wikimedia.org/wikipedia/en/f/f2/Premier_League_Logo.svg" },
    { name: "Bundesliga", logo: "https://upload.wikimedia.org/wikipedia/en/d/df/Bundesliga_logo_%282017%29.svg" },
    { name: "La Liga", logo: "https://upload.wikimedia.org/wikipedia/commons/0/0f/LaLiga_logo_2023.svg" },
    { name: "Serie A", logo: "https://upload.wikimedia.org/wikipedia/commons/e/e9/Serie_A_logo_2019.svg" },
    { name: "UFC", logo: "https://upload.wikimedia.org/wikipedia/commons/9/92/UFC_Logo.svg" },
    { name: "F1", logo: "https://upload.wikimedia.org/wikipedia/commons/3/33/F1.svg" },
];

export function Sidebar({ className, onClose }: { className?: string; onClose?: () => void }) {
    const router = useRouter();
    const pathname = usePathname();
    const { selectedProvider, setSelectedProvider } = useRightsProvider();
    const { userRole, setUserRole } = useUserRole();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Track last visited page for each role
    const [lastVisited, setLastVisited] = useState<{ [key in UserRole]: string }>({
        'WSC_ADMIN': '/hub',
        'PARTNER_ADMIN': '/hub'
    });

    // Update last visited page when path changes
    useEffect(() => {
        setLastVisited(prev => ({
            ...prev,
            [userRole]: pathname
        }));
    }, [pathname, userRole]);

    const handleRoleSwitch = (newRole: UserRole) => {
        if (newRole === userRole) return;

        // Navigate to last visited page for the new role, or default to /hub
        const targetPath = lastVisited[newRole] || '/hub';
        setUserRole(newRole);
        router.push(targetPath);
    };

    // Close dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsDropdownOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const currentProvider = PROVIDERS.find(p => p.name === selectedProvider) || PROVIDERS[0];

    // Dynamic Navigation based on Role
    const navigation = userRole === 'WSC_ADMIN'
        ? [
            { name: "Partners", href: "/admin/partners", icon: Globe },
            { name: "Rights Manager", href: "/admin/rights", icon: Brain },
            { name: "Partner Hub", href: "/hub", icon: PlaySquare },
            { name: "Library", href: "/library", icon: Library },
            { name: "Content Rules", href: "/rules", icon: FileCog },
            { name: "Analytics", href: "/analytics", icon: BarChart3 },
            { name: "Settings", href: "/settings", icon: Settings },
        ]
        : [
            { name: "Content Hub", href: "/hub", icon: PlaySquare },
            { name: "Analytics", href: "/analytics", icon: BarChart3 },
            { name: "Manage Users", href: "/manage", icon: Users },
            { name: "Settings", href: "/settings", icon: Settings },
        ];

    return (
        <div className={cn("flex h-full w-64 flex-col bg-black border-r border-[#1a1a1a]", className)}>
            {/* Header / Tenant Switcher */}
            <div className="flex h-16 items-center px-4 border-b border-[#1a1a1a]">
                {userRole === 'PARTNER_ADMIN' ? (
                    /* PARTNER ADMIN: Static Header (ESPN) */
                    <div className="flex items-center gap-2 w-full p-2 rounded-md">
                        <div className="bg-white p-1 rounded-md h-8 w-8 flex items-center justify-center overflow-hidden">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/ESPN_wordmark.svg" alt="ESPN" className="w-full h-full object-contain" />
                        </div>
                        <div className="flex-1 min-w-0">
                            <div className="text-sm font-bold text-white truncate">ESPN</div>
                            <div className="text-[10px] text-neutral-500 truncate">Partner Account</div>
                        </div>
                    </div>
                ) : (
                    /* WSC ADMIN: Static Header (Always shows NBA as per requirement) */
                    <div className="flex items-center gap-2 w-full p-2 rounded-md">
                        <div className="bg-white p-1 rounded-md h-8 w-8 flex items-center justify-center overflow-hidden">
                            <img src={PROVIDERS[0].logo} alt="NBA" className="w-full h-full object-contain" />
                        </div>
                        <div className="flex-1 min-w-0">
                            <div className="text-sm font-bold text-white truncate">NBA</div>
                            <div className="text-[10px] text-neutral-500 truncate">Customer View</div>
                        </div>
                    </div>
                )}
            </div>

            {/* Navigation */}
            <nav className="flex-1 space-y-1 px-3 py-4">
                {navigation.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link
                            key={item.name}
                            href={item.href}
                            onClick={onClose}
                            className={cn(
                                "group flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors",
                                isActive
                                    ? "bg-[#d0f200] text-black"
                                    : "text-neutral-400 hover:bg-[#1a1a1a] hover:text-white"
                            )}
                        >
                            <item.icon
                                className={cn(
                                    "mr-3 h-5 w-5 flex-shrink-0 transition-colors",
                                    isActive ? "text-black" : "text-neutral-500 group-hover:text-white"
                                )}
                            />
                            {item.name}
                        </Link>
                    );
                })}
            </nav>

            {/* User Profile & Role Switcher */}
            <div className="p-4 border-t border-[#1a1a1a] space-y-4">
                <div className="flex items-center">
                    <div className="h-8 w-8 rounded-full bg-[#d0f200] flex items-center justify-center text-xs font-bold text-black">
                        {userRole === 'WSC_ADMIN' ? 'WA' : 'PA'}
                    </div>
                    <div className="ml-3">
                        <p className="text-sm font-medium text-white">{userRole === 'WSC_ADMIN' ? "System Admin" : "Partner Admin"}</p>
                        <p className="text-xs text-neutral-500">{userRole === 'WSC_ADMIN' ? "WSC Sports" : selectedProvider}</p>
                    </div>
                </div>

                {/* Role Switcher Demo Control */}
                <div className="bg-[#111] p-2 rounded border border-[#333]">
                    <p className="text-[10px] text-neutral-500 mb-2 uppercase font-bold">Demo: Active Persona</p>
                    <div className="flex rounded bg-black p-0.5 border border-[#333]">
                        <button
                            onClick={() => handleRoleSwitch('WSC_ADMIN')}
                            className={cn("flex-1 text-[10px] py-1 rounded text-center transition-colors", userRole === 'WSC_ADMIN' ? "bg-[#d0f200] text-black font-bold" : "text-neutral-400 hover:text-white")}
                        >
                            WSC Admin
                        </button>
                        <button
                            onClick={() => handleRoleSwitch('PARTNER_ADMIN')}
                            className={cn("flex-1 text-[10px] py-1 rounded text-center transition-colors", userRole === 'PARTNER_ADMIN' ? "bg-[#d0f200] text-black font-bold" : "text-neutral-400 hover:text-white")}
                        >
                            Partner
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
