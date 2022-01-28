interface ChartProps {
  coinId?: string;
}

function Chart({ coinId }: ChartProps) {
  console.log((props) => props.coinId);
  return <h1>Chart</h1>;
}
export default Chart;
