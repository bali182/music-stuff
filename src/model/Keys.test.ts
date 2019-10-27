import { getScaleDegree } from './Keys'
import { KeyType, Note, ScaleDegree, Key } from './models'

describe('Keys', () => {
  describe('getScaleDegree', () => {
    it('should return the correct, unaltered degree for random keys', () => {
      const gIonian: Key = { root: Note.G, type: KeyType.Ionian }
      const cAeolian: Key = { root: Note.C, type: KeyType.Aeolian }

      expect(getScaleDegree(gIonian, Note.D)).toMatchObject<ScaleDegree>({ degree: 5 })
      expect(getScaleDegree(gIonian, Note.FSharp)).toMatchObject<ScaleDegree>({ degree: 7 })
      expect(getScaleDegree(cAeolian, Note.DSharp)).toMatchObject<ScaleDegree>({ degree: 3 })
      expect(getScaleDegree(cAeolian, Note.D)).toMatchObject<ScaleDegree>({ degree: 2 })
    })
  })
})
