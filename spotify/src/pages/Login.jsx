import React from 'react'
import styled from "styled-components"

 const Login = () => {
  return (
    <Container>
    <img src="https://www.edigitalagency.com.au/wp-content/uploads/Spotify-Logo-png-RGB-White.png" alt="Spotify" />
    <button>Connect Spotify</button>
    </Container>
  )
}
export default Login
const Container= styled.div`
display:flex;
flex-direction:column;
align-items:center;
justyfy-content:center;
width:100%;
height:100vh;
background-color:#1db954;
gap:5rem;
img {
    height:20vh;
    
}
button{
    padding:1rem;
    border-radius:5rem;
}
`;
