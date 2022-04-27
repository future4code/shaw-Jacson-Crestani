import React from "react";
import { useNavigate } from "react-router-dom";


export const ListTripsPage = () =>{
    const navegate = useNavigate();

    const goToHomePage = () => {
        navegate("/");
    }

    const goToApplicationFormPage = () => {
        navegate(-1)
    }

    return (
        <div>
            <h1>ListTripsPage</h1>

            <button onClick={goToApplicationFormPage}>Ver Viagens</button>
            <button onClick={goToHomePage}>Ver Viagens</button>
        </div>
    );
}

