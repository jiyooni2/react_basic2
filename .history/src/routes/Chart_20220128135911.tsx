import { useParams } from "react-router-dom";

function Chart() {
  const { coinId } = useParams();
  console.log(coinId);
  return <h1>Chart</h1>;
}
export default Chart;
