import { BrowserRouter as Routes, Switch, Route } from "react-router-dom";

import Coins from "./routes/Coins";
import Coin from "./routes/Coin";

function Router() {
  return (
    <Routes basename="/react_basic2">
      <Switch>
        <Route path="/:coinId">
          <Coin />
        </Route>
        <Route path="/">
          <Coins />
        </Route>
      </Switch>
    </Routes>
  );
}

export default Router;
