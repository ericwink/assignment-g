import { useState } from "react";
import BarChart from "../components/BarChart"
import LineChart from "../components/LineChart";

const EnergyUse = ({ chartData }) => {
    const readingData = chartData.data[0].attributes.readings.kw;

    const condenseByDay = () => {
        let newData = {};
        for (let row in readingData) {
            //exclude 00:00 reading
            if (row.length < 20) continue;
            let date = row.slice(0, 10);
            if (!(date in newData)) newData[date] = 0;
            newData[date] += readingData[row];
        }
        return newData;
    };

    const perDiemHourBreakdown = () => {
        let newData = {};
        for (let row in readingData) {
            //exclude 00:00 reading
            if (row.length < 20) continue;
            let date = row.slice(0, 10);
            let hour = row.slice(10, 13)
            if (!(date in newData)) newData[date] = {};
            if (!(hour in newData[date])) newData[date][hour] = 0
            newData[date][hour] += readingData[row];
        }
        return newData;
    };

    const perDayBreakdown = perDiemHourBreakdown()

    const findByDate = (date) => {
        return perDayBreakdown[date]
    }

    const dateSelect = (e) => {
        const date = e.target.value
        if (!date) setData(() => condenseByDay())
        if (date) setData(() => findByDate(date))
    }

    const [chartType, setChartType] = useState("bar");
    const [data, setData] = useState(() => condenseByDay())
    const chartSelectorText = chartType === "bar" ? "line" : "bar";
    const chart =
        chartType === "bar" ? (
            <BarChart
                readingData={data}
            />
        ) : (
            <LineChart
                readingData={data}
            />
        );


    return (
        <>
            <select name="date-select" id="date-select" onChange={dateSelect}>
                <option value="">Select by date</option>
                {Object.keys(perDayBreakdown).map((day) => {
                    return <option value={day}>{day}</option>
                })}
            </select>
            <button onClick={() => setChartType(current => (current === "bar" ? "line" : "bar"))}>{`Switch to ${chartSelectorText} graph`}</button>
            {chart}
        </>
    )
}

export default EnergyUse