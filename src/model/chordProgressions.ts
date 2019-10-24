import { ChordProgression, KeyType } from './models'

// Major only progressions
export const I_IV_I_V: ChordProgression = {
  name: 'I-IV-I-V',
  keyType: KeyType.Ionian,
  scaleDegrees: [0, 3, 0, 4],
}

export const I_IV_V_V: ChordProgression = {
  name: 'I-IV-V-V',
  keyType: KeyType.Ionian,
  scaleDegrees: [0, 3, 4, 4],
}

export const I_IV_V_IV: ChordProgression = {
  name: 'I-IV-V-IV',
  keyType: KeyType.Ionian,
  scaleDegrees: [0, 3, 4, 3],
}

export const majorChordsOnlyProgressions = [I_IV_I_V, I_IV_V_V, I_IV_V_IV]

// Minor only progressions
export const i_iv_i_v: ChordProgression = {
  name: 'i-iv-i-v',
  keyType: KeyType.Aeolian,
  scaleDegrees: [0, 3, 0, 4],
}

export const i_iv_v_v: ChordProgression = {
  name: 'i-iv-v-v',
  keyType: KeyType.Aeolian,
  scaleDegrees: [0, 3, 4, 4],
}

export const minorChordsOnlyProgressions = [i_iv_i_v, i_iv_v_v]

// Mixed progressions
export const I_V_vi_IV: ChordProgression = {
  name: 'I–V–vi–IV',
  keyType: KeyType.Ionian,
  scaleDegrees: [0, 3, 5, 4],
}

export const I_IV_ii_V: ChordProgression = {
  name: 'I-IV-ii-V',
  keyType: KeyType.Ionian,
  scaleDegrees: [0, 3, 1, 4],
}

export const i_VI_III_VII: ChordProgression = {
  name: 'i-VI-III-VII',
  keyType: KeyType.Aeolian,
  scaleDegrees: [0, 5, 2, 6],
}

export const i_III_vi_III: ChordProgression = {
  name: 'i-III-vi-III',
  keyType: KeyType.Aeolian,
  scaleDegrees: [0, 2, 4, 2],
}

export const mixedChordProgressions = [I_V_vi_IV, I_IV_ii_V, i_VI_III_VII, i_III_vi_III]
