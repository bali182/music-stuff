import { getMajorScale, getMinorScale } from './Scales'
import { Note, ChordType } from './models'
import { getScaleChords } from './getScaleChords'

describe('getScaleChords', () => {
  it('should identify major scale chords properly', () => {
    const scale = getMajorScale(Note.C)
    const chords = getScaleChords(scale)

    expect(chords).toHaveLength(7)

    const [c, dm, em, f, g, am, bdim] = chords

    expect(c.root).toBe(Note.C)
    expect(c.type).toBe(ChordType.Major)

    expect(dm.root).toBe(Note.D)
    expect(dm.type).toBe(ChordType.Minor)

    expect(em.root).toBe(Note.E)
    expect(em.type).toBe(ChordType.Minor)

    expect(f.root).toBe(Note.F)
    expect(f.type).toBe(ChordType.Major)

    expect(g.root).toBe(Note.G)
    expect(g.type).toBe(ChordType.Major)

    expect(am.root).toBe(Note.A)
    expect(am.type).toBe(ChordType.Minor)

    expect(bdim.root).toBe(Note.B)
    expect(bdim.type).toBe(ChordType.Diminished)
  })

  it('should identify minor scale chords properly', () => {
    const scale = getMinorScale(Note.A)
    const chords = getScaleChords(scale)

    expect(chords).toHaveLength(7)

    const [am, bdim, c, dm, em, f, g] = chords

    expect(am.root).toBe(Note.A)
    expect(am.type).toBe(ChordType.Minor)

    expect(bdim.root).toBe(Note.B)
    expect(bdim.type).toBe(ChordType.Diminished)

    expect(c.root).toBe(Note.C)
    expect(c.type).toBe(ChordType.Major)

    expect(dm.root).toBe(Note.D)
    expect(dm.type).toBe(ChordType.Minor)

    expect(em.root).toBe(Note.E)
    expect(em.type).toBe(ChordType.Minor)

    expect(f.root).toBe(Note.F)
    expect(f.type).toBe(ChordType.Major)

    expect(g.root).toBe(Note.G)
    expect(g.type).toBe(ChordType.Major)
  })
})
