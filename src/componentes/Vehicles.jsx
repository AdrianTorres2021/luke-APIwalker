import axios from "axios";
import React, { useState, useEffect } from "react"; 
import { useParams } from "react-router";
import obi from '../obi.gif';

const Vehicles = (props) => {
    const [apiData,setApiData] = useState({}); 
    const [isError, setIsError] = useState(false);
    const  { id } = useParams(); 

    useEffect(() => {
        axios.get(`https://swapi.dev/api/vehicles/${id}`)
        .then((response) => {
            setIsError(false);
            console.log(response.data);                        
            setApiData(response.data); 
        })

        .catch((err) => {
            console.log(err);
            setIsError(true);
        });

    }, [id]); 

    if (!isError){ 
        return (
            <div>
                <h1>{apiData.name}</h1>
                <p>Model: {apiData.model}</p>
                <p>Passengers: {apiData.passengers}</p>
                <p>Vehicle class: {apiData.vehicle_class}</p>
                <p>Cost in credits: {apiData.cost_in_credits}</p>
            </div>
        );
    } else { 
        return (
            <>
            <h1>"Estos no son los droides que está buscando"</h1>
            <img src={obi} alt="Obi Wan" />
            </>
        )
    }
};

export default Vehicles;