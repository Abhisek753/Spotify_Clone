import React, { useState } from 'react'
import styled from 'styled-components'
import Side_Menu from '../components/Side_Menu'
import RightSidebar from '../components/Playlist'
import SongPlay from '../components/SongPlay'

const Spotify = () => {
  const [song,setSong] = useState()
  const handleSave=(song)=>{
    console.log({song})
    setSong(song);
  }

  return (
    <Container>
      <div className="spotify_body">
       <div className="side_menu">
            <Side_Menu/>
       </div>
       <div className="rightsidebar">
            <RightSidebar handleSave={handleSave} />
       </div>
       <div className="player">
       <SongPlay song={song}/>
       {/* <PlaySong/> */}
       </div>
    </div>
       
    </Container>
  )
}

export default Spotify
let Container=styled.div`
border:3px solid red;
height:100%;
overflow:hidden;
display:grid;
.spotify_body{
display:grid;
grid-template-columns:18.38% 29.10% 52.51%;

}
.side_menu {
  display:flex;
  width:100%;
  // flex-direction:column;
  border 2px solid pink;
background-color:#1d1406;



 }
.rightsidebar{
  border 2px solid green

}
.player{
  border 2px solid green
}

`