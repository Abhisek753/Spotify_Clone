import React, { useEffect } from 'react'
import MusicPlayer from './Play'

const Apitest = () => {
    // const getData=()=>{
      fetch("https://api.ss.dev/resource/api",{
        method:"POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query:`
          query Query($playlistId: Int!) {
            getSongs(playlistId: $playlistId) {
              _id
              url
            }
          }
          `
        })
      }).then(res=>res.json())
      .then(data=>{
        console.log(data.data)
      })
    // }
    // useEffect(()=>{
    //   getData()
    // },[])
   

  return (
    <div>
      <div>
        <MusicPlayer/>
      </div>
    </div>
  )
}

export default Apitest