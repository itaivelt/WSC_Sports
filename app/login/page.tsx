"use client";

import { useState } from "react";
import { Zap, ShieldCheck, Globe, Lock } from "lucide-react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

export default function LoginPage() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [selectedTenant, setSelectedTenant] = useState("nba");

    const handleLogin = () => {
        setIsLoading(true);
        // Simulate API call
        setTimeout(() => {
            router.push("/");
        }, 1500);
    };

    return (
        <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#1a1a1a] via-black to-black" />
            <div className="absolute top-0 left-0 w-full h-[500px] bg-[#d0f200]/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="w-full max-w-md relative z-10">
                {/* Logo */}
                <div className="flex justify-center mb-8">
                    <div className="flex items-center gap-3">
                        <div className="bg-[#d0f200] p-2 rounded-lg">
                            <Zap className="h-8 w-8 text-black" />
                        </div>
                        <span className="text-3xl font-extrabold text-white tracking-tight">
                            WSC Sports
                        </span>
                    </div>
                </div>

                {/* Login Card */}
                <div className="bg-[#111] border border-white/10 rounded-2xl p-8 shadow-2xl backdrop-blur-xl">
                    <div className="text-center mb-8">
                        <h1 className="text-2xl font-bold text-white mb-2">Partner Hub</h1>
                        <p className="text-neutral-400 text-sm">
                            Secure access for rights holders and broadcasters.
                        </p>
                    </div>

                    {/* Tenant Switcher REMOVED - Moved to inside app */}

                    {/* SSO Button */}
                    <button
                        onClick={handleLogin}
                        disabled={isLoading}
                        className="w-full bg-[#d0f200] hover:bg-[#badd00] text-black font-bold py-3.5 px-4 rounded-lg flex items-center justify-center gap-2 transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed group"
                    >
                        {isLoading ? (
                            <div className="h-5 w-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                        ) : (
                            <>
                                <ShieldCheck className="w-5 h-5" />
                                <span>Sign in with SSO</span>
                            </>
                        )}
                    </button>

                    <div className="mt-6 flex justify-center">
                        <p className="text-xs text-neutral-500 flex items-center gap-1">
                            <Lock className="w-3 h-3" />
                            <span>Enterprise Grade Security • 2FA Enabled</span>
                        </p>
                    </div>
                </div>

                {/* Footer Links (Visual Only) */}
                <div className="mt-8 flex justify-center gap-6 text-sm text-neutral-500">
                    <a href="#" className="hover:text-white transition-colors">Support</a>
                    <a href="#" className="hover:text-white transition-colors">Privacy</a>
                    <a href="#" className="hover:text-white transition-colors">Terms</a>
                </div>
            </div>
        </div>
    );
}
