import { EfficiencyBarChart } from "@/components/analytics/EfficiencyBarChart";
import { UVPRadarChart } from "@/components/analytics/UVPRadarChart";

export default function AnalyticsPage() {
    return (
        <div className="space-y-6">
            <div className="mb-8">
                <h1 className="text-3xl font-extrabold text-white mb-2">
                    Business <span className="text-[#d0f200]">Analytics</span>
                </h1>
                <p className="text-neutral-400 text-sm">
                    Measuring the impact of automation on partner workflows and content distribution.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <EfficiencyBarChart />
                <UVPRadarChart />
            </div>

            <div className="grid grid-cols-1 gap-6">
                <div className="bg-[#111] backdrop-blur-sm p-6 rounded-xl border border-white/5 shadow-xl">
                    <h2 className="text-xl font-bold text-white mb-4">Strategic Roadmap</h2>
                    <div className="relative pl-8 border-l-2 border-[#333] space-y-8">
                        <div className="relative">
                            <div className="absolute -left-[9px] top-1.5 bg-[#d0f200] h-4 w-4 rounded-full border-2 border-black"></div>
                            <h4 className="text-lg font-bold text-white">Phase 1: The Secure Library (MVP)</h4>
                            <p className="text-sm text-neutral-400">Focus on secure access, search, and manual download.</p>
                        </div>
                        <div className="relative opacity-70">
                            <div className="absolute -left-[9px] top-1.5 bg-neutral-600 h-4 w-4 rounded-full border-2 border-black"></div>
                            <h4 className="text-lg font-bold text-white">Phase 2: The Push</h4>
                            <p className="text-sm text-neutral-400">Automated feeds and API access.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
