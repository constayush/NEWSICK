import React from 'react'
import Sidebar from '../components/Sidebar'
import PlayerNav from '../components/PlayerNav'

function Home() {
    window.location.hash = ''
    return (<>


        <div className='Home flex md:flex-row flex-col w-screen justify-center items-center'>


            <Sidebar />

            <div className=' w-full h-full pr-5 pl-5 md:pl-0 py-5 bg-black'>


                <div className='w-full h-full greygra rounded-lg'></div>


            </div>


        </div>

        <PlayerNav/>


    </>)
}

export default Home