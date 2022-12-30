import Image from 'next/image'
import React, { memo } from 'react'
import { monkeyHappyness } from './data'

const imgClass = 'rounded-t-2xl h-[300px]'

const Monkeyimg = ({ pct }: { pct: number }) => {
  return (
    <>
      {monkeyHappyness(pct) === 't1' && (
        <Image
          loading="eager"
          priority
          fill
          src="/static/macacos/tmacacodemamadeiraMUITOFOFO.jpg"
          alt="MACACO"
          className={imgClass}
        />
      )}

      {monkeyHappyness(pct) === 't2' && (
        <Image
          loading="eager"
          priority
          fill
          src="/static/macacos/tmacacodormindo.jpg"
          alt="MACACO"
          className={imgClass}
        />
      )}

      {monkeyHappyness(pct) === 'n1' && (
        <Image
          loading="eager"
          priority
          fill
          src="/static/macacos/nmacacosentado.jpg"
          alt="MACACO"
          className={imgClass}
        />
      )}

      {monkeyHappyness(pct) === 'n2' && (
        <Image
          loading="eager"
          priority
          fill
          src="/static/macacos/nmacacodeblusa.jpg"
          alt="MACACO"
          className={imgClass}
        />
      )}

      {monkeyHappyness(pct) === 'f1' && (
        <Image
          loading="eager"
          priority
          fill
          src="/static/macacos/fmacaconoiphone.jpg"
          alt="MACACO"
          className={imgClass}
        />
      )}

      {monkeyHappyness(pct) === 'f2' && (
        <Image
          loading="eager"
          priority
          fill
          src="/static/macacos/fsorrindodelado.jpg"
          alt="MACACO"
          className={imgClass}
        />
      )}
    </>
  )
}

export default memo(Monkeyimg)
