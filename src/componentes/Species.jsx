import axios from "axios";
import React, { useState, useEffect } from "react"; 
import { useParams } from "react-router";
import obi from '../obi.gif';

const Species = (props) => {
    const [apiData,setApiData] = useState({}); 
    const [isError, setIsError] = useState(false);
    const  { id } = useParams(); 

    useEffect(() => {
        axios.get(`https://swapi.dev/api/species/${id}`)
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
                <p>Classification: {apiData.classification}</p>
                <p>Lenguage: {apiData.language}</p>
                <p>Designation: {apiData.designation}</p>
                <p>Homeworld: {apiData.homeworld}</p>
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

export default Species;