import { getDistanceBetweenNotes } from './getDistanceBetweenNotes'
import { Note } from './models'

describe('getDistanceBetweenNodes', () => {
  it('should tell proper distance between nodes', () => {
    expect(getDistanceBetweenNotes(Note.C, Note.D)).toBe(2)
    expect(getDistanceBetweenNotes(Note.C, Note.E)).toBe(4)
    expect(getDistanceBetweenNotes(Note.C, Note.F)).toBe(5)
    expect(getDistanceBetweenNotes(Note.C, Note.G)).toBe(7)
    expect(getDistanceBetweenNotes(Note.C, Note.A)).toBe(9)
    expect(getDistanceBetweenNotes(Note.C, Note.B)).toBe(11)
  })
})
