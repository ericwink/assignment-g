import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function BarChart({ readingData }) {
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: "top",
            },
            title: {
                display: true,
                text: `Meter Reading`,
            },
        },
    };
    const labels = Object.keys(readingData);

    const data = {
        labels,
        datasets: [
            {
                label: "KW",
                data: Object.values(readingData),
                backgroundColor: "rgba(71, 55, 246, 0.664)",
            },
        ],
    };

    return (
        <Bar
            options={options}
            data={data}
        />
    );
}

export default BarChart;
