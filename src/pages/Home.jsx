import React from 'react'
import Sidebar from '../components/Sidebar'

function Home() {
    return (<>


        <div className='Home flex w-screen justify-center items-center'>


            <Sidebar />

            <div className=' w-full h-full pr-5  py-5 bg-black'>


                <div className='w-full h-full greygra rounded-lg'></div>


            </div>


        </div>

        <div className='playerNav w-screen h-[4.5rem]'></div>


    </>)
}

export default Home