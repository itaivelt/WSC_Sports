"use client";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            display: false,
        },
        tooltip: {
            backgroundColor: "#000",
            titleColor: "#fff",
            bodyColor: "#a3a3a3",
            borderColor: "#333",
            borderWidth: 1,
            padding: 10,
            displayColors: false,
        },
    },
    scales: {
        y: {
            grid: {
                color: "rgba(255, 255, 255, 0.1)",
            },
            ticks: {
                color: "#a3a3a3",
                callback: (value: any) => `$${value}B`,
            },
            border: {
                display: false,
            },
        },
        x: {
            grid: {
                display: false,
            },
            ticks: {
                color: "#a3a3a3",
            },
            border: {
                display: false,
            },
        },
    },
    interaction: {
        mode: "index" as const,
        intersect: false,
    },
};

const labels = ['2020', '2021', '2022', '2023', '2024', '2025', '2026', '2028', '2030'];

const data = {
    labels,
    datasets: [
        {
            fill: true,
            label: "Global Market Value",
            data: [57, 63, 71, 80, 97.4, 108, 120, 150, 190],
            borderColor: "#d0f200",
            backgroundColor: (context: any) => {
                const ctx = context.chart.ctx;
                const gradient = ctx.createLinearGradient(0, 0, 0, 400);
                gradient.addColorStop(0, "rgba(208, 242, 0, 0.5)");
                gradient.addColorStop(1, "rgba(208, 242, 0, 0.0)");
                return gradient;
            },
            tension: 0.4,
            pointBackgroundColor: "#d0f200",
            pointBorderColor: "#000",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "#d0f200",
            pointRadius: 4,
            pointHoverRadius: 6,
        },
    ],
};

export function MarketGrowthChart() {
    return (
        <div className="bg-[#111] backdrop-blur-sm p-6 rounded-xl border border-white/5 shadow-xl">
            <div className="mb-6">
                <h2 className="text-xl font-bold text-white">Sponsorship Market Valuation</h2>
                <p className="text-neutral-400 text-sm">Projected growth (2020-2030). CAGR ~8.7%.</p>
            </div>
            <div className="h-[300px] w-full">
                <Line options={options} data={data} />
            </div>
        </div>
    );
}
