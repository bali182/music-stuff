import React, { Component } from 'react'
import { MainScreen } from './MainScreen'
import { HashRouter, Switch, Route } from 'react-router-dom'

export class App extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path="/" exact={true}>
            <MainScreen />
          </Route>
        </Switch>
      </HashRouter>
    )
  }
}
