import React, {useState,useEffect} from "react";
import "./Home.css"
import NavBar from "./../../components/NavBar/NavBar";

function Home(){
    const [notes, setNotes]=useState([

        { 
            title: "Note 1",
            content : "this is the content of note 1"
        },
        { 
            title: "Note 2",
            content : "this is the content of note 2"
        },
        { 
            title: "Note 3",
            content : "this is the content of note 3"
        },
        { 
            title: "Note 4",
            content : "this is the content of note 4"
        }
    ]);
    return(
            <div>
                <NavBar/>
                <h1 className="app-title">all notes</h1>                
            </div>
    )
}
export default Home
