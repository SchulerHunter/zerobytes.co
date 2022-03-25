import React, { Fragment, Suspense, lazy } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import { MuiThemeProvider, CssBaseline } from "@material-ui/core";
import GlobalStyles from "./GlobalStyles";
import Pace from "./Pace";
import theme from "./theme";

const Main = lazy(() => import("./components/Main"));

function App() {
  return (
    <HashRouter>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles />
        <Pace color={theme.palette.primary.light} />
        <Suspense fallback={<Fragment />}>
          <Switch>
            <Route>
              <Main />
            </Route>
          </Switch>
        </Suspense>
      </MuiThemeProvider>
    </HashRouter>
  );
}

export default App;
