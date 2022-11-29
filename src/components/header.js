import React from "react"
import profilePic from "/home/pierre/Desktop/react/react-todo-app/src/images/stockphoto.jpg"
import "/home/pierre/Desktop/react/react-todo-app/src/header.css"

export default function Header () {
    return (
        <div id="TopContainer">
            <h1 id="topName"> Diontre Thomas</h1>
            <img src = {profilePic} id="profilePic" 
            alt="StockImage"/>
        </div>
    )
}