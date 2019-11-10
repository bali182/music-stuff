import React, { Component } from 'react'
import { MainScreen } from './MainScreen'
import { HashRouter, Switch, Route } from 'react-router-dom'
import { RandomNotePracticeScreen } from '../Reusable/RandomNotePracticeScreen'
import { ChordPracticeScreen } from '../Reusable/ChordPracticeScreen'
import {
  getMajorCagedSequence,
  getMajorTriadSequence,
  getMinorTriadSequence,
  getMixedTriadSequence,
  getRandomTriadSequence,
  getMinorCagedSequence,
} from '../model/chordSequences'
import { colors } from '../Ux/colors'
import { majorTriadsGuitar, majorTriadsBass } from '../data/majorTriads'
import { minorTriadsGuitar, minorTriadsBass } from '../data/minorTriads'
import { diminishedTriadsGuitar, diminishedTriadsBass } from '../data/diminishedTriads'
import { GuitarStrings, BassStrings } from '../data/strings'
import { ScaleWithChordsScreen } from '../Reusable/ScaleWithChordsScreen'
import { getRandomTriadsOnPentatonicScale, getRandomCagedChordsOnPentatonicScale } from '../model/scalesWithChords'

export class App extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path="/" exact={true}>
            <MainScreen />
          </Route>
          <Route path="/major-caged" exact={true}>
            <ChordPracticeScreen getSequence={getMajorCagedSequence} color={colors.red} strings={GuitarStrings} />
          </Route>
          <Route path="/minor-caged" exact={true}>
            <ChordPracticeScreen getSequence={getMinorCagedSequence} color={colors.red} strings={GuitarStrings} />
          </Route>
          <Route path="/major-triads" exact={true}>
            <ChordPracticeScreen
              getSequence={getMajorTriadSequence(majorTriadsGuitar)}
              color={colors.green}
              strings={GuitarStrings}
            />
          </Route>
          <Route path="/minor-triads" exact={true}>
            <ChordPracticeScreen
              getSequence={getMinorTriadSequence(minorTriadsGuitar)}
              color={colors.green}
              strings={GuitarStrings}
            />
          </Route>
          <Route path="/mixed-triads" exact={true}>
            <ChordPracticeScreen
              getSequence={getMixedTriadSequence(majorTriadsGuitar, minorTriadsGuitar)}
              color={colors.green}
              strings={GuitarStrings}
            />
          </Route>
          <Route path="/random-triads" exact={true}>
            <ChordPracticeScreen
              getSequence={getRandomTriadSequence(majorTriadsGuitar, minorTriadsGuitar, diminishedTriadsGuitar)}
              color={colors.green}
              strings={GuitarStrings}
            />
          </Route>
          <Route path="/major-triads-bass" exact={true}>
            <ChordPracticeScreen
              getSequence={getMajorTriadSequence(majorTriadsBass)}
              color={colors.purple}
              strings={BassStrings}
            />
          </Route>
          <Route path="/minor-triads-bass" exact={true}>
            <ChordPracticeScreen
              getSequence={getMinorTriadSequence(minorTriadsBass)}
              color={colors.purple}
              strings={BassStrings}
            />
          </Route>
          <Route path="/mixed-triads-bass" exact={true}>
            <ChordPracticeScreen
              getSequence={getMixedTriadSequence(majorTriadsBass, minorTriadsBass)}
              color={colors.purple}
              strings={BassStrings}
            />
          </Route>
          <Route path="/random-triads-bass" exact={true}>
            <ChordPracticeScreen
              getSequence={getRandomTriadSequence(majorTriadsBass, minorTriadsBass, diminishedTriadsBass)}
              color={colors.purple}
              strings={BassStrings}
            />
          </Route>
          <Route path="/guitar-random-notes" exact={true}>
            <RandomNotePracticeScreen strings={GuitarStrings} />
          </Route>
          <Route path="/bass-random-notes" exact={true}>
            <RandomNotePracticeScreen strings={BassStrings} />
          </Route>
          <Route path="/pentatonics-with-triads" exact={true}>
            <ScaleWithChordsScreen
              getScaleWithChords={getRandomTriadsOnPentatonicScale}
              color={colors.green}
              strings={GuitarStrings}
            />
          </Route>
          <Route path="/pentatonics-with-caged" exact={true}>
            <ScaleWithChordsScreen
              getScaleWithChords={getRandomCagedChordsOnPentatonicScale}
              color={colors.green}
              strings={GuitarStrings}
            />
          </Route>
        </Switch>
      </HashRouter>
    )
  }
}
