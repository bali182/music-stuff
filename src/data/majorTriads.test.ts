import { ChordShape, ChordTone, ChordType } from '../model/models'
import { expectDistance, expectCorrectNoteOnString, testTriadGroup } from '../test/testUtils'
import { EAD, ADG, DGB, GBE } from './majorTriads'

describe('major triads', () => {
  function expectMajorTriad(chord: ChordShape) {
    expect(chord.notes).toHaveLength(3)
    expect(chord.type).toBe(ChordType.Major)
    const root = chord.notes.find((note) => note.tone === ChordTone.Root)
    const third = chord.notes.find((note) => note.tone === ChordTone.Third)
    const fifth = chord.notes.find((note) => note.tone === ChordTone.Fifth)

    expect(root).not.toBeUndefined()
    expect(third).not.toBeUndefined()
    expect(fifth).not.toBeUndefined()
    expect(chord.root).toBe(root.note)

    expectDistance(root.note, third.note, 4)
    expectDistance(third.note, fifth.note, 3)
    expectDistance(root.note, fifth.note, 7)

    expectCorrectNoteOnString(root)
    expectCorrectNoteOnString(third)
    expectCorrectNoteOnString(fifth)
  }

  testTriadGroup('EAD Strings', EAD, expectMajorTriad)
  testTriadGroup('ADG Strings', ADG, expectMajorTriad)
  testTriadGroup('DGB Strings', DGB, expectMajorTriad)
  testTriadGroup('GBE Strings', GBE, expectMajorTriad)
})
