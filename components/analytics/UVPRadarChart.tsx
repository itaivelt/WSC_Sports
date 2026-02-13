"use client";

import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";

ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
);

const data = {
    labels: ['AI Indexing', 'Sports Logic', 'Rights Control', 'Ease of Use', 'Search Speed'],
    datasets: [
        {
            label: 'WSC Portal',
            data: [9, 10, 9, 8, 10],
            backgroundColor: 'rgba(208, 242, 0, 0.2)', // Lime
            borderColor: '#d0f200',
            pointBackgroundColor: '#d0f200',
            pointBorderColor: '#000',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: '#d0f200',
        },
        {
            label: 'Generic Cloud Storage',
            data: [2, 1, 3, 9, 4],
            backgroundColor: 'rgba(255, 255, 255, 0.1)', // White/Grey
            borderColor: '#555',
            pointBackgroundColor: '#555',
            pointBorderColor: '#000',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: '#555',
        },
    ],
};

const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            labels: { color: '#a3a3a3' }
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
        r: {
            angleLines: { color: 'rgba(255, 255, 255, 0.1)' },
            grid: { color: 'rgba(255, 255, 255, 0.1)' },
            pointLabels: {
                color: '#a3a3a3',
                font: { size: 12 }
            },
            ticks: { display: false, backdropColor: 'transparent' }
        }
    }
};

export function UVPRadarChart() {
    return (
        <div className="bg-[#111] backdrop-blur-sm p-6 rounded-xl border border-white/5 shadow-xl h-full">
            <div className="mb-6">
                <h2 className="text-xl font-bold text-white">Unique Value Proposition</h2>
                <p className="text-neutral-400 text-sm">WSC vs Generic Solution.</p>
            </div>
            <div className="h-[300px] w-full">
                <Radar data={data} options={options} />
            </div>
        </div>
    );
}
