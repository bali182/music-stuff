import { Note } from '../model/models'
import { colors } from '../Ux/colors'

export const noteColors = {
  [Note.C]: colors.red,
  [Note.CSharp]: colors.green,
  [Note.D]: colors.blue,
  [Note.DSharp]: colors.orange,

  [Note.E]: colors.darkRed,
  [Note.F]: colors.darkBlue,
  [Note.FSharp]: colors.darkPurple,
  [Note.G]: colors.veryDarkRed,
  [Note.GSharp]: colors.purple,
  [Note.A]: colors.darkGreen,
  [Note.ASharp]: colors.buttonDarkGray,
  [Note.B]: colors.brown,
}
