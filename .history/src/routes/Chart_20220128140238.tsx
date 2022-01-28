interface IChart {
  coinId?: string;
}

function Chart<IChart>() {
  console.log((props) => props.coinId);
  return <h1>Chart</h1>;
}
export default Chart;
