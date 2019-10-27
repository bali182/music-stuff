import minBy from 'lodash/minBy'
import { Note, ScaleDegree, AnyString, ChordNote, Chord, ChordType } from './models'
import { getDistanceBetweenNotes } from './Notes'
import { ChordShape, GuitarString } from './models'
import { getBassString } from './Strings'
import { getChromaticScale } from './Scales'
import { moveNote, getNormalizedNote } from './Notes'

export function getChordNote(fret: number, note: Note, tone: ScaleDegree, string: AnyString): ChordNote {
  return { fret, note, scaleDegree: tone, string }
}

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

export function getTriadType(root: Note, third: Note, fifth: Note): ChordType {
  const rootThirdDist = getDistanceBetweenNotes(root, third)
  const thirdFifthDist = getDistanceBetweenNotes(third, fifth)
  if (rootThirdDist === 4 && thirdFifthDist === 3) {
    return ChordType.Major
  } else if (rootThirdDist === 3 && thirdFifthDist === 4) {
    return ChordType.Minor
  } else if (rootThirdDist === 3 && thirdFifthDist === 3) {
    return ChordType.Diminished
  }
  throw new TypeError(
    `Triad (${root} -${rootThirdDist}-> ${third} -${thirdFifthDist}-> ${fifth}) had unrecognizable note distances.`
  )
}

export function getBassChordShape(guitarChord: ChordShape): ChordShape {
  return {
    ...guitarChord,
    notes: guitarChord.notes
      .filter((note) => note.string !== GuitarString.E1 && note.string !== GuitarString.B)
      .map((note) => ({
        ...note,
        string: getBassString(note.string),
      })),
  }
}

export function moveChordShape(chord: ChordShape, root: Note, allowOpenStrings: boolean = true): ChordShape {
  const normalizedRoot = getNormalizedNote(root)
  const chromaticScale = getChromaticScale(getNormalizedNote(chord.root))
  const lowestNote = minBy(chord.notes, (note) => note.fret)
  let shift = chromaticScale.indexOf(normalizedRoot)
  if (shift === 0 && lowestNote.fret === 0 && !allowOpenStrings) {
    shift = chromaticScale.length
  }
  const movedChord: ChordShape = {
    ...chord,
    root: root,
    notes: chord.notes.map(
      (note): ChordNote => ({
        scaleDegree: note.scaleDegree,
        string: note.string,
        fret: note.fret + shift,
        note: moveNote(note.note, shift),
      })
    ),
  }
  return movedChord
}
