"use client";

import { useState } from "react";
import { BarChart3, PieChart, Activity, AlertTriangle, ShieldCheck, DollarSign, Search, Filter } from "lucide-react";
import { EfficiencyBarChart } from "@/components/analytics/EfficiencyBarChart";
import { UVPRadarChart } from "@/components/analytics/UVPRadarChart";
import { useUserRole } from "@/lib/user-role-context";

export default function AnalyticsPage() {
    const { userRole } = useUserRole();
    const [partnerFilter, setPartnerFilter] = useState("All Partners");

    const partners = ["All Partners", "ESPN", "Bleacher Report", "Sky Sports", "Canal+", "DAZN", "Fox Sports"];

    return (
        <div className="space-y-8 pb-10">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-extrabold text-white mb-2">
                        Analytics <span className="text-[#d0f200]">& ROI </span>Dashboard
                    </h1>
                    <p className="text-neutral-400 text-sm">
                        {userRole === 'WSC_ADMIN'
                            ? "Global performance metrics across all partners and content distribution channels."
                            : "Performance metrics for ESPN across rights holders (NBA, F1, UFC)."}
                    </p>
                </div>

                {userRole === 'WSC_ADMIN' && (
                    <div className="flex items-center gap-2">
                        <span className="text-sm text-neutral-400">View Partner:</span>
                        <div className="relative">
                            <select
                                value={partnerFilter}
                                onChange={(e) => setPartnerFilter(e.target.value)}
                                className="bg-[#111] border border-[#333] text-white text-sm rounded-lg px-4 py-2 pr-8 focus:outline-none focus:border-[#d0f200] appearance-none cursor-pointer"
                            >
                                {partners.map(p => (
                                    <option key={p} value={p}>{p}</option>
                                ))}
                            </select>
                            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none text-neutral-500">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-[#111] border border-[#333] p-6 rounded-xl">
                    <div className="flex justify-between items-start mb-4">
                        <div className="bg-[#d0f200]/10 p-2 rounded-lg">
                            <Activity className="w-5 h-5 text-[#d0f200]" />
                        </div>
                        <span className="text-xs font-bold text-green-400">+12% vs last month</span>
                    </div>
                    <div className="text-2xl font-bold text-white mb-1">
                        {userRole === 'WSC_ADMIN' ? (partnerFilter === "All Partners" ? '1.2M' : '245K') : '45.2K'}
                    </div>
                    <p className="text-xs text-neutral-500">Total Asset Downloads</p>
                </div>

                <div className="bg-[#111] border border-[#333] p-6 rounded-xl">
                    <div className="flex justify-between items-start mb-4">
                        <div className="bg-blue-500/10 p-2 rounded-lg">
                            <ShieldCheck className="w-5 h-5 text-blue-400" />
                        </div>
                        <span className="text-xs font-bold text-neutral-500">100% Compliance</span>
                    </div>
                    <div className="text-2xl font-bold text-white mb-1">
                        {userRole === 'WSC_ADMIN' ? (partnerFilter === "All Partners" ? '85' : '12') : '12'}
                    </div>
                    <p className="text-xs text-neutral-500">Active Users Logged In Today</p>
                </div>

                <div className="bg-[#111] border border-[#333] p-6 rounded-xl">
                    <div className="flex justify-between items-start mb-4">
                        <div className="bg-red-500/10 p-2 rounded-lg">
                            <AlertTriangle className="w-5 h-5 text-red-400" />
                        </div>
                        <span className="text-xs font-bold text-red-400">Action Required</span>
                    </div>
                    <div className="text-2xl font-bold text-white mb-1">
                        {userRole === 'WSC_ADMIN' ? (partnerFilter === "All Partners" ? '142' : '15') : '8'}
                    </div>
                    <p className="text-xs text-neutral-500">Failed Searches (Missed Opps)</p>
                </div>

                <div className="bg-[#111] border border-[#333] p-6 rounded-xl">
                    <div className="flex justify-between items-start mb-4">
                        <div className="bg-amber-500/10 p-2 rounded-lg">
                            <DollarSign className="w-5 h-5 text-amber-400" />
                        </div>
                        <span className="text-xs font-bold text-amber-400">Potential Revenue</span>
                    </div>
                    <div className="text-2xl font-bold text-white mb-1">
                        {userRole === 'WSC_ADMIN' ? (partnerFilter === "All Partners" ? '$45k' : '$5k') : '$2.4k'}
                    </div>
                    <p className="text-xs text-neutral-500">Upsell Opportunities Identified</p>
                </div>
            </div>

            {/* Main Content Areas */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                {/* Left Column: Charts & Overview */}
                <div className={`${userRole === 'WSC_ADMIN' ? 'lg:col-span-2' : 'lg:col-span-3'} space-y-8`}>
                    {/* WSC Admin: Partner Usage Comparison */}
                    {userRole === 'WSC_ADMIN' ? (
                        <div className="bg-[#111] border border-[#333] rounded-xl p-6">
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-lg font-bold text-white">
                                    {partnerFilter === "All Partners" ? "Partner Activity Overview" : `${partnerFilter} Activity`}
                                </h3>
                                <select className="bg-black border border-[#333] text-xs text-white rounded p-1">
                                    <option>Last 30 Days</option>
                                    <option>Last Quarter</option>
                                </select>
                            </div>
                            <div className="h-64 flex items-end gap-4">
                                {/* Simple CSS Bar Chart Mockup */}
                                {[
                                    { label: 'ESPN', val: 80 }, { label: 'Bleacher', val: 65 },
                                    { label: 'Sky', val: 95 }, { label: 'Canal+', val: 40 },
                                    { label: 'DAZN', val: 75 }, { label: 'Fox', val: 55 }
                                ].filter(item => partnerFilter === "All Partners" || item.label === partnerFilter || partnerFilter.includes(item.label)).map((item, i) => (
                                    <div key={i} className="flex-1 flex flex-col justify-end items-center group">
                                        <div
                                            className="w-full bg-[#333] group-hover:bg-[#d0f200] transition-colors rounded-t-sm relative"
                                            style={{ height: `${item.val}%` }}
                                        >
                                            <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-black text-white text-[10px] px-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                                {item.val}k Downloads
                                            </div>
                                        </div>
                                        <span className="text-[10px] text-neutral-500 mt-2 truncate max-w-full">{item.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ) : (
                        /* Partner View: Rights Usage breakdown */
                        <div className="bg-[#111] border border-[#333] rounded-xl p-6">
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-lg font-bold text-white">Rights Usage Analysis</h3>
                                <select className="bg-black border border-[#333] text-xs text-white rounded p-1">
                                    <option>By Volume</option>
                                    <option>By Value</option>
                                </select>
                            </div>
                            <div className="space-y-4">
                                {[
                                    { name: 'NBA', usage: 85, total: 100, color: 'bg-[#d0f200]' },
                                    { name: 'Premier League', usage: 45, total: 100, color: 'bg-blue-500' },
                                    { name: 'UFC', usage: 60, total: 100, color: 'bg-red-500' },
                                    { name: 'F1', usage: 30, total: 100, color: 'bg-amber-500' }
                                ].map((item) => (
                                    <div key={item.name}>
                                        <div className="flex justify-between text-xs mb-1">
                                            <span className="font-bold text-white">{item.name}</span>
                                            <span className="text-neutral-400">{item.usage}% Consumed</span>
                                        </div>
                                        <div className="h-2 bg-[#222] rounded-full overflow-hidden">
                                            <div className={`h-full ${item.color}`} style={{ width: `${item.usage}%` }}></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Audit Logs Table [V1] */}
                    <div className="bg-[#111] border border-[#333] rounded-xl overflow-hidden">
                        <div className="p-4 border-b border-[#333] flex justify-between items-center">
                            <h3 className="font-bold text-white flex items-center gap-2">
                                <ShieldCheck className="w-4 h-4 text-blue-400" />
                                Audit & Security Logs
                            </h3>
                            <button className="text-xs text-[#d0f200] hover:underline">Download CSV</button>
                        </div>
                        <table className="w-full text-left text-sm">
                            <thead className="bg-[#0a0a0a] text-neutral-500">
                                <tr>
                                    <th className="p-3 font-medium">Timestamp</th>
                                    <th className="p-3 font-medium">User</th>
                                    <th className="p-3 font-medium">Action</th>
                                    <th className="p-3 font-medium">Details</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-[#222]">
                                {[
                                    { time: '10:42 AM', user: 'j.smith@espn.com', action: 'Download', detail: 'NBA_Highlights_Pack_v2.mxf' },
                                    { time: '10:38 AM', user: 'm.doe@espn.com', action: 'Login', detail: 'Success (IP: 192.168.1.1)' },
                                    { time: '10:15 AM', user: 'r.jones@espn.com', action: 'Search', detail: 'Query: "LeBron James dunk"' },
                                    { time: '09:55 AM', user: 'admin@wsc-sports.com', action: 'Config Change', detail: 'Updated rule: Geo-fence EU' },
                                ].map((log, i) => (
                                    <tr key={i} className="hover:bg-[#1a1a1a] transition-colors">
                                        <td className="p-3 text-neutral-400 text-xs">{log.time}</td>
                                        <td className="p-3 text-white">{log.user}</td>
                                        <td className="p-3">
                                            <span className={`text-xs px-2 py-1 rounded ${log.action === 'Login' ? 'bg-green-500/10 text-green-400' :
                                                log.action === 'Download' ? 'bg-blue-500/10 text-blue-400' :
                                                    'bg-neutral-800 text-neutral-300'
                                                }`}>{log.action}</span>
                                        </td>
                                        <td className="p-3 text-neutral-400 text-xs font-mono">{log.detail}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Right Column: Insights & Upsells (WSC ADMIN ONLY) */}
                {userRole === 'WSC_ADMIN' && (
                    <div className="space-y-6">
                        {/* Missed Opportunities [V2] */}
                        <div className="bg-[#111] border border-[#333] rounded-xl p-6">
                            <div className="flex items-center gap-2 mb-4">
                                <AlertTriangle className="w-5 h-5 text-red-500" />
                                <h3 className="font-bold text-white">Missed Opportunities</h3>
                            </div>
                            <p className="text-xs text-neutral-400 mb-4">
                                Searches that returned 0 results. Use this to identify content gaps.
                            </p>
                            <div className="space-y-3">
                                {[
                                    { query: '"Wemby vs Chet"', count: 42, impact: 'High' },
                                    { query: '"Messi Inter Miami training"', count: 28, impact: 'Med' },
                                    { query: '"Kobe 81 point game full"', count: 15, impact: 'Low' },
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center justify-between bg-black p-3 rounded border border-[#222]">
                                        <div>
                                            <div className="text-sm font-bold text-white">{item.query}</div>
                                            <div className="text-[10px] text-neutral-500">{item.count} attempts</div>
                                        </div>
                                        <span className={`text-[10px] px-2 py-0.5 rounded font-bold ${item.impact === 'High' ? 'bg-red-500/10 text-red-500' : 'bg-amber-500/10 text-amber-500'
                                            }`}>{item.impact}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Upsell Marketplace [Future] */}
                        <div className="bg-gradient-to-b from-[#1a1a1a] to-[#111] border border-[#333] rounded-xl p-6 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-5">
                                <DollarSign className="w-24 h-24 text-white" />
                            </div>
                            <h3 className="font-bold text-white mb-4 relative z-10">Upsell Marketplace</h3>
                            <div className="space-y-4 relative z-10">
                                <div className="bg-black/50 p-3 rounded border border-[#333]">
                                    <div className="text-xs text-[#d0f200] font-bold uppercase mb-1">Recommendation</div>
                                    <p className="text-sm text-neutral-300 font-medium mb-2">
                                        Partner <span className="text-white">Bleacher Report</span> frequently searches for "Bundesliga" content but has no license.
                                    </p>
                                    <button className="w-full bg-[#d0f200] text-black text-xs font-bold py-2 rounded hover:bg-[#badd00] transition-colors">
                                        Send Purchase Offer
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Asset Performance ROI [V2] */}
                        <div className="bg-[#111] border border-[#333] rounded-xl p-6">
                            <h3 className="font-bold text-white mb-4">Top Performing Assets</h3>
                            <div className="space-y-4">
                                {[
                                    { title: 'LeBron Dunk Highlight', views: '2.4M', platform: 'Instagram' },
                                    { title: 'Mbappe Goal vs Nice', views: '1.1M', platform: 'TikTok' },
                                    { title: 'UFC 300 Promo', views: '850K', platform: 'YouTube' },
                                ].map((asset, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <div className="text-[#d0f200] font-bold text-lg">#{i + 1}</div>
                                        <div>
                                            <div className="text-sm font-medium text-white line-clamp-1">{asset.title}</div>
                                            <div className="text-xs text-neutral-500">{asset.views} Views • {asset.platform}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
