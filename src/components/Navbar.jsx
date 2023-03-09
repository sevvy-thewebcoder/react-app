import React from "react";
import reactLogo from "../assets/react.svg"
import "../App.css"
export default function Navbar() {
    return (
        <nav className="Navbar">
            <div className="Logo--container">
                <img className="Logo" src={reactLogo} alt="React logo" />
            </div>
            <h3>ReactFacts</h3>
            <h4>React Course - Project 1</h4>
        </nav>
    )
}