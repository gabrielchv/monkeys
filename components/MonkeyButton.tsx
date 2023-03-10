import React, { useEffect, useState } from 'react'

const frasesMacaque = [
  'Dar uma bananinha pro macaquinhos ๐๐',
  'Besar a testinha do macaquinho ๐๐',
  'Cherar suvaquinho do macaco ๐๐',
  'Lamber a orelha do macaques ๐๐',
  'Comer piolho da cabeรงa do filhotis ๐๐',
  'Besinho molhado no nariz do macaquinho ๐ ๐ ',
  'Fazer carinho nos pezino preto do macacos ๐ฅฐ๐ฅฐ',
  'Lamber os dedo sujo preto do pe do macaques ๐๐',
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
