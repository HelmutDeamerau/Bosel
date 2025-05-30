import Image from 'next/image'
import React from 'react'

const ContentAussenanlage = () => {
  return (
    <div className='text-white gap-10 flex flex-col '>
      <div>
        <h1 className='text-gold text-xl mb-4 font-semibold'>Allwetterpaddocks</h1>
        <div className='flex items-center justify-between gap-5 md:flex-row flex-col-reverse'>
       
          <p>
          Mehrere Paddocks verschiedener Größen, ermöglichen den Pferden bei fast jedem Wetter Aufenthalt und freie Bewegung an der frischen Luft, Kontakt zu ihren Artgenossen, Entspannungen und Erholungen.
          </p>
        </div>
      </div>

      <div>
        <h1 className='text-gold text-xl mb-4 font-semibold'>Sommerweiden</h1>
        <p>
        Die Reitanlage ist umgeben von großzügig, arrondierenden Koppeln. Diese werden sorgfältig gepflegt, um unseren Pferden in kleinen Herdenverbänden eine möglichst lange Weidesaison zu ermöglichen
        </p>
      </div>
    </div>
  )
}

export default ContentAussenanlage 