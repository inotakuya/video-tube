import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Top from "./pages/Top"

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Top} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
