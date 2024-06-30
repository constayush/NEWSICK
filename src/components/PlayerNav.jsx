import React, { useEffect, useState } from 'react'
import playIcon from '../../public/asset/playbtn.svg'
import nextIcon from '../../public/asset/nextbtn.svg'
import loopIcon from '../../public/asset/loopbtn.svg'
import repeatIcon from '../../public/asset/repeatbtn.svg'
import shuffleIcon from '../../public/asset/shufflebtn.svg'
import previousIcon from '../../public/asset/prvbtn.svg'

function PlayerNav({currentPlayingTrackInfo}) {


let [ timePassed , setTimePassed] = useState("0:00")



useEffect(()=>{


 
})

  return (
    
    <div className='playerNav w-full h-[15%] PLAYER overflow-auto  flex flex-col md:flex-row justify-evenly items-center p-[2rem]'>





    </div>
  )
}

export default PlayerNav