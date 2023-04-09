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
//  border :2px solid blue;

`;

const ControlsWrapper = styled.div`
  display: flex;
  margin-top: 30px;
  width:100%;
  aline-items:center;
  justify-content:center;
`;

const ControlButton = styled.button`
  background-color: #fff;
  border: none;
  font-size: 16px;
  cursor: pointer;
  margin-right: 10px;

  &:last-child {
    margin-right: 0;
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

function SongPlay({song}) {
    // if(!song || !song?.artist) return <></>;
  // { title, photo, url, artist, id }
// let song=JSON.parse(localStorage.getItem("songdata"))

  const audioRef = useRef();
  const [isPlaying, setIsPlaying] = useState(false);
  useEffect(()=>{
    console.log("render")
  },[song])

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
  };

  const handleNext = () => {
    
  };

  return (
    <PlayerWrapper>
      <TitleArtistWrapper>
        <SongTitle>{song?.title}</SongTitle>
        <ArtistName>{song?.artist}</ArtistName>
      </TitleArtistWrapper>
     <ImageSong>
         <AlbumCover src={song?.photo} alt={song?.title} />
      <audio ref={audioRef} src={song?.url} />
     </ImageSong>
      <ControlsWrapper>
        <ControlButton onClick={handlePrevious}>Previous</ControlButton>
        <ControlButton onClick={handlePlayPause} isPlaying={isPlaying}>
          <FaPlay className="play-icon" />
          <FaPause className="pause-icon" />
        </ControlButton>
        <ControlButton onClick={handleNext}>Next</ControlButton>
      </ControlsWrapper>
    </PlayerWrapper>
  );
}

export default SongPlay;