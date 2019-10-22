import { EAD, ADG, DGB, GBE } from './minorTriads'
import { ChordShape, ChordTone, ChordType } from './models'
import { expectDistance, expectCorrectNoteOnString, testTriadGroup } from '../test/testUtils'

describe('minor triads', () => {
  function expectMinorTriad(chord: ChordShape) {
    expect(chord.notes).toHaveLength(3)
    expect(chord.type).toBe(ChordType.Minor)
    const root = chord.notes.find((note) => note.tone === ChordTone.Root)
    const third = chord.notes.find((note) => note.tone === ChordTone.Third)
    const fifth = chord.notes.find((note) => note.tone === ChordTone.Fifth)

    expect(root).not.toBeUndefined()
    expect(third).not.toBeUndefined()
    expect(fifth).not.toBeUndefined()
    expect(chord.root).toBe(root.note)

    expectDistance(root.note, third.note, 3)
    expectDistance(third.note, fifth.note, 4)
    expectDistance(root.note, fifth.note, 7)

    expectCorrectNoteOnString(root)
    expectCorrectNoteOnString(third)
    expectCorrectNoteOnString(fifth)
  }

  testTriadGroup('EAD Strings', EAD, expectMinorTriad)
  testTriadGroup('ADG Strings', ADG, expectMinorTriad)
  testTriadGroup('DGB Strings', DGB, expectMinorTriad)
  testTriadGroup('GBE Strings', GBE, expectMinorTriad)
})
