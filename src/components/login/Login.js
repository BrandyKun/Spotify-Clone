import React from 'react'
import './Login.css'
import { loginUrl } from "../../spotify";

export default function Login() {
    return (
        <div className="login">
            <img src="http://assets.stickpng.com/thumbs/5ece4ff9123d6d0004ce5f89.png" alt=""/>
            <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
        </div>
    )
}
