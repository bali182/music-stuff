import { Note, Key, KeyType } from './models'
import { getScaleChords, getChordKey } from './Chords'
import { getMajorScale, getMinorScale } from './Scales'
import { majorTriadsGuitar } from '../data/majorTriads'
import { minorTriadsGuitar } from '../data/minorTriads'
import { ofScaleDegree } from '../test/testUtils'
import { getNoteOnString } from './Strings'

describe('Chords', () => {
  describe('getTriadType', () => {
    it('should identify all major triads correctly', () => {
      for (const triad of majorTriadsGuitar) {
        const root = triad.notes.find(ofScaleDegree(triad.key, { degree: 1 }))
        const third = triad.notes.find(ofScaleDegree(triad.key, { degree: 3 }))
        const fifth = triad.notes.find(ofScaleDegree(triad.key, { degree: 5 }))
        const key = getChordKey(getNoteOnString(root), getNoteOnString(third), getNoteOnString(fifth))
        expect(key.type).toBe(KeyType.Ionian)
      }
    })
    it('should identify all minor triads correctly', () => {
      for (const triad of minorTriadsGuitar) {
        const root = triad.notes.find(ofScaleDegree(triad.key, { degree: 1 }))
        const third = triad.notes.find(ofScaleDegree(triad.key, { degree: 3 }))
        const fifth = triad.notes.find(ofScaleDegree(triad.key, { degree: 5 }))
        const key = getChordKey(getNoteOnString(root), getNoteOnString(third), getNoteOnString(fifth))
        expect(key.type).toBe(KeyType.Aeolian)
      }
    })
  })

  describe('getScaleChords', () => {
    const cIonianKey: Key = { root: Note.C, type: KeyType.Ionian }
    const dAeolianKey: Key = { root: Note.D, type: KeyType.Aeolian }
    const eAeolianKey: Key = { root: Note.E, type: KeyType.Aeolian }
    const fIonianKey: Key = { root: Note.F, type: KeyType.Ionian }
    const gIonianKey: Key = { root: Note.G, type: KeyType.Ionian }
    const aAeolianKey: Key = { root: Note.A, type: KeyType.Aeolian }
    const bLocrianKey: Key = { root: Note.B, type: KeyType.Locrian }

    it('should identify major scale chords properly', () => {
      const scale = getMajorScale(Note.C)
      const chords = getScaleChords(scale)

      expect(chords).toHaveLength(7)

      const [c, dm, em, f, g, am, bdim] = chords

      expect(c.key).toEqual(cIonianKey)
      expect(dm.key).toEqual(dAeolianKey)
      expect(em.key).toEqual(eAeolianKey)
      expect(f.key).toEqual(fIonianKey)
      expect(g.key).toEqual(gIonianKey)
      expect(am.key).toEqual(aAeolianKey)
      expect(bdim.key).toEqual(bLocrianKey)
    })

    it('should identify minor scale chords properly', () => {
      const scale = getMinorScale(Note.A)
      const chords = getScaleChords(scale)

      expect(chords).toHaveLength(7)

      const [am, bdim, c, dm, em, f, g] = chords

      expect(am.key).toEqual(aAeolianKey)
      expect(bdim.key).toEqual(bLocrianKey)
      expect(c.key).toEqual(cIonianKey)
      expect(dm.key).toEqual(dAeolianKey)
      expect(em.key).toEqual(eAeolianKey)
      expect(f.key).toEqual(fIonianKey)
      expect(g.key).toEqual(gIonianKey)
    })
  })
})
