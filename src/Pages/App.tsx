import React, { Component } from 'react'
import { MainScreen } from './MainScreen'
import { HashRouter, Switch, Route } from 'react-router-dom'
import { MajorCagedPracticeScreen } from './MajorCagedPracticeScreen'

export class App extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path="/" exact={true}>
            <MainScreen />
          </Route>
          <Route path="/major-caged" exact={true}>
            <MajorCagedPracticeScreen />
          </Route>
        </Switch>
      </HashRouter>
    )
  }
}
