import { ChordShape, ScaleDegree, ChordType } from '../model/models'
import { expectDistance, expectCorrectNoteOnString, testTriadGroup } from '../test/testUtils'
import { EAD, ADG, DGB, GBE } from './diminishedTriads'

describe('diminished triads', () => {
  function expectDiminishedTriad(chord: ChordShape) {
    expect(chord.notes).toHaveLength(3)
    expect(chord.type).toBe(ChordType.Diminished)
    const root = chord.notes.find((note) => note.scaleDegree === ScaleDegree.Root)
    const third = chord.notes.find((note) => note.scaleDegree === ScaleDegree.Third)
    const fifth = chord.notes.find((note) => note.scaleDegree === ScaleDegree.Fifth)

    expect(root).not.toBeUndefined()
    expect(third).not.toBeUndefined()
    expect(fifth).not.toBeUndefined()
    expect(chord.root).toBe(root.note)

    expectDistance(root.note, third.note, 3)
    expectDistance(third.note, fifth.note, 3)
    expectDistance(root.note, fifth.note, 6)

    expectCorrectNoteOnString(root)
    expectCorrectNoteOnString(third)
    expectCorrectNoteOnString(fifth)
  }

  testTriadGroup('EAD Strings', EAD, expectDiminishedTriad)
  testTriadGroup('ADG Strings', ADG, expectDiminishedTriad)
  testTriadGroup('DGB Strings', DGB, expectDiminishedTriad)
  testTriadGroup('GBE Strings', GBE, expectDiminishedTriad)
})
