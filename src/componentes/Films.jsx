import axios from "axios";
import React, { useState, useEffect } from "react"; 
import { useParams } from "react-router";
import obi from '../obi.gif';

const Films = (props) => {
    const [apiData,setApiData] = useState({}); 
    const [isError, setIsError] = useState(false);
    const  { id } = useParams(); 

    useEffect(() => {
        axios.get(`https://swapi.dev/api/films/${id}`)
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
                <h1>{apiData.title}</h1>
                <p>Release date: {apiData.release_date}</p>
                <p>Director: {apiData.director}</p>
                <p>Episode id: {apiData.episode_id}</p>
                <p>Characters: {apiData.characters}</p>
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

export default Films;