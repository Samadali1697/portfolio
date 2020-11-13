import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/js/Home";
import NotFound from "./containers/js/NotFound";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      {/* Finally, catch all unmatched routes */}
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
}

