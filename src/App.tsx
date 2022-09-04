import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Homepage from "./SiteHomepage/Pages/Homepage";
//Site v1
function App() {
  let location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.pathname}>
        <Route exact path="/" component={Homepage} />
      </Switch>
    </AnimatePresence>
  );
}

export default App;
