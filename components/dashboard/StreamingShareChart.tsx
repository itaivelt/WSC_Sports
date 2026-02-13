"use client";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
    labels: ['Traditional Cable/TV', 'Digital Streaming', 'Social/Other'],
    datasets: [
        {
            label: 'Rights Share (%)',
            data: [55, 35, 10],
            backgroundColor: [
                '#333', // Dark Grey
                '#d0f200', // Lime
                '#fff'  // White
            ],
            borderColor: '#000',
            borderWidth: 2,
            hoverOffset: 10,
        },
    ],
};

const options = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: "70%",
    plugins: {
        legend: {
            position: "bottom" as const,
            labels: {
                color: "#a3a3a3",
                usePointStyle: true,
                padding: 20
            }
        }
    }
}

export function StreamingShareChart() {
    return (
        <div className="bg-[#111] backdrop-blur-sm p-6 rounded-xl border border-white/5 shadow-xl h-full">
            <div className="mb-6">
                <h2 className="text-xl font-bold text-white">Media Rights Distribution</h2>
                <p className="text-neutral-400 text-sm">Shift from Linear to Digital.</p>
            </div>
            <div className="h-[300px] w-full relative">
                <Doughnut data={data} options={options} />
                {/* Center Text Overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none pb-8">
                    <span className="text-4xl font-bold text-white">35%</span>
                    <span className="text-xs text-[#d0f200] font-bold uppercase">Streaming</span>
                </div>
            </div>
        </div>
    );
}
