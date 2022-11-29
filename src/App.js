import React from "react";
import Header from "./components/header"
import MainBody from "./components/main";
import "./app.css"

export default function App(){
    return (
         <div className="digitalCard">
        <Header />
        <MainBody />
    </div>
    )
}

