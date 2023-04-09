// import React, { useState, useRef } from 'react';
// import styled from 'styled-components';
// import { FaPlay, FaPause } from 'react-icons/fa';

// const PlayerWrapper = styled.div`
// display: flex;
//   flex-direction: column;
//   align-items: center;
// `;

// const TitleArtistWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   margin-top: 20px;
// `;

// const SongTitle = styled.h3`
//   font-size: 24px;
//   margin: 0;
// `;

// const ArtistName = styled.p`
//   font-size: 18px;
//   margin: 0;
//   margin-top: 10px;
// `;

// const AlbumCover = styled.img`
//   margin-top: 30px;
 
//   object-fit: cover;
// `;

// const ControlsWrapper = styled.div`
//   display: flex;
//   margin-top: 30px;
//   width:100%;
//   aline-items:center;
//   justify-content:center;
// `;

// const ControlButton = styled.button`
//   background-color: #fff;
//   border: none;
//   font-size: 16px;
//   cursor: pointer;
//   margin-right: 10px;

//   &:last-child {
//     margin-right: 0;
//   }

//   svg {
//     vertical-align: middle;
//   }

//   .play-icon {
//     display: ${props => (props.isPlaying ? 'none' : 'inline')};
//   }

//   .pause-icon {
//     display: ${props => (props.isPlaying ? 'inline' : 'none')};
//   }
// `;

// function Player(song) {
//   // { title, photo, url, artist, id }
// console.log(song)

//   const audioRef = useRef();
//   const [isPlaying, setIsPlaying] = useState(false);

//   const handlePlayPause = () => {
//     if (isPlaying) {
//       audioRef.current.pause();
//     } else {
//       audioRef.current.play();
//     }
//     setIsPlaying(!isPlaying);
//   };

//   const handlePrevious = () => {
//     // implement going to the previous song
//   };

//   const handleNext = () => {
//     // implement going to the next song
//   };

//   return (
//     <PlayerWrapper>
//       {/* <TitleArtistWrapper>
//         <SongTitle>{title}</SongTitle>
//         <ArtistName>{artist}</ArtistName>
//       </TitleArtistWrapper>
//       <AlbumCover src="https://images.genius.com/e95f361c27487088fd9dddf8c967bf89.500x500x1.jpg" alt={title} />
//       <audio ref={audioRef} src="https://storage.googleapis.com/similar_sentences/Imagine%20Dragons%20-%20West%20Coast%20(Pendona.com).mp3" />
//       <ControlsWrapper>
//         <ControlButton onClick={handlePrevious}>Previous</ControlButton>
//         <ControlButton onClick={handlePlayPause} isPlaying={isPlaying}>
//           <FaPlay className="play-icon" />
//           <FaPause className="pause-icon" />
//         </ControlButton>
//         <ControlButton onClick={handleNext}>Next</ControlButton>
//       </ControlsWrapper> */}
//     </PlayerWrapper>
//   );
// }

// export default Player;