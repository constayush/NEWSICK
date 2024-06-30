import React, { useEffect } from 'react'

import SpotifyWebApi from 'spotify-web-api-js'
import { useState, useRef } from 'react'
import UserSelectedPages from '../components/UserSelectedPages'
import UserHomePage from './sub_pages/UserHomePage.jsx'
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
    let selectedPage = null;








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






    function handleNavBtn(btnSelected) {
selectedPage = btnSelected
console.log(selectedPage)



    }









    return (<>


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
                        <button onClick={ () =>  handleNavBtn('Home')}     className='bn632-hover bn25  sidebarbtns w-[4rem] h-[2rem] md:w-[10rem]  md:h-[2rem] '><div className=' w-full  icoANiMATIONOnHover justify-center items-center flex gap-2 md:gap-6'><p className='hidden md:block'>Home  </p>   <img className=' w-[1.3rem] h-[1.3rem]' src={homeIcon}></img>  </div></button>
                        <button onClick={ () =>  handleNavBtn('Search')}   className='bn632-hover bn25  sidebarbtns w-[4rem] h-[2rem] md:w-[10rem]  md:h-[2rem] '><div className=' w-full  icoANiMATIONOnHover justify-center items-center flex gap-2 md:gap-6'><p className='hidden md:block'>Search  </p> <img className=' w-[1.3rem] h-[1.3rem]' src={searchIcon}></img>  </div></button>
                        <button onClick={ () =>  handleNavBtn('Playlist')} className='bn632-hover bn25  sidebarbtns w-[4rem] h-[2rem] md:w-[10rem]  md:h-[2rem] '><div className=' w-full  icoANiMATIONOnHover justify-center items-center flex gap-2 md:gap-6'><p className='hidden md:block'>Playlist</p> <img className=' w-[1.3rem] h-[1.3rem]' src={listIcon}></img>   </div></button>
                    </div>


                </nav>

                {/* /////////////////////////// HERO //////////////////////////////// */}

                <div className='flex-grow'>



                    {selectedPage ? <UserHomePage /> : <UserSelectedPages selectedPage={selectedPage} />}


                </div>


            </div>


            {/* ////////////////////////////////////////////////////////////////////////////////// PLAYER ///////////////////////// */}


            <div className='w-full h-auto bg-[#4e4e4e] flex justify-center items-center overflow-x-auto'>


                <input className='m-4' type='range'></input>


            </div>


        </div>


    </>)
}

export default Home
