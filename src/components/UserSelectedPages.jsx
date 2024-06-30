import React from 'react'
import PlaylistPage from '../pages/sub_pages/PlaylistPage'
import SearchPage from '../pages/sub_pages/PlaylistPage'
import UserHomePage from '../pages/sub_pages/PlaylistPage'
function UserSelectedPages({selectedPage}) {


  if (selectedPage == 'Home'){

    return <UserHomePage/>
  }
  else if (selectedPage == 'Search'){

    return <SearchPage/>
  }
  else if (selectedPage == 'Playlist'){

    return <PlaylistPage/>
  }

  
}

export default UserSelectedPages