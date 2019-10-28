import { getScaleDegree, getRelativeKey } from './Keys'
import { KeyType, Note, ScaleDegree, MusicalKey } from './models'

describe('Keys', () => {
  const cIonian: MusicalKey = { root: Note.C, type: KeyType.Ionian }
  const aAeolian: MusicalKey = { root: Note.A, type: KeyType.Aeolian }
  const gIonian: MusicalKey = { root: Note.G, type: KeyType.Ionian }
  const cAeolian: MusicalKey = { root: Note.C, type: KeyType.Aeolian }
  const eAeolian: MusicalKey = { root: Note.E, type: KeyType.Aeolian }

  describe('getScaleDegree', () => {
    it('should return the correct, unaltered degree for random keys', () => {
      expect(getScaleDegree(gIonian, Note.D)).toMatchObject<ScaleDegree>({ degree: 5 })
      expect(getScaleDegree(gIonian, Note.FSharp)).toMatchObject<ScaleDegree>({ degree: 7 })
      expect(getScaleDegree(cAeolian, Note.DSharp)).toMatchObject<ScaleDegree>({ degree: 3 })
      expect(getScaleDegree(cAeolian, Note.D)).toMatchObject<ScaleDegree>({ degree: 2 })
    })
  })
  describe('getRelativeKey', () => {
    it('should return correct relative keys', () => {
      expect(getRelativeKey(gIonian, KeyType.Aeolian)).toEqual(eAeolian)
      expect(getRelativeKey(eAeolian, KeyType.Ionian)).toEqual(gIonian)
      expect(getRelativeKey(cIonian, KeyType.Aeolian)).toEqual(aAeolian)
      expect(getRelativeKey(aAeolian, KeyType.Ionian)).toEqual(cIonian)
    })
  })
})
