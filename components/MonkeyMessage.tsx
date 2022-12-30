import React from 'react'
import { monkeyHappyness } from './data'

const MonkeyMessage = ({ pct }: { pct: number }) => {
  return (
    <>
      {monkeyHappyness(pct) === 't1' && <h3>muto triste</h3>}
      {monkeyHappyness(pct) === 't2' && <h3>tistre</h3>}
      {monkeyHappyness(pct) === 'n1' && <h3>macaco neutro</h3>}
      {monkeyHappyness(pct) === 'n2' && <h3>quasi feliz</h3>}
      {monkeyHappyness(pct) === 'f1' && <h3>felizi</h3>}
      {monkeyHappyness(pct) === 'f2' && <h3>muto mto felizi dimais</h3>}
    </>
  )
}

export default MonkeyMessage
