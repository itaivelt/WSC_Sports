import { KPICards } from "@/components/dashboard/KPICards";
import { MarketGrowthChart } from "@/components/dashboard/MarketGrowthChart";
import { IndustrySpendChart } from "@/components/dashboard/IndustrySpendChart";
import { StreamingShareChart } from "@/components/dashboard/StreamingShareChart";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold text-white mb-2">
          Partner <span className="text-[#d0f200]">Insights</span>
        </h1>
        <p className="text-neutral-400">
          Real-time analysis of the sports entertainment ecosystem and value generated.
        </p>
      </div>

      {/* KPI Cards */}
      <KPICards />

      {/* Charts Section 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <MarketGrowthChart />
        </div>
        <div className="lg:col-span-1">
          <StreamingShareChart />
        </div>
      </div>

      {/* Charts Section 2 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <IndustrySpendChart />
        {/* Placeholder for now or another widget */}
        <div className="bg-[#111] backdrop-blur-sm p-6 rounded-xl border border-white/5 shadow-xl flex flex-col justify-center items-center text-center">
          <div className="text-neutral-500 mb-4">Live Content Feed</div>
          <p className="text-xs text-neutral-600">Real-time ingestion monitor</p>
        </div>
      </div>
    </div>
  );
}
