import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { useStateProvider } from '../utils/StateProvader';
import SongPlay from './SongPlay';
const RightSidebarWrapper = styled.div`

  background-color:#1d1406;
  color:white;
  display:flex;
  flex-direction:column;
  position: absolute;
  height: 924px;
  border:1px solid teal;
  aline-items:center;
  .search{
    height: 48px;
    width: 400px;
  background-color:#1d1406;
   margin:auto;
   border-radius: 8px;
    padding: 8px 16px 8px 16px;
    justify: space-between;
    

  }
  h1{
    height: 36px;
    border-radius: nullpx;
}`;


const SongList = styled.ul`
display:flex;
flex-direction:column;
aline-items:center;

  
`;

const SongItem = styled.li`
  display: flex;
align-items: center;
cursor: pointer;
height: 88px;
width: 440px;
padding:10px;
border-radius: 8px;
justify-content:space-between;

}
img {
height: 48px;
width: 48px;
left: 0px;
top: 0px;
border-radius: 56px;
 }`;
  const Frame=styled.div`
display: flex;
width:60%;
align-items: center;
.song_details{
margin-left:15%;
}

p{

margin-top:-8px;
}
`

function RightSidebar({ Player,handleSave }) {
  const [songs, setSongs] = useState([]);
  const [data, dispatch] = useStateProvider();
  // let handelplayer=(song)=>{
  //   console.log(song)
  
  // }

  const getData = (playlistId) => {
    const query = `
      query GetSongs($playlistId: Int!) {
        getSongs(playlistId: $playlistId) {
          _id
          artist
          title
          url
          photo
          duration
        }
      }
    `;
    
    fetch("https://api.ss.dev/resource/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query,
        variables: {
          playlistId,
        },
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data.data.getSongs)
        setSongs(data.data.getSongs)
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    const playlistId = 1; 
    getData(playlistId);
  
  }, []);

  

  return (
    <RightSidebarWrapper>
     
      <h1>For You</h1>
      <input type="search" className='search' placeholder='Search Song, Artist' />
      <SongList>
        {songs && songs.map(song => (
          <SongItem key={song._id} onClick={()=>handleSave(song)} >
            <Frame >
            <img src={song.photo} alt={song.title} />
            <div className="song_details">
              <h3>{song.title}</h3>
              <p>{song.artist}</p>
            </div>
            </Frame>
            <div className="song-duration">{(song.duration)/100}</div>
          </SongItem>
        ))}
      </SongList>
    </RightSidebarWrapper>
  );
}

export default RightSidebar;