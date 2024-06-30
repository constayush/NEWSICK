import React, { useEffect } from 'react'
import Sidebar from '../components/Sidebar'
import PlayerNav from '../components/PlayerNav'
import SpotifyWebApi from 'spotify-web-api-js'
import { useState, useRef } from 'react'

import listIcon from '../../public/asset/listIcon.svg'
import searchIcon from '../../public/asset/searchIcon.svg'
import homeIcon from '../../public/asset/homeIcon.svg'
function Home(props) {




    window.location.hash = ''//removing token form url



    const token = props.token
    const Spotify = new SpotifyWebApi();
    let [userName, setUserName] = useState(null)
    let [userPfp, setUserPfp] = useState(null)
    let [playlists, setPlaylists] = useState(null)
    let [totalDuration, setTotalDuration] = useState(0);
    let [currentPlayingTrackInfo, setCurrentPlayingTrackInfo] = useState(null);
    let [searchText, setSearchText] = useState("")
    let totalDurationInSec = 0
    let HomePage = useRef(null);
    let PlaylistPage = useRef(null);
    let searchPage = useRef(null);
    let [newReleases, setNewReleases] = useState(null)

    useEffect(() => {

        Spotify.setAccessToken(token)


        Spotify.getNewReleases().then((newRel) => {
            console.log(newRel)
            setNewReleases(newRel.albums.items);
            console.log(newReleases)

        })




        Spotify.getMe().then((user) => {




            setUserName(user.display_name)
            setUserPfp(user.images[1].url ? user.images[1].url : "not available")

        })

        Spotify.getUserPlaylists().then((UserPlaylists) => {


            setPlaylists(UserPlaylists)

        })

        Spotify.getMyCurrentPlayingTrack().then((track) => {

            setCurrentPlayingTrackInfo(track)
            setTotalDuration(currentPlayingTrackInfo?.item?.duration_ms)

        })


    }, [])
















    return (<>


        {/* <div className='Home h-[85dvh] w-[100dvw] flex md:flex-row flex-col justify-center items-center'>


            <Sidebar SearchPageDiv={searchPage.current} HomePageDiv={HomePage.current} PlaylistPageDiv={PlaylistPage.current} userPfp={userPfp} userName={userName} playlists={playlists} />


            <div ref={HomePage} className=' w-full h-full pr-5 pl-5 md:pl-0 py-5 bg-black'>
                <div className='w-full h-full greygra rounded-lg flex justify-center items-center'>

                    <div className='w-100% h-fit md:w-[100%] md:h-full p-[2rem]'>

                        <h1 className='playlisttext text-[#a9d4ff] text-[3.5rem] tracking-wide fatfont'>Home</h1>

                        <hr className='mb-[2rem]' />
                        <div className='flex justify-center items-center flex-row gap-[3rem] '>


                            <div className='NewRel bg-slate-500 h-[8rem] w-[8rem] rounded-lg'></div>

                            <div className='NewRel bg-slate-500 h-[8rem] w-[8rem] rounded-lg'></div>

                            <div className='NewRel bg-slate-500 h-[8rem] w-[8rem] rounded-lg'></div>


                        </div> 

                    </div>

                </div>
            </div>


            <div ref={searchPage} className='searchPage w-full h-full pr-5 pl-5 md:pl-0 py-5 bg-black'>


                <div className='w-full h-full greygra rounded-lg flex justify-center items-center'>

                    <div className='w-100% h-fit md:w-[100%] md:h-full p-[2rem]'>

                        <input type='text' placeholder='Search...' value={searchText} onChange={(e) => { setSearchText(e.target.value) }} className='fatfont tracking-wider searchbar text-[1.5rem] md:text-[3.5rem] text-white '></input>
                        <hr className='mb-[1.2rem]' />




                    </div>


                </div>


            </div>


            <div ref={PlaylistPage} className='PlaylistPage w-full h-full pr-5 pl-5 md:pl-0 py-5 bg-black '>
                <div className='w-full h-full greygra rounded-lg flex justify-center items-center overflow-y-auto'>

                    <div className='w-100% h-fit md:w-[100%] md:h-full p-[2rem] '>

                        <h1 className='playlisttext text-[#a9d4ff] text-[3.5rem] tracking-wide fatfont'>Playlists</h1>

                        <hr className='mb-[2rem]' />
                        <div className='flex justify-center h-max items-center flex-col gap-[1.2rem] '>



                            {playlists?.items.map((playlist) => {

                                return <div key={playlist.name} className='playlist-con  md:text-[1.5rem] text-white normalfont'>{playlist.name}</div>

                            })}



                        </div>

                    </div>

                </div>
            </div>




        </div> */}




        {/* <div className='w-[100vw] h-[100dvh] '>


            <div className='HeroContainer flex flex-col md:flex-row w-full h-[85%] bgone'>



               <Sidebar SearchPageDiv={searchPage.current} HomePageDiv={HomePage.current} PlaylistPageDiv={PlaylistPage.current} userPfp={userPfp} userName={userName}/>



                <main className='MainPage bg-red-300   flex  h-full md:h-full w-full overflow-auto'></main>



            </div>

            <PlayerNav currentPlayingTrackInfo={currentPlayingTrackInfo} totalDuration={totalDuration} />


        </div> */}






        <div className='w-full h-[100dvh] flex flex-col bgone '>



            {/* ////////////////////////////////////////////////////////////////////////  MAIN   //////////////////////////// */}


            <div className=' flex lg:flex-row flex-col w-full flex-grow h-auto'>

                {/* /////////////////////////// NAVBAR //////////////////////////////// */}


                <nav className='side p-4 flex flex-col gap-4 justify-center items-center overflow-auto'>




                    <div className='flex items-center justify-center flex-row lg:flex-col gap-2 '>
                        <img src={userPfp} className='w-[2rem] h-[2rem] md:w-[3.5rem] md:h-[3.5rem] lg:w-[10rem] lg:h-[10rem] rounded-full' />
                        <h1 className='text-[1rem]  lg:text-[1.5rem] font-bold text-white normalfont'>{userName}</h1>
                    </div>




<div className='flex flex-row lg:flex-col'>
                    <button className='bn632-hover bn25  sidebarbtns w-[4rem] h-[2rem] md:w-[10rem]  md:h-[2rem] '><div className=' w-full  icoANiMATIONOnHover justify-center items-center flex gap-2 md:gap-6'><p className='hidden md:block'>Home  </p>   <img className=' w-[1.3rem] h-[1.3rem]' src={homeIcon}></img>  </div></button>
                    <button className='bn632-hover bn25  sidebarbtns w-[4rem] h-[2rem] md:w-[10rem]  md:h-[2rem] '><div className=' w-full  icoANiMATIONOnHover justify-center items-center flex gap-2 md:gap-6'><p className='hidden md:block'>Search  </p> <img className=' w-[1.3rem] h-[1.3rem]' src={searchIcon}></img>  </div></button>
                    <button className='bn632-hover bn25  sidebarbtns w-[4rem] h-[2rem] md:w-[10rem]  md:h-[2rem] '><div className=' w-full  icoANiMATIONOnHover justify-center items-center flex gap-2 md:gap-6'><p className='hidden md:block'>Playlist</p> <img className=' w-[1.3rem] h-[1.3rem]' src={listIcon}></img>   </div></button>
</div>


                </nav>

                {/* /////////////////////////// HERO //////////////////////////////// */}

                <div className='flex-grow'></div>


            </div>


            {/* ////////////////////////////////////////////////////////////////////////////////// PLAYER ///////////////////////// */}


            <div className='w-full h-auto bg-[#4e4e4e] flex justify-center items-center overflow-auto'>


                <input className='m-4' type='range'></input>


            </div>









        </div>







    </>)
}

export default Home
