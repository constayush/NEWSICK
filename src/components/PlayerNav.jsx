import React from 'react'
import playIcon from '../../public/asset/playbtn.svg'
import nextIcon from '../../public/asset/nextbtn.svg'
import loopIcon from '../../public/asset/loopbtn.svg'
import repeatIcon from '../../public/asset/repeatbtn.svg'
import shuffleIcon from '../../public/asset/shufflebtn.svg'
import previousIcon from '../../public/asset/prvbtn.svg'

function PlayerNav() {
  return (
    <div className='playerNav w-screen  h-[7rem] greygra2 flex justify-evenly items-center p-[2rem]'>




      <div className='PlayerInfo flex justify-center items-center w-[25%] gap-6'>


        <img className='songCover h-[40px] w-[40px] border-white border-[1px] ' />

        <div className='songDetails text-[#c5c3c3]'>
          <h1 className='songName font-bold'>Song</h1>
          <p className='songArtist'>Artist</p>
        </div>


      </div>



      <div className='flex  flex-col justify-center items-center  w-[35%] gap-4'>

        <div className='flex justify-center items-center gap-5'>
          <button> <img className='w-[28px] h-[28px]' src={shuffleIcon} />      </button>
          <button> <img className='w-[28px] h-[28px]' src={previousIcon} />     </button>
          <button> <img className='w-[28px] h-[28px]' src={playIcon} />         </button>
          <button> <img className='w-[28px] h-[28px]' src={nextIcon} />         </button>
          <button> <img className='w-[28px] h-[28px]' src={repeatIcon} />       </button>
        </div>


        

        <div className='flex justify-center items-center w-full gap-[1rem] text-white'><p className='playtimepassed'>0:00</p>
          <input type='range' className='h-[1px] w-full'></input>
          <p className='playtimeleft'>0:00</p>
        </div>

      </div>




      <div className='volumeControlContainer w-[25%] flex justify-center items-center '>
        <input type='range'></input>

      </div>






    </div>
  )
}

export default PlayerNav