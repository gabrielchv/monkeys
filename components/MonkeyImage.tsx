import Image from 'next/image'
import React from 'react'

const f1 = 'fmacaconoiphone.jpg'
const f2 = 'fsorrindodelado.jpg'
const n1 = 'nmacacosentado.jpg'
const n2 = 'nmacacodeblusa.jpg'
const t1 = 'tmacacodemamadeiraMUITOFOFO.jpg'
const t2 = 'tmacacodormindo.jpg'

const MonkeyImage = ({ pct }: { pct: number }) => {
  return (
    <Image
      src="/static/macacos/tmacacodemamadeiraMUITOFOFO.jpg"
      alt="MACACO"
      fill
    />
  )
}

export default MonkeyImage
