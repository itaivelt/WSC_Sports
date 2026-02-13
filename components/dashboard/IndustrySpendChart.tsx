"use client";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const options = {
    indexAxis: "y" as const,
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
        x: {
            grid: {
                color: "rgba(255, 255, 255, 0.1)",
            },
            ticks: {
                color: "#a3a3a3",
                callback: (value: any) => `$${value}B`,
            },
            border: { display: false },
        },
        y: {
            grid: { display: false },
            ticks: {
                color: "#e5e5e5",
                font: {
                    weight: "bold" as const,
                }
            },
            border: { display: false },
        },
    },
};

const labels = ['Financial Services', 'Technology', 'Automotive', 'Beverages', 'Betting', 'Telecom', 'Airlines'];

const data = {
    labels,
    datasets: [
        {
            label: "Annual Spend ($ Billion)",
            data: [12.5, 11.8, 10.2, 9.5, 8.7, 6.4, 5.1],
            backgroundColor: [
                '#d0f200', // Lime
                '#badd00',
                '#a4c800',
                '#8eb300',
                '#799e00',
                '#555',
                '#333'
            ],
            borderRadius: 4,
        },
    ],
};

export function IndustrySpendChart() {
    return (
        <div className="bg-[#111] backdrop-blur-sm p-6 rounded-xl border border-white/5 shadow-xl h-full">
            <div className="mb-6">
                <h2 className="text-xl font-bold text-white">Top Industry Spenders</h2>
                <p className="text-neutral-400 text-sm">Financial & Tech sectors leading growth.</p>
            </div>
            <div className="h-[300px] w-full">
                <Bar options={options} data={data} />
            </div>
        </div>
    );
}
