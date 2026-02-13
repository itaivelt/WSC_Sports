import { TrendingUp, Shirt, Cast } from "lucide-react";

export function KPICards() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* KPI 1 */}
            <div className="bg-[#111] backdrop-blur-sm p-6 rounded-xl border border-white/5 shadow-xl relative overflow-hidden group hover:border-[#d0f200]/50 transition-all">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <TrendingUp className="w-24 h-24 text-[#d0f200]" />
                </div>
                <h3 className="text-neutral-400 font-bold uppercase tracking-wider text-xs mb-2">Global Sponsorship Market</h3>
                <div className="text-4xl font-extrabold text-white mb-2">$97.4B</div>
                <div className="flex items-center text-sm font-semibold">
                    <span className="text-[#d0f200] bg-[#d0f200]/10 px-2 py-0.5 rounded mr-2">▲ 8.2%</span>
                    <span className="text-neutral-500">YoY Growth</span>
                </div>
            </div>

            {/* KPI 2 */}
            <div className="bg-[#111] backdrop-blur-sm p-6 rounded-xl border border-white/5 shadow-xl relative overflow-hidden group hover:border-[#d0f200]/50 transition-all">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Shirt className="w-24 h-24 text-[#d0f200]" />
                </div>
                <h3 className="text-neutral-400 font-bold uppercase tracking-wider text-xs mb-2">Jersey Patch Value</h3>
                <div className="text-4xl font-extrabold text-white mb-2">$1.2B+</div>
                <div className="flex items-center text-sm font-semibold">
                    <span className="text-white bg-white/10 px-2 py-0.5 rounded mr-2">Top 5 Leagues</span>
                </div>
            </div>

            {/* KPI 3 */}
            <div className="bg-[#111] backdrop-blur-sm p-6 rounded-xl border border-white/5 shadow-xl relative overflow-hidden group hover:border-[#d0f200]/50 transition-all">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Cast className="w-24 h-24 text-[#d0f200]" />
                </div>
                <h3 className="text-neutral-400 font-bold uppercase tracking-wider text-xs mb-2">Streaming Rights Share</h3>
                <div className="text-4xl font-extrabold text-white mb-2">35%</div>
                <div className="flex items-center text-sm font-semibold">
                    <span className="text-[#d0f200] bg-[#d0f200]/10 px-2 py-0.5 rounded mr-2">Accelerating</span>
                    <span className="text-neutral-500">vs Linear TV</span>
                </div>
            </div>
        </div>
    );
}
