import React from "react";
import { useNavegate } from "react-router-dom";


export const HomePage = () =>{
    const navegate = useNavegate();

    const goToListTrip = () => {
        navegate("/list-trip");
    }

    return (
        <div>
            <h1>HomePage</h1>
            <button onChange={goToListTrip}>Ver Viagens</button> 
            
        </div>
    );
}

export default HomePage;