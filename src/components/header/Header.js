import { Search } from '@material-ui/icons'
import React from 'react'
import './Header.css'
import SearchIcon from "@material-ui/icons/SearchSharp";
import { Avatar } from '@material-ui/core'

function Header() {
    return (
        <div className="header">
             <div className="header_left">
                 <SearchIcon/>
                 <input placeholder='Search for Artists, Songs, ' type="text"/>
             </div>
            <div className="header_right">
                <Avatar src="" alt="BK"/>
                <h4> Brandy Kundenga</h4>
            </div>
        </div>
    )
}

export default Header
