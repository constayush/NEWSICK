import React, { useEffect } from 'react'
import Sidebar from '../components/Sidebar'
import PlayerNav from '../components/PlayerNav'
import SpotifyWebApi from 'spotify-web-api-js'
import { useState, useRef } from 'react'


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



    useEffect(() => {

        Spotify.setAccessToken(token)

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


        <div className='Home flex md:flex-row flex-col w-screen justify-center items-center'>


            <Sidebar HomePageDiv={HomePage.current} PlaylistPageDiv={PlaylistPage.current} userPfp={userPfp} userName={userName} playlists={playlists} />

            <div ref={HomePage} className=' w-full h-full pr-5 pl-5 md:pl-0 py-5 bg-black'>


                <div className='w-full h-full greygra rounded-lg flex justify-center items-center'>

                    <div className='w-100% h-fit md:w-[100%] md:h-full p-[2rem]'>

                        <input type='text' placeholder='Search...' value={searchText} onChange={(e) => { setSearchText(e.target.value) }} className='fatfont searchbar text-[1.5rem] md:text-[4rem] text-white '></input>
                        <hr className='mb-[1.2rem]' />




                    </div>


                </div>


            </div>





            <div ref={PlaylistPage} className='PlaylistPage w-full h-full pr-5 pl-5 md:pl-0 py-5 bg-black'>
                <div className='w-full h-full greygra rounded-lg flex justify-center items-center'>

                    <div className='w-100% h-fit md:w-[100%] md:h-full p-[2rem]'>


                        <div className='flex justify-center items-center flex-col gap-[1.2rem]'>



                            {playlists?.items.map((playlist) => {

                                return <div key={playlist.name} className='playlist-con  md:text-[2rem] text-white normalfont'>{playlist.name}</div>

                            })}

                        </div>

                    </div>

                </div>
            </div>

        </div>

        <PlayerNav currentPlayingTrackInfo={currentPlayingTrackInfo} totalDuration={totalDuration} />


    </>)
}

export default Home