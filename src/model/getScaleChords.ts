import { Note, Chord, ChordType } from './models'
import { getTriadType } from './getTriadType'

export function getScaleChords(scale: Note[]): Chord[] {
  return scale.map((root: Note, degree: number) => {
    const third = scale[(degree + 2) % scale.length]
    const fifth = scale[(degree + 4) % scale.length]
    return {
      root,
      type: getTriadType(root, third, fifth),
      notes: [root, third, fifth],
    }
  })
}
