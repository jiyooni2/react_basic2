import { useParams } from "react-router-dom";

function Chart() {
  const id = useParams();
  console.log(id);
  return <h1>Chart</h1>;
}
export default Chart;
