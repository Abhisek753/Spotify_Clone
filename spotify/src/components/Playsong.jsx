import React, { useState, useRef } from 'react';
import styled from 'styled-components';

const PlayerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TitleArtistWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
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

const AlbumCover = styled.img`
  margin-top: 30px;
  width: 300px;
  height: 300px;
  object-fit: cover;
`;

const ControlsWrapper = styled.div`
  display: flex;
  margin-top: 30px;
`;

const ControlButton = styled.button`
  background-color: #fff;
  border: none;
  font-size: 16px;
  cursor: pointer;
  margin-right: 10px;
`;

function Player( {title, photo, url, artist} ) {
  const audioRef = useRef();
  const [isPlaying, setIsPlaying] = useState(false);
  console.log(title)
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
    // implement going to the next song
  };
  

  return (
    <PlayerWrapper>
      <TitleArtistWrapper>
        <SongTitle>{title}</SongTitle>
        <ArtistName>{artist}</ArtistName>
      </TitleArtistWrapper>
      <AlbumCover src={photo} alt={title} />
      <audio ref={audioRef} src={url} />
      <ControlsWrapper>
        <ControlButton onClick={handlePrevious}>Previous</ControlButton>
        <ControlButton onClick={handlePlayPause}>
          {isPlaying ? 'Pause' : 'Play'}
        </ControlButton>
        <ControlButton onClick={handleNext}>Next</ControlButton>
      </ControlsWrapper>
    </PlayerWrapper>
  );
}

export default Player;