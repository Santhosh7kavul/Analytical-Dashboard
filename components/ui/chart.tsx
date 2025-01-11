"use client";

import { Line, Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement,
  ArcElement,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "bottom" as const,
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      grid: {
        color: "rgba(0, 0, 0, 0.1)",
      },
    },
    x: {
      grid: {
        display: false,
      },
    },
  },
};

const pieOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "bottom" as const,
    },
  },
};

interface ChartProps {
  data: any;
  className?: string;
}

export function LineChart({ data, className }: ChartProps) {
  return <Line options={chartOptions} data={data} className={className} />;
}

export function BarChart({ data, className }: ChartProps) {
  return <Bar options={chartOptions} data={data} className={className} />;
}
export function BarChart1({ data, className }: ChartProps) {
  return <Bar options={chartOptions} data={data} className={className} />;
}

export function PieChart({ data, className }: ChartProps) {
  return <Pie options={pieOptions} data={data} className={className} />;
}