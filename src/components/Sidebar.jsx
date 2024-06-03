import React from 'react'

function Sidebar(props) {

  return (
<div className='Sidebar w-full h-[6.5rem]  md:w-[28rem] md:h-full bg-black py-5 px-5'>


<div className='w-full h-full greygra2 rounded-lg flex flex-row md:flex-col  p-[2rem] justify-between md:justify-center items-center gap-[2rem]' >

<img src={props.userPfp} className='w-[2.5rem] h-[2.5rem] md:w-[12rem] md:h-[12rem] rounded-full' />
<h1 className='text-[1.5rem] md:text-[2rem] text-white normalfont'>{props.userName}</h1>




<button className='bn632-hover bn25  sidebarbtns '> Search</button>
<button className='bn632-hover bn25 sidebarbtns  '>Playlist</button>

</div>

  
</div>
  )
}

export default Sidebar