import React from 'react'
import './Player.css'
import SideBar from "../sideBar/SideBar";
import Body from "../body/Body";
import Footer from '../footer/Footer'

function Player(spotify) {
    return (
        <div className="player">
           <div className="player_body">
               <SideBar/>
               <Body/>
           </div>
                <Footer/>
        </div>
    )
}

export default Player;
