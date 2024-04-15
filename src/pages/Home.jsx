import React from 'react'
import Sidebar from '../components/Sidebar'

function Home() {
    return (<div>
        <div className='flex '>

            <div className=' sidebar w-[22rem]  bg-black'>Sidebar</div>

            <div className='flex flex-col w-full h-full justify-center items-center '>
                <div className='w-full h-[4.5rem] bg-gray-400 border-lime-800 border-[10px]'  ></div>

               <div className='w-full h-auto bg-red-500  border-lime-800 border-[10px]'></div> 
            </div>

        </div>

        <div className='w-full h-[4.5rem] bg-green-300'></div>

    </div>
    )
}

export default Home