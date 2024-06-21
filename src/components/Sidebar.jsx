import React, { useState } from 'react'
import listIcon from '../../public/asset/listIcon.svg'
import searchIcon from '../../public/asset/searchIcon.svg'
import homeIcon from '../../public/asset/homeIcon.svg'
function Sidebar(props) {



  let [isMenuClicked, setIsMenuClicked] = useState(false);



  function toggleMenu() {

    setIsMenuClicked(!isMenuClicked)


  }

  function handleLoadHome() {
    props.PlaylistPageDiv.style.display = "none"
    props.HomePageDiv.style.display = "block"
    props.SearchPageDiv.style.display = "none"

    console.log(props)

  }
  function handleLoadPlaylist() {

    props.PlaylistPageDiv.style.display = "block"
    props.HomePageDiv.style.display = "none"
    props.SearchPageDiv.style.display = "none"

  }


function handleLoadSearch (){
  props.SearchPageDiv.style.display = "block"
    props.HomePageDiv.style.display = "none"
       props.PlaylistPageDiv.style.display = "none"
}




  return ( <nav className='Navbar   flex items-center justify-center flex-row md:flex-col flex-wrap grow-[1]  md:grow-[1] gap-4 p-2'>

    <div className='flex items-center justify-center flex-row md:flex-col gap-2'>
        <img src={props.userPfp} className='w-[2.5rem] h-[2.5rem] md:min-w-[12rem] md:min-h-[12rem] md:max-w-[13rem] md:max-h-[13rem] rounded-full' />
        <h1 className='text-[1.5rem] md:text-[1.5rem] font-bold text-white normalfont'>{props.userName}</h1>
    </div>


    <div className='hidden md:flex flex-col '>
        <button  className='bn632-hover bn25  sidebarbtns min-w-[10rem] max-w-[18rem] min-h-[2rem] max-h-[2rem] '><div className=' w-full  icoANiMATIONOnHover justify-center items-center flex gap-6'><p>Home  </p><img className=' w-[1.3rem] h-[1.3rem]' src={homeIcon}></img>  </div></button>
        <button  className='bn632-hover bn25  sidebarbtns min-w-[10rem] max-w-[18rem] min-h-[2rem] max-h-[2rem] '><div className=' w-full  icoANiMATIONOnHover justify-center items-center flex gap-6'><p>Search  </p><img className=' w-[1.3rem] h-[1.3rem]' src={searchIcon}></img>  </div></button>
        <button  className='bn632-hover bn25  sidebarbtns min-w-[10rem] max-w-[18rem] min-h-[2rem] max-h-[2rem] '><div className=' w-full  icoANiMATIONOnHover justify-center items-center flex gap-6'><p>Playlist</p> <img className='w-[1.3rem] h-[1.3rem]' src={listIcon}></img>   </div></button>
    </div>




</nav>)
}

export default Sidebar



















