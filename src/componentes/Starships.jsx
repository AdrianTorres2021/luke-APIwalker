import axios from "axios";
import React, { useState, useEffect } from "react"; 
import { useParams } from "react-router";
import obi from '../obi.gif';

const Starships = (props) => {
    const [apiData,setApiData] = useState({}); 
    const [isError, setIsError] = useState(false);
    const  { id } = useParams(); 

    useEffect(() => {
        axios.get(`https://swapi.dev/api/starships/${id}`)
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
                <p>Manufacturer: {apiData.manufacturer}</p>
                <p>Model: {apiData.model}</p>
                <p>Starship class: {apiData.starship_class}</p>
                <p>Passengers: {apiData.passengers}</p>
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

export default Starships;