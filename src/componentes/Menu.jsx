import React, { useState} from 'react';
import { useNavigate } from "react-router-dom";
import './menu.css'

const Menu = () =>{
    const [categoria, setCategoria] = useState("");
    const [id, setId] = useState("");
    const navigate = useNavigate();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        
        navigate(`/${categoria}/${id}`)
    };

    return(
            <form onSubmit={handleSubmit}>
                <label>Search For: {" "}</label>
                <select onChange={ (e) => setCategoria(e.target.value)}>
                    <option value="">Select...</option>
                    <option value="people">People</option>
                    <option value="planets">Planets</option>
                    <option value="starships">Starships</option>
                    <option value="vehicles">Vehicles</option>
                    <option value="species">Species</option>
                    <option value="films">Films</option>
                </select>
                <label>Id</label>
                <input type="text" onChange={ (e) => setId(e.target.value)} />
                <input type="submit" value="Search" className='Btn'/>
            </form>
    )
}

export default Menu;