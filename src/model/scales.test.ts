import { Note } from './models'
import {
  getIonianScale,
  getDorianScale,
  getAeolianScale,
  getPhrygianScale,
  getLydianScale,
  getMixolydianScale,
  getLocrianScale,
} from './scales'

describe('scales', () => {
  function expectNaturalScale(mode: string, root: Note, scale: (root: Note) => Note[]) {
    it(`should generate the natural (${root}) ${mode} scale`, () => {
      const notes = scale(root)
      expect(notes[0]).toBe(root)
      expect(new Set(notes)).toEqual(new Set([Note.C, Note.D, Note.E, Note.F, Note.G, Note.A, Note.B]))
    })
  }
  expectNaturalScale('ionian', Note.C, getIonianScale)
  expectNaturalScale('dorian', Note.D, getDorianScale)
  expectNaturalScale('phrygian', Note.E, getPhrygianScale)
  expectNaturalScale('lydian', Note.F, getLydianScale)
  expectNaturalScale('mixolydian', Note.G, getMixolydianScale)
  expectNaturalScale('aeolian', Note.A, getAeolianScale)
  expectNaturalScale('locrian', Note.B, getLocrianScale)
})
