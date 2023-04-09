import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { FaPlay, FaPause } from 'react-icons/fa';

const PlayerWrapper = styled.div`
  display: flex;
background-color:#1d1406;
color:white;
flex-direction: column;
  align-items: center;
  width:100%;
  height:100%;

`;

const TitleArtistWrapper = styled.div`
  display: flex;
  flex-direction: column;

   height:15%;
   width:60%;
  margin-top:7%;
`;

const SongTitle = styled.h3`
  font-size: 24px;
  margin: 0;
`;

const ArtistName = styled.p`
  font-size: 18px;
  margin: 0;
  margin-top: 10px;
`;
const ImageSong = styled.div`
height:60%;
width:60%;
`

const AlbumCover = styled.img`
 width:100%;
 height:100%;
 object-fit:cover;
 
 `;

const ControlsWrapper = styled.div`
  display: flex;
  margin-top: 30px;
  width:20%;
  aline-items:center;
  justify-content:space-between;

`;

const ControlButton = styled.button`
  background-color: #fff;
  border: none;
  font-size: 16px;
  display:flex;
  aline-items:center;
  justify-content:center;
  cursor: pointer;
  padding:3%;
  border-radius:50%;
  margin-right: 10px;

  &:last-child {
    margin-right: 0;
    border-radius:0px;
    background:none;
    color:white;
  }
  &:first-child{
    margin-right: 0;
    border-radius:0px;
    background:none;
    color:white;
  }
  

  svg {
    vertical-align: middle;
  }

  .play-icon {
    display: ${props => (props.isPlaying ? 'none' : 'inline')};
  }

  .pause-icon {
    display: ${props => (props.isPlaying ? 'inline' : 'none')};
  }
`;
const Soundbtn=styled.div`
color:white;
background-color:teal;
`;
const threeDot=styled.div`
color:white;
background-color:teal;
`;

function SongPlay({id,passing}) {
   // { title, photo, url, artist, id }
   const [count,setCount]=useState(0)

   const [sid,setSid]=useState()
     useEffect(()=>{
    setSid(id)

     },[id])
    // console.log(id)
    console.log(sid&&sid)

    
   const change=passing&&passing[count]
    console.log(change)


    const songData =(passing && passing.find(song => song._id === sid));
  
    if (songData) {
      // Do something with songData, such as appending it to the DOM
      console.log(songData);
    } else {
      console.log(`No song found with ID ${id}`);
    }

   
    

  const audioRef = useRef();
  const [isPlaying, setIsPlaying] = useState(false);
    
 
  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handlePrevious = () => {
    // implement going to the previous song
    setCount(pre=>pre-1)
     setIsPlaying(false)
  };

  const handleNext = () => {
    
    setCount(pre=>pre+1)
    setIsPlaying(false)
   
    
  };
  
  return (
    <PlayerWrapper>
      <TitleArtistWrapper>
        <SongTitle>{songData?songData.title:change?.title}</SongTitle>
        <ArtistName>{songData?songData.artist:change?.artist}</ArtistName>
      </TitleArtistWrapper>
     <ImageSong>
         <AlbumCover src={songData?songData.photo:change?.photo} alt={songData?.title} />
      <audio ref={audioRef} src={songData?songData.url:change?.url} />
     </ImageSong>
      <threeDot> <i class="fa-solid fa-volume"></i></threeDot>
      <ControlsWrapper>
        <ControlButton className='pre' onClick={handlePrevious}><i class="fa-solid fa-backward"></i></ControlButton>
        <ControlButton onClick={handlePlayPause} isPlaying={isPlaying} >
          <FaPlay className="play-icon" />
          <FaPause className="pause-icon" />
        </ControlButton>
        <ControlButton className='next' onClick={handleNext}><i class="fa-solid fa-forward"></i></ControlButton>
      </ControlsWrapper>
        <Soundbtn><i class="fa-solid fa-volume"></i></Soundbtn>

    </PlayerWrapper>
  );
}

export default SongPlay;