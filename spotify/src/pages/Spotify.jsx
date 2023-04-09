import React, { useState } from 'react'
import styled from 'styled-components'
import Side_Menu from '../components/Side_Menu'
import RightSidebar from '../components/Playlist'
import SongPlay from '../components/SongPlay'

const Spotify = () => {
  const [id,setId] = useState()
  const [passing,setPassing]=useState()
  
  const handleSave=(id)=>{
   setId(id);
  }
  // console.log(id)
 const handleData=(data)=>{
    //  setData(data)
    const passingsong=data.data.getSongs
    setPassing(passingsong)

    //  console.log(passingsong,"yahi hai without")

 }
//  console.log(passing,"yahi hai")

  return (
    <Container>
      <div className="spotify_body">
       <div className="side_menu">
            <Side_Menu/>
       </div>
       <div className="rightsidebar">
            <RightSidebar handleSave={handleSave} onData={handleData}/>
       </div>
       <div className="player">
       <SongPlay id={id} passing={passing} />
       {/* <PlaySong/> */}
       </div>
    </div>
       
    </Container>
  )
}

export default Spotify
let Container=styled.div`
height:766px;
overflow:hidden;
display:grid;
.spotify_body{
display:grid;
grid-template-columns:18.38% 29.10% 52.51%;

}
.side_menu {
  display:flex;
  width:100%;
 background-color:#1d1406;
}

.rightsidebar{
  width:100%;
 background-color:#1d1406;
}
`