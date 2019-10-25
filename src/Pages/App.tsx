import React, { Component } from 'react'
import { MainScreen } from './MainScreen'
import { HashRouter, Switch, Route } from 'react-router-dom'
import { RandomNotePracticeScreen } from '../Reusable/RandomNotePracticeScreen'
import { GuitarStrings, BassStrings } from '../model/models'
import { ChordPracticeScreen } from '../Reusable/ChordPracticeScreen'
import {
  getMajorCagedSequence,
  getMajorTriadSequence,
  getMinorTriadSequence,
  getMixedTriadSequence,
  getRandomTriadSequence,
} from '../model/chordSequences'
import { colors } from '../Ux/colors'

export class App extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path="/" exact={true}>
            <MainScreen />
          </Route>
          <Route path="/major-caged" exact={true}>
            <ChordPracticeScreen getSequence={getMajorCagedSequence} color={colors.green} strings={GuitarStrings} />
          </Route>
          <Route path="/major-triads" exact={true}>
            <ChordPracticeScreen getSequence={getMajorTriadSequence} color={colors.red} strings={GuitarStrings} />
          </Route>
          <Route path="/minor-triads" exact={true}>
            <ChordPracticeScreen getSequence={getMinorTriadSequence} color={colors.orange} strings={GuitarStrings} />
          </Route>
          <Route path="/mixed-triads" exact={true}>
            <ChordPracticeScreen getSequence={getMixedTriadSequence} color={colors.red} strings={GuitarStrings} />
          </Route>
          <Route path="/random-triads" exact={true}>
            <ChordPracticeScreen getSequence={getRandomTriadSequence} color={colors.red} strings={GuitarStrings} />
          </Route>
          <Route path="/guitar-random-notes" exact={true}>
            <RandomNotePracticeScreen strings={GuitarStrings} />
          </Route>
          <Route path="/bass-random-notes" exact={true}>
            <RandomNotePracticeScreen strings={BassStrings} />
          </Route>
        </Switch>
      </HashRouter>
    )
  }
}
