import { Note, ChromaticScaleFromC } from './models'
import { getChromaticScale } from './getChromaticScale'

export function moveNote(note: Note, semitones: number): Note {
  const withoutOctaves = semitones % ChromaticScaleFromC.length
  const moveBy = withoutOctaves >= 0 ? withoutOctaves : ChromaticScaleFromC.length + withoutOctaves
  const chromaticFromNote = getChromaticScale(note)
  return chromaticFromNote[moveBy]
}
