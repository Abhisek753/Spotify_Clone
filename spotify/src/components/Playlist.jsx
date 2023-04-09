import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Player from './Playsong';
const RightSidebarWrapper = styled.div`
  background-color: #fff;
  background-color:teal;
  color:white;
  display:flex;
  height:100%;
  width:100%;
  flex-direction:column;
`;

const SongList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const SongItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  cursor: pointer;

  img {
    width: 20%;
    margin-right: 10px;
  }

  .song-details {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    h3 {
      margin: 0;
      font-size: 16px;
      font-weight: bold;
    }

    p {
      margin: 0;
      font-size: 14px;
    }
  }

  .song-duration {
    width: 15%;
    font-size: 14px;
    text-align: right;
  }
`;

function RightSidebar({ Player }) {
  const [songs, setSongs] = useState([]);

  const getData = (playlistId) => {
    const query = `
      query GetSongs($playlistId: Int!) {
        getSongs(playlistId: $playlistId) {
          _id
          artist
          title
          url
          photo
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
      <h2>Songs hangama</h2>
      <SongList>
        {songs && songs.map(song => (
          <SongItem key={song._id} onClick={() => <Player  url= {song.url} photo= "song.photo" artist="song.artist " title= "song.title"/>}>
            <img src={song.photo} alt={song.title} />
            <div className="song-details">
              <h3>{song.title}</h3>
              <p>{song.artist}</p>
            </div>
            <div className="song-duration">{song.duration}</div>
          </SongItem>
        ))}
      </SongList>
    </RightSidebarWrapper>
  );
}

export default RightSidebar;