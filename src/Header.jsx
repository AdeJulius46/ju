import React from "react"
import './index.css'

export default function Header() {
    return (
        <header className="header">
            <img 
                src="./assets/react.svg" 
                className="header--image"
            />
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">Project 3</h4>
    
        </header>
    )
}