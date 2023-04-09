import React, { useEffect } from 'react'
import MusicPlayer from './Play'

const Apitest = () => {
  const query = `
  query GetSongs($playlistId: Int!) {
    getSongs(playlistId: $playlistId) {
      _id
      artist
      title
      url
    }
  }
`;

const getData = (playlistId) => {
  const query = `
    query GetSongs($playlistId: Int!) {
      getSongs(playlistId: $playlistId) {
        _id
        artist
        title
        url
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
    <div>
      <div>
        <MusicPlayer/>
      </div>
    </div>
  )
}

export default Apitest