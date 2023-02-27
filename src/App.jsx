import { useEffect, useState } from "react";
import BillsView from "./views/BillsView";
import EnergyUse from "./views/EnergyUse";
import axios from 'axios'

function App() {
  const getData = async (url) => {
    try {
      const result = await axios({
        method: 'get',
        url: url,
        headers: { 'Authorization': import.meta.env.VITE_AUTH_KEY }
      })
      console.log(result.data)
      return result.data

    } catch (error) {
      console.log(error)
      return (error)
    }
  }

  const setData = async () => {
    const chartInfo = await getData('https://snapmeter.com/api/public/meters/2080448990211/readings?start=2022-08-01&end=2023-02-01')
    const billInfo = await getData('https://snapmeter.com/api/public/services/2080448990210/bills?start=2022-01-01&end=2023-02-01')
    setChartData(chartInfo)
    setBillData(billInfo)
    setView('Energy Use')
  }

  useEffect(() => {
    setData()
  }, [])

  const [chartData, setChartData] = useState(null)
  const [billData, setBillData] = useState(null)
  const [view, setView] = useState('Loading...')
  const buttonText = view === 'Energy Use' ? 'Bills' : 'Energy Use'
  const display = view === 'Loading...' ? 'Loading...' : view === 'Energy Use' ? <EnergyUse chartData={chartData} /> : <BillsView data={billData} />

  return (
    <div className="App">
      <button onClick={() => setView(current => current === 'Energy Use' ? 'Bills' : 'Energy Use')}>{`View ${buttonText}`}</button>
      {display}
    </div>
  );
}

export default App;
