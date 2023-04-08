import React from 'react'
import styled from 'styled-components'
const Side_Menu = () => {
  return (
    <Container>
       <div className="top_links">
          <div className="logo">
            <img src="https://www.edigitalagency.com.au/wp-content/uploads/Spotify-Logo-png-RGB-White.png" alt="" />
          </div>
          <ul>
            <li><span>Top Tracks</span></li>
            <li><span>Favourites</span></li>
            <li><span>Recently Played</span></li>
          </ul>
       </div>
    </Container>
  )
}

export default Side_Menu
const Container=styled.div`
background-color:#1d1406;
color:white;
display:flex;
height:100%;
width;100%;
flex-direction:column;
.top_links{
    display:flex;
    flex-direction:column;

}
.logo{
    text-aline:center;
    margin:1rem 0;
}
img{
    width:80%;
    block-size:auto;
}
ul{
    list-style-type:none;
    display:flex;
    flex-direction:column;
    gap:1rem;
    padding:1rem;
}
   li{
    cursor:pointer;
    display:flex;
    transition:0.3s ease-in-out;
    &:hover {
        color:teal;
    
    }
   }

`