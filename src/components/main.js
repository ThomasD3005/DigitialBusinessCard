import React from "react"
import "/home/pierre/Desktop/react/react-todo-app/src/main.css"



export default function MainBody(){
    return (
        <div className="mainContainer">
            <button id="linkedInBtn" className="buttons" onClick={linkedIn}> LinkedIn</button>
            <button id="githubBtn" className="buttons" onClick={gitHub}> GitHub</button>
            <h3> Basic Information</h3>
            <p> Title: Software Developer</p>
            <p> Location: Morrow, Georgia</p>
            <p>Programming Languages: </p>
            <p>Java, Javascript, & Python</p>
        </div>
    )
}

function linkedIn(){
    window.open("https://www.linkedin.com/");
}

function gitHub(){
    window.open("https://github.com/");
}
