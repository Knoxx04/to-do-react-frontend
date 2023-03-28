import React from "react";
import { Link } from "react-router-dom"
import './Homepage.css'


function Home(){
    return(
        
        <div>
        <h1>PLAN YOUR TASK NOW</h1>
        <Link to="/Signup">
            <button>Signup</button>
        </Link>
       
        </div>
     
    )
}
export default Home