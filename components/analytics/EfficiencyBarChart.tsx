"use client";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip
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
        },
    },
    scales: {
        y: {
            beginAtZero: true,
            grid: { color: "rgba(255, 255, 255, 0.1)" },
            ticks: { color: "#a3a3a3" },
            border: { display: false },
            title: { display: true, text: 'Hours / Week', color: '#a3a3a3' }
        },
        x: {
            grid: { display: false },
            ticks: { color: "#a3a3a3" },
            border: { display: false },
        },
    },
};

const labels = ['Manual Workflow', 'WSC Partner Portal'];

const data = {
    labels,
    datasets: [
        {
            label: "Weekly Admin Hours",
            data: [20, 2],
            backgroundColor: [
                '#333', // Dark Grey (Manual)
                '#d0f200', // Lime (WSC)
            ],
            borderRadius: 8,
            barThickness: 60,
        },
    ],
};

export function EfficiencyBarChart() {
    return (
        <div className="bg-[#111] backdrop-blur-sm p-6 rounded-xl border border-white/5 shadow-xl h-full">
            <div className="mb-6">
                <h2 className="text-xl font-bold text-white">Operational Efficiency</h2>
                <p className="text-neutral-400 text-sm">Time saved per partner per week.</p>
            </div>
            <div className="h-[300px] w-full">
                <Bar options={options} data={data} />
            </div>
        </div>
    );
}
