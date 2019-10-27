import { ChordShape, ScaleDegree, ChordType } from '../model/models'
import { expectCorrectNoteOnString } from '../test/testUtils'
import { cShape, dShape, eShape, gShape, aShape } from './majorCagedChords'
import { getMajorScale } from '../model/Scales'

describe('diminished triads', () => {
  function expectMajorChord(chord: ChordShape) {
    expect(chord.type).toBe(ChordType.Major)

    const rootNotes = chord.notes.filter((note) => note.scaleDegree === ScaleDegree.Root)
    const thirdNotes = chord.notes.filter((note) => note.scaleDegree === ScaleDegree.Third)
    const fifthNotes = chord.notes.filter((note) => note.scaleDegree === ScaleDegree.Fifth)

    expect(rootNotes.length).toBeGreaterThanOrEqual(1)
    expect(thirdNotes.length).toBeGreaterThanOrEqual(1)
    expect(fifthNotes.length).toBeGreaterThanOrEqual(1)

    const majorScale = getMajorScale(chord.root)

    for (const chordNote of chord.notes) {
      switch (chordNote.scaleDegree) {
        case ScaleDegree.Root:
          expect(chordNote.note).toBe(chord.root)
          expect(chordNote.note).toBe(majorScale[0])
          break
        case ScaleDegree.Third:
          expect(chordNote.note).toBe(majorScale[2])
          break
        case ScaleDegree.Fifth:
          expect(chordNote.note).toBe(majorScale[4])
          break
        default:
          fail(`Unexpected chord tone: ${chordNote.scaleDegree}`)
      }
    }

    chord.notes.forEach(expectCorrectNoteOnString)
  }

  it('should represent a correct "C" shape', () => {
    expectMajorChord(cShape)
  })
  it('should represent a correct "A" shape', () => {
    expectMajorChord(aShape)
  })
  it('should represent a correct "G" shape', () => {
    expectMajorChord(gShape)
  })
  it('should represent a correct "E" shape', () => {
    expectMajorChord(eShape)
  })
  it('should represent a correct "D" shape', () => {
    expectMajorChord(dShape)
  })
})
