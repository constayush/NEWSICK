import React, { useState } from 'react'
import listIcon from '../../public/asset/listIcon.svg'
import searchIcon from '../../public/asset/searchIcon.svg'
function Sidebar(props) {



  let [isMenuClicked, setIsMenuClicked] = useState(false);



  function toggleMenu() {

    setIsMenuClicked(!isMenuClicked)

  
  }

function handleLoadHome (){
props.PlaylistPageDiv.style.display = "none"
props.HomePageDiv.style.display = "block"

console.log(props)

}
function handleLoadPlaylist (){

  props.PlaylistPageDiv.style.display = "block"
  props.HomePageDiv.style.display = "none"
  
}







  return (<>

    <div className='Sidebar w-full h-[6.5rem] z-0  md:w-[28rem] md:h-full bg-black py-5 px-5'>


      <div className='w-full h-full greygra2 rounded-lg flex flex-row md:flex-col  p-[2rem] justify-between md:justify-center items-center gap-[2rem]' >

        <img src={props.userPfp} className='w-[2.5rem] h-[2.5rem] md:w-[12rem] md:h-[12rem] rounded-full' />
        <h1 className='text-[1.5rem] md:text-[2rem] text-white normalfont'>{props.userName}</h1>


        <div className='hidden md:flex flex-col '>
          <button onClick={handleLoadHome} className='bn632-hover bn25  sidebarbtns w-[15rem] h-[2rem]  '><div className=' w-full  icoANiMATIONOnHover justify-center items-center flex gap-6'><p>Home  </p><img className=' w-[1.3rem] h-[1.3rem]' src={searchIcon}></img>  </div></button>
          <button onClick={handleLoadPlaylist} className='bn632-hover bn25  sidebarbtns w-[15rem] h-[2rem]  '><div className=' w-full  icoANiMATIONOnHover justify-center items-center flex gap-6'><p>Playlist</p> <img className='w-[1.3rem] h-[1.3rem]' src={listIcon}></img>   </div></button>
        </div>

        <label className='md:hidden visible' onClick={toggleMenu} for="check">
          <input type="checkbox" id="check" />
          <span></span>
          <span></span>
          <span></span>
        </label>

        


      </div>


    </div>
  </>)
}

export default Sidebar



















