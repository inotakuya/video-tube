import React, { FC } from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Search from "./pages/Search"
import Top from "./pages/Top"
import Watch from "./pages/Watch"

const App: FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Top} />
        <Route exact path="/watch" component={Watch} />
        <Route exact path="/search" component={Search} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
