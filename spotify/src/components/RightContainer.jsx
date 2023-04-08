import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const RightContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  background-color: #fff;
  padding: 20px;
`;

const SongImage = styled.img`
  width: 20%;
  height: 20%;
`;

const SongDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SongTitle = styled.h3`
  margin: 0;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

const SongArtist = styled.p`
  margin: 0;
  font-size: 16px;
  text-align: center;
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
`;

const ControlButton = styled.button`
  background-color: teal;
  color: white;
  border: none;
  padding: 10px;
  margin: 10px;
  cursor: pointer;
`;

function RightContainer({ selectedSong, playNext, playPrev, togglePlay }) {
  return (
    <RightContainerWrapper>
      <SongImage src={selectedSong.image} alt={selectedSong.title} />
      <SongDetails>
        <SongTitle>{selectedSong.title}</SongTitle>
        <SongArtist>{selectedSong.artist}</SongArtist>
      </SongDetails>
      <Controls>
        <ControlButton onClick={playPrev}>Prev</ControlButton>
        <ControlButton onClick={togglePlay}>Play/Pause</ControlButton>
        <ControlButton onClick={playNext}>Next</ControlButton>
      </Controls>
    </RightContainerWrapper>
  );
}

export default RightContainer;