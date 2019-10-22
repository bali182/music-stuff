import { Note, ChordType } from './models'
import { getDistanceBetweenNotes } from './getDistanceBetweenNotes'

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
