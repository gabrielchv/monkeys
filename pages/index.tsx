import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { monkeyHappyness } from '../components/data'
import MonkeyButton from '../components/MonkeyButton'
import MonkeyImage from '../components/MonkeyImage'
import MonkeyMessage from '../components/MonkeyMessage'
import ProgressBar from '../components/ProgressBar'

const Home = () => {
  const [barPct, setBarPct] = useState(0)

  useEffect(() => {
    const tmp = setInterval(() => {
      setBarPct((lastPct) => Math.max(lastPct - 0.2, 0))
    }, 25)
    return () => {
      clearInterval(tmp)
    }
  }, [])
  return (
    <div className="flex h-full w-full flex-col">
      <div className="flex w-full items-center justify-center bg-mnkButton py-2 font-bold">
        <h1 className="italic text-font">Macaco simulator</h1>
      </div>
      <div className="flex h-full w-full flex-col items-center justify-center gap-2 p-2">
        <div className="flex max-w-[390px] flex-col items-center gap-2">
          <MonkeyMessage pct={barPct} />
          <div className="relative h-[300px] w-full rounded-t-2xl shadow-lg">
            <MonkeyImage pct={barPct} />
          </div>
          <div className="flex w-full max-w-[400px] flex-col gap-2">
            <ProgressBar pct={barPct} />
            <MonkeyButton
              onClick={() => {
                setBarPct((oldPct) => Math.min(oldPct + 4, 100))
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
