import React, {useState, useEffect} from "react";
import './Launches.css';
import { LaunchDetail } from "./LaunchDetail";

export const Launches = () => {
    const [launches, setLaunches] = useState("");

    useEffect(() => {
        //console.log("Started Fetch");
        fetch('https://api.spacexdata.com/v3/launches/')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setLaunches(data);
           
       });     
   }, []);

   return(
       <>
  
    <div className='launches'>
            {launches === "" ? <h3>Loading...</h3> 
            : launches.map((launch, idx) => 

                <LaunchDetail launch={launch}></LaunchDetail>
            )} 

    </div>
    </>
);
}