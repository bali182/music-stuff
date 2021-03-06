import { ChordShape, Note, TriadGroup, MusicalKey, ScaleDegree, FrettedNote, ScaleShape } from '../model/models'
import { getChromaticScale, getScale } from '../model/Scales'
import { getScaleDegree } from '../model/Keys'
import { getNoteOnString } from '../model/Strings'

export function expectDistance(noteA: Note, noteB: Note, distance: number) {
  const scale = getChromaticScale(noteA)
  expect(noteB).toBe(scale[distance])
}

export const ofScaleDegree = (key: MusicalKey, expectedDegree: ScaleDegree) => (note: FrettedNote) => {
  const actualDegree = getScaleDegree(key, getNoteOnString(note))
  return actualDegree.degree === expectedDegree.degree && actualDegree.modifier == expectedDegree.modifier
}

export function expectChord(chord: ChordShape): void {
  expect(chord.notes.length).toBeGreaterThanOrEqual(3)

  const roots = chord.notes.filter(ofScaleDegree(chord.key, { degree: 1 }))
  const thirds = chord.notes.filter(ofScaleDegree(chord.key, { degree: 3 }))
  const fifths = chord.notes.filter(ofScaleDegree(chord.key, { degree: 5 }))

  expect(roots.length).toBeGreaterThanOrEqual(1)
  expect(thirds.length).toBeGreaterThanOrEqual(1)
  expect(fifths.length).toBeGreaterThanOrEqual(1)
}

export function expectScaleShape(scale: ScaleShape): void {
  const parentScale = getScale(scale.key)
  for (const frettedNote of scale.notes) {
    const note = getNoteOnString(frettedNote)
    if (parentScale.indexOf(note) < 0) {
      fail(
        `Note ${note}" (fretted as ${JSON.stringify(frettedNote)}) isn't on parent scale: ${JSON.stringify(
          parentScale
        )}`
      )
    }
  }
}

// TODO test if inversion is correct
export function testTriadGroup(name: string, triads: TriadGroup) {
  describe(name, () => {
    it('should have proper root position', () => {
      expectChord(triads.rootPosition)
    })
    it('should have proper first inversion', () => {
      expectChord(triads.firstInversion)
    })
    it('should have proper second inversion', () => {
      expectChord(triads.secondInversion)
    })
  })
}
