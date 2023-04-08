import { useEffect, useState } from "react";
import RightSidebar from "./Playlist";
import RightContainer from "./RightContainer";
import Play from "./Play";

function App() {
  const [selectedSong, setSelectedSong] = useState(null);
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    // Fetch the list of songs from an API
    fetch('/api/songs')
      .then(response => response.json())
      .then(data => setSongs(data));
  }, []);

  const PlaySong = song => {
    setSelectedSong(song);
  };

  const playNext = () => {
    // Logic to play the next song in the playlist
  };

  const playPrev = () => {
    // Logic to play the previous song in the playlist
  };

  const togglePlay = () => {
    // Logic to toggle between play and pause
  };

  return (
    <div>
      {/* <RightSidebar playSong={PlaySong} songs={songs} /> */}
      {selectedSong && (
        <RightContainer
          selectedSong={selectedSong}
          playNext={playNext}
          playPrev={playPrev}
          togglePlay={togglePlay}
        />
      )}
      <Play/>
    </div>
  );
}

export default App;