import { useQuery } from "react-query";
import { fetchCoinHistory } from "../api";

interface PriceProps {
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

function Price({ coinId }: PriceProps) {
  const { isLoading, data } = useQuery<IHistorical[]>(["price", coinId], () =>
    fetchCoinHistory(coinId)
  );

  return (
    <div>
      {isLoading
        ? "Loading Chart..."
        : data?.map((value) => {
            return (
              <div>
                <li>date : {value.time_open}</li>
                <li>open : {value.open}</li>
                <li>close : {value.close}</li>
                <br></br>
              </div>
            );
          })}
    </div>
  );
}

export default Price;
