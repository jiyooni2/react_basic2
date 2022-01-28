import ApexChart from "react-apexcharts"
import { useQuery } from "react-query";
import { fetchCoinHistory } from "../api";


interface ChartProps {
  coinId: string;
}

interface IHistorical {
  time_open: string;
  time_close: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  market_cap: number;
}

function Chart({ coinId }: ChartProps) {
  const { isLoading, data } = useQuery<IHistorical[]>(["ohlcv", coinId], () =>
    fetchCoinHistory(coinId)
  );

  console.log(coinId);
  return <div>{isLoading?"Loading Chart...":<ApexChart type="line" options={chart:{height:500,width:500}}/>}</div>;
}
export default Chart;
