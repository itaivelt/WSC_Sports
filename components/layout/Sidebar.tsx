"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { LayoutDashboard, PlaySquare, BarChart3, Settings, Zap } from "lucide-react";

const navigation = [
    { name: "Dashboard", href: "/", icon: LayoutDashboard },
    { name: "Content Hub", href: "/hub", icon: PlaySquare },
    { name: "Analytics", href: "/analytics", icon: BarChart3 },
    { name: "Settings", href: "/settings", icon: Settings },
];

export function Sidebar({ className, onClose }: { className?: string; onClose?: () => void }) {
    const pathname = usePathname();

    return (
        <div className={cn("flex h-full w-64 flex-col bg-black border-r border-[#1a1a1a]", className)}>
            <div className="flex h-16 items-center px-4 border-b border-[#1a1a1a]">
                <div className="flex items-center gap-2 w-full p-2 rounded-md hover:bg-[#1a1a1a] cursor-pointer group transition-colors relative">
                    <div className="bg-[#d0f200] p-1 rounded-md">
                        <Zap className="h-4 w-4 text-black" />
                    </div>
                    <div className="flex-1 min-w-0">
                        <div className="text-sm font-bold text-white truncate">NBA Properties</div>
                        <div className="text-[10px] text-neutral-500 truncate group-hover:text-neutral-400">Switch Organization</div>
                    </div>
                    {/* V1: Tenant Switcher Tooltip/Indicator */}
                </div>
            </div>
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
            <div className="p-4 border-t border-[#1a1a1a]">
                <div className="flex items-center">
                    <div className="h-8 w-8 rounded-full bg-[#d0f200] flex items-center justify-center text-xs font-bold text-black">
                        JD
                    </div>
                    <div className="ml-3">
                        <p className="text-sm font-medium text-white">John Doe</p>
                        <p className="text-xs text-neutral-500">Admin Partner</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
