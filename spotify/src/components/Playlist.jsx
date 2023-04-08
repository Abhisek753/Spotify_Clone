import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const RightSidebarWrapper = styled.div`
  background-color: #fff;
  background-color:teal;
color:white;
display:flex;
height:100%;
width;100%;
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

function RightSidebar({ playSong }) {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    // Fetch the list of songs from an API
    fetch('/api/songs')
      .then(response => response.json())
      .then(data => setSongs(data));
  }, []);

  return (
    <RightSidebarWrapper>
      <h2>Songs hangama</h2>
      <SongList>
        {songs.map(song => (
          <SongItem key={song.id} onClick={() => playSong(song)}>
            <img src={song.image} alt={song.title} />
            <div className="song-details">
              <h3>{song.title}</h3>
              <p>{song.artist}</p>
            </div>
            <div className="song-duration">{song.duration}</div>
          </SongItem>
        ))}
        <div>hii sarukh</div>
      </SongList>
    </RightSidebarWrapper>
  );
}

export default RightSidebar;