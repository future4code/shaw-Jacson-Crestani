import React from "react";
import { useNavegate } from "react-router-dom";

export const HomePage = () =>{
    const navegate = useNavegate();

    const goToListTrip = () => {
        navegate("/list-trip/ListTripPage");
    }

    return (
        <div>
            <h1>HomePage</h1>
            <button onClick={()=>goToListTrip}>Ver Viagens</button> 
            
        </div>
    );
}

export default HomePage;