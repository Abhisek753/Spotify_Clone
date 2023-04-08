import React from 'react'
import styled from 'styled-components'
import Side_Menu from '../components/Side_Menu'
import Navbar from '../components/Navbar'
import Body from '../components/RightContainer'
import Footer from '../components/Footer'
import RightSidebar from '../components/Playlist'
import PlaySong from '../components/Playsong'

const Spotify = () => {
  return (
    <Container>
        <div className="spotify_body">
            <Side_Menu/>
            <RightSidebar/>
          <div className="body">
            <Navbar/>
             <div className="body_content">
                <PlaySong/>
             </div>
          </div>
        </div>
        <div className="spotify_footer">
            <Footer/>
        </div>
    </Container>
  )
}

export default Spotify
let Container=styled.div`
max-width:100vw;
max-height:100vh;
overflow:hidden;
display:grid;
grid-template-rows:85vh 15vh;
// background-color:red;
// background-color:brown;
.spotify_body{
    display:grid;
    grid-template-columns:15vw 20vw 40vw;
    height:100%;
    // width:100%;
    background:linear-gradient(transparent,rgba(0,0,0,1));
    background-color:#1d1406;
}

`