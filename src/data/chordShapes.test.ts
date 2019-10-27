import { testTriadGroup, expectChord } from '../test/testUtils'
import * as minTriads from './minorTriads'
import * as majTriads from './minorTriads'
import * as dimTriads from './diminishedTriads'
import * as majCaged from './majorCagedChords'

describe('Chords', () => {
  describe('minor triads', () => {
    testTriadGroup('EAD Strings', minTriads.EAD)
    testTriadGroup('ADG Strings', minTriads.ADG)
    testTriadGroup('DGB Strings', minTriads.DGB)
    testTriadGroup('GBE Strings', minTriads.GBE)
  })
  describe('major triads', () => {
    testTriadGroup('EAD Strings', majTriads.EAD)
    testTriadGroup('ADG Strings', majTriads.ADG)
    testTriadGroup('DGB Strings', majTriads.DGB)
    testTriadGroup('GBE Strings', majTriads.GBE)
  })
  describe('diminished triads', () => {
    testTriadGroup('EAD Strings', dimTriads.EAD)
    testTriadGroup('ADG Strings', dimTriads.ADG)
    testTriadGroup('DGB Strings', dimTriads.DGB)
    testTriadGroup('GBE Strings', dimTriads.GBE)
  })
  describe('major CAGED', () => {
    it('should represent a correct "C" shape', () => expectChord(majCaged.cShape))
    it('should represent a correct "A" shape', () => expectChord(majCaged.aShape))
    it('should represent a correct "G" shape', () => expectChord(majCaged.gShape))
    it('should represent a correct "E" shape', () => expectChord(majCaged.eShape))
    it('should represent a correct "D" shape', () => expectChord(majCaged.dShape))
  })
})
