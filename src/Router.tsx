import { BrowserRouter as Routes, Switch, Route } from "react-router-dom";

import Coins from "./routes/Coins";
import Coin from "./routes/Coin";

function Router() {
  return (
    <Routes>
      <Switch>
        {/* <Route path="/:coinId">
         */}
        <Route path={`${process.env.PUBLIC_URL}/:coinId`}>
          <Coin />
        </Route>
        <Route path={`${process.env.PUBLIC_URL}/`}>
          <Coins />
        </Route>
      </Switch>
    </Routes>
  );
}

export default Router;
