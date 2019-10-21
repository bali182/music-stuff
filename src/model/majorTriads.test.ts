import { majorTriads } from './majorTriads'
import { ChordShape, ChordTone } from './models'
import { expectDistance, expectCorrectNoteOnString } from '../test/testUtils'

describe('major triads', () => {
  function expectMajorTriad(chord: ChordShape) {
    expect(chord.notes).toHaveLength(3)
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

  it('should sanity test all triads', () => {
    for (const chord of majorTriads) {
      expectMajorTriad(chord)
    }
  })
})
