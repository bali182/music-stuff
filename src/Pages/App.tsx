import React, { Component } from 'react'
import { MainScreen } from './MainScreen'
import { HashRouter, Switch, Route } from 'react-router-dom'
import { MajorCagedPracticeScreen } from './MajorCagedPracticeScreen'
import { MajorTriadsPracticeScreen } from './MajorTriadsPracticeScreen'
import { MinorTriadsPracticeScreen } from './MinorTriadsPracticeScreen'

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
          <Route path="/major-triads" exact={true}>
            <MajorTriadsPracticeScreen />
          </Route>
          <Route path="/minor-triads" exact={true}>
            <MinorTriadsPracticeScreen />
          </Route>
        </Switch>
      </HashRouter>
    )
  }
}
