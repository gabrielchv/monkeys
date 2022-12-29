import React, { useEffect, useState } from 'react'

const frasesMacaque = [
  '🍌 Dar uma banana 🍌',
  '💋 Besar a testinha do macaquinho 💋',
]

const randomIndex = () => Math.floor(Math.random() * frasesMacaque.length)

const MonkeyButton = ({ onClick }: { onClick?: () => void }) => {
  const [selectedFraseIndex, setSelectedFraseIndex] = useState(randomIndex())
  const [selectedFrase, setSelectedFrase] = useState(
    frasesMacaque[selectedFraseIndex],
  )

  useEffect(() => {
    setSelectedFrase(frasesMacaque[selectedFraseIndex])
  }, [selectedFraseIndex])

  return (
    <button
      onClick={() => {
        setSelectedFraseIndex((oldIndex) => {
          let selectedRandomIndex = randomIndex()
          while (selectedRandomIndex === oldIndex) {
            selectedRandomIndex = randomIndex()
          }
          return selectedRandomIndex
        })
        if (onClick) onClick()
      }}
      className="w-full shadow-lg rounded-2xl bg-mnkButton px-5 py-2 font-bold text-font hover:bg-mnkButtonHover active:bg-mnkButtonClick"
    >
      {selectedFrase}
    </button>
  )
}

export default MonkeyButton
