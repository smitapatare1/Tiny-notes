import React, { useState, useEffect } from "react";
import "./Home.css"
import NavBar from "./../../components/NavBar/NavBar";

function Home() {
    const [notes, setNotes] = useState([

        {
            title: "Note 1",
            content: "this is the content of note 1"
        },
        {
            title: "Note 2",
            content: "this is the content of note 2"
        },
        {
            title: "Note 3",
            content: "this is the content of note 3"
        },
        {
            title: "Note 4",
            content: "this is the content of note 4"
        }
    ]);
    return (
        <div>
            <NavBar />
            <div  className="app-title-container">
                <h1  className="app-title">my notes</h1>
            </div>

            <div className="notes-container">
            </div>

        </div>
    )
}
export default Home
