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
            <button onChange={goToHomePage}>Home</button>
            <button onChange={goToApplicationFormPage}>ApplicationFormPage</button>
            
        </div>
    );
}

