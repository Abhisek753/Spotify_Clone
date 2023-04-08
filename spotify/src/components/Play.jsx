import React, { useState } from "react";

function Play() {
  const [audioUrl, setAudioUrl] = useState("");

  const handleUrlChange = (event) => {
    setAudioUrl(event.target.value);
  };

  return (
    <div>
      <input type="text" value="https://storage.googleapis.com/similar_sentences/Imagine%20Dragons%20-%20West%20Coast%20(Pendona.com).mp3" onChange={handleUrlChange} />
      <audio controls>
        <source src="https://storage.googleapis.com/similar_sentences/Imagine%20Dragons%20-%20West%20Coast%20(Pendona.com).mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}

export default Play;