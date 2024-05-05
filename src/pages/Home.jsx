import React, { useEffect } from 'react'
import Sidebar from '../components/Sidebar'
import PlayerNav from '../components/PlayerNav'
import SpotifyWebApi from 'spotify-web-api-js'
import { useState } from 'react'
function Home(props) {
    window.location.hash = ''



    const token = props.token
    const Spotify = new SpotifyWebApi();
    let [userName, setUserName] = useState(null)
    let [userPfp, setUserPfp] = useState(null)
    let [playlists, setPlaylists] = useState(null)

let [currentPlayingTrackInfo , setCurrentPlayingTrackInfo] = useState(null);
    
    useEffect(() => {

        Spotify.setAccessToken(token)



        Spotify.getMe().then((user) => {

            setUserName(user.display_name)
            setUserPfp(user.images[1].url ? user.images[1].url : "not available")

        })

        Spotify.getUserPlaylists().then((UserPlaylists) => {

            setPlaylists(UserPlaylists)

        })


    }, [])


    useEffect(() => {

        Spotify.getMyCurrentPlayingTrack().then((track) => {
            setCurrentPlayingTrackInfo(track)
console.log(track)
        })

    }, [])











    return (<>


        <div className='Home flex md:flex-row flex-col w-screen justify-center items-center'>


            <Sidebar userPfp={userPfp} userName={userName} playlists={playlists} />

            <div className=' w-full h-full pr-5 pl-5 md:pl-0 py-5 bg-black'>


                <div className='w-full h-full greygra rounded-lg flex justify-center items-center'>

                    <div className='md:w-[50%] md:h-full p-[2rem]'>

                        <h1 className='fatfont text-[4rem] text-white '>Playlists</h1>
                        <hr className='mb-[1.2rem]' />

                        <div className='flex justify-center items-center flex-col gap-[1.2rem]'>



                            {playlists?.items.map((playlist) => {

                                return <div className='playlist-con text-[2rem] text-white normalfont'>{playlist.name}</div>


                            })}

                        </div>


                    </div>
                    <div className='md:w-[50%] md:h-full bg-[blue]'></div>

                </div>


            </div>


        </div>

        <PlayerNav currentPlayingTrackInfo={currentPlayingTrackInfo} />


    </>)
}

export default Home