import React, { useState } from 'react'
import listIcon from '../../public/asset/listIcon.svg'
import searchIcon from '../../public/asset/searchIcon.svg'
function Sidebar(props) {



let [isMenuClicked , setIsMenuClicked] = useState(false)



function toggleMenu (){

console.log(isMenuClicked)
  setIsMenuClicked(!isMenuClicked);
  

}










  return (
<div className='Sidebar w-full h-[6.5rem]  md:w-[28rem] md:h-full bg-black py-5 px-5'>


<div className='w-full h-full greygra2 rounded-lg flex flex-row md:flex-col  p-[2rem] justify-between md:justify-center items-center gap-[2rem]' >

<img src={props.userPfp} className='w-[2.5rem] h-[2.5rem] md:w-[12rem] md:h-[12rem] rounded-full' />
<h1 className='text-[1.5rem] md:text-[2rem] text-white normalfont'>{props.userName}</h1>


<div className='hidden md:flex flex-col '>
<button className='bn632-hover bn25  sidebarbtns w-[15rem] h-[2rem]  '><div className=' w-full  icoANiMATIONOnHover justify-center items-center flex gap-6'><p>Search  </p><img className=' w-[1.3rem] h-[1.3rem]' src={searchIcon}></img>  </div></button>  
<button className='bn632-hover bn25  sidebarbtns w-[15rem] h-[2rem]  '><div className=' w-full  icoANiMATIONOnHover justify-center items-center flex gap-6'><p>Playlist</p> <img className='w-[1.3rem] h-[1.3rem]' src={listIcon}></img>   </div></button> 
</div>

<label className='md:hidden visible' for="check">
      <input type="checkbox" id="check" onClick={toggleMenu}/> 
      <span></span>
      <span></span>
      <span></span>
</label>


</div>

  
</div>
  )
}

export default Sidebar