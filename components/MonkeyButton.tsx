import React, { useEffect, useState } from 'react'

const frasesMacaque = [
  'Dar uma bananinha pro macaquinhos 🍌🍌',
  'Besar a testinha do macaquinho 💋💋',
  'Cherar suvaquinho do macaco 🐒🐒',
  'Lamber a orelha do macaques 😋😋',
  'Comer piolho da cabeça do filhotis 😈😈',
  'Besinho molhado no nariz do macaquinho 😠😠',
  'Fazer carinho nos pezino preto do macacos 🥰🥰',
  'Lamber os dedo sujo preto do pe do macaques 😘😘',
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
      className="w-full rounded-b-2xl bg-mnkButton px-5 py-2 text-[24px] font-bold text-font shadow-lg hover:bg-mnkButtonHover active:bg-mnkButtonClick"
    >
      {selectedFrase}
    </button>
  )
}

export default MonkeyButton
