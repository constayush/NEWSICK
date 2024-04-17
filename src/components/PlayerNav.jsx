import React from 'react'
import playIcon from  '../../public/asset/playbtn.svg'
import nextIcon from  '../../public/asset/nextbtn.svg'
import loopIcon from  '../../public/asset/loopbtn.svg'
import repeatIcon from  '../../public/asset/repeatbtn.svg'
import shuffleIcon from  '../../public/asset/shufflebtn.svg'
import previousIcon from '../../public/asset/prvbtn.svg'

function PlayerNav() {
  return (
    <div className='playerNav w-screen h-[4.5rem] bg-[#030303] flex justify-center items-center gap-[2rem]'>


<button><img className='w-[40px] h-[40px]' src={shuffleIcon} /></button>
<button><img className='w-[40px] h-[40px]' src={previousIcon} /></button>
<button><img className='w-[40px] h-[40px]' src={playIcon} /></button>
<button><img className='w-[40px] h-[40px]' src={nextIcon} /></button>
<button><img className='w-[40px] h-[40px]' src={repeatIcon} /></button>




    </div>
  )
}

export default PlayerNav