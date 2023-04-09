import React from 'react'
import styled from 'styled-components'
const Side_Menu = () => {
  return (
    <Container>
       <div className="logo">
            <img src="https://www.edigitalagency.com.au/wp-content/uploads/Spotify-Logo-png-RGB-White.png" alt="" />
          </div>
       <div className="top_links">
         
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
width:100%;
height:100%;
color:white;
display:flex;

flex-direction:column;
.top_links{
    display:flex;
    flex-direction:column;
height: 200px;
width: 150px;
left: 32px;
top: 100px;
border-radius: 0px;


}
.logo{
    text-aline:center;
    margin:1rem 0;
    
}
img{
  height: 39.411766052246094px;
  width: 131.52940368652344px;
  left: 0.941162109375px;
  top: 0.4705810546875px;
  border-radius: 0px;
 
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