import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

function LineChart({ readingData }) {
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: "top",
            },
            title: {
                display: true,
                text: `Meter Reading by`,
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
        <Line
            options={options}
            data={data}
        />
    );
}

export default LineChart;
