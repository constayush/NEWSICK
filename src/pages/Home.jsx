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

    useEffect(() => {

        Spotify.setAccessToken(token)
        Spotify.getMe().then((user) => {
            setUserName(user.display_name)
            setUserPfp(user.images[1].url ? user.images[1].url : "not available")
        })

        Spotify.getUserPlaylists(token).then((playlists) => {
           console.log(playlists)
        })
        console.log(Spotify)

    })














    return (<>


        <div className='Home flex md:flex-row flex-col w-screen justify-center items-center'>


            <Sidebar userPfp={userPfp} userName={userName} />

            <div className=' w-full h-full pr-5 pl-5 md:pl-0 py-5 bg-black'>


                <div className='w-full h-full greygra rounded-lg'></div>


            </div>


        </div>

        <PlayerNav />


    </>)
}

export default Home