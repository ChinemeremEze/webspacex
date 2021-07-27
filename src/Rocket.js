import React, {useState, useEffect} from "react";
import './Rocket.css';
import { useParams } from "react-router";
import { Fade } from "react-bootstrap";

export const Rocket = () =>{
    const [rocket, setRocket] = useState("");
    const { id } = useParams()
    useEffect(() => {
        //console.log("Started Fetch");
        fetch(`https://api.spacexdata.com/v3/launches/${id}`)
        .then(response => response.json())
        .then(data => {
            console.log(data.rocket)
            setRocket(data.rocket);
           
       });     
   }, [rocket]);
    return(
        
        <div className="rocket-info">
            {rocket === "" ? <h3>Loading...</h3> 
            :
            <div>
                <p className="name">Rocket Name: {rocket.rocket_name}</p>
                <p className="info">Rocket Type: {rocket.rocket_type}</p>
                <p className="info">Reused: {rocket.fairings === null ? <span>Not applicable</span> : <span>Yes</span>}
                </p>  
            </div>          
            }
        </div>  
    );
}