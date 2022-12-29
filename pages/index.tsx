import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import MonkeyButton from '../components/MonkeyButton'
import MonkeyImage from '../components/MonkeyImage'
import ProgressBar from '../components/ProgressBar'

const Home = () => {
  const [barPct, setBarPct] = useState(0)

  useEffect(() => {
    const tmp = setInterval(() => {
      setBarPct((lastPct) => Math.max(lastPct - 0.1, 0))
    }, 15)
    return () => {
      clearInterval(tmp)
    }
  }, [])
  return (
    <div className="flex h-full min-h-screen w-full flex-col bg-mainbg">
      <div className="flex w-full items-center justify-center bg-mnkButton py-2 font-bold">
        <h1 className="italic text-font">Macaco simulator</h1>
      </div>
      <div className="flex h-full w-full flex-col items-center gap-2 p-2 sm:gap-10 sm:p-10">
        <div className="h-[300px] w-full rounded-2xl relative">
          <MonkeyImage pct={barPct} />
        </div>
        <div className="flex w-full max-w-[400px] flex-col gap-2">
          <ProgressBar pct={barPct} />
          <MonkeyButton
            onClick={() => {
              setBarPct((oldPct) => Math.min(oldPct + 20, 100))
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default Home
