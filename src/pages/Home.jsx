import React from 'react'
import Sidebar from '../components/Sidebar'

function Home() {
    return (<>


        <div className='Home flex md:flex-row flex-col w-screen justify-center items-center'>


            <Sidebar />

            <div className=' w-full h-full pr-5 pl-5 md:pl-0 py-5 bg-black'>


                <div className='w-full h-full greygra rounded-lg'></div>


            </div>


        </div>

        <div className='playerNav w-screen h-[4.5rem] bg-[#030303]'></div>


    </>)
}

export default Home