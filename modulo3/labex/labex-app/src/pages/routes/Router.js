import React from "react";
import { AdminHomePage } from "./pages/admin/AdminHomePage";
import { ApplicationFormPage } from "./pages/applicationform/ApplicationFormPage";
import { CreateTripPage } from "./pages/createtrippage/CreateTripPage";
import { HomePage } from "./pages/homepage/HomePage";
import { LoginPage } from "./pages/loginpage/LoginPage";
import { TripDetailsPage } from "./pages/tripdetailspage/TripDetailsPage";
import { ListTripsPage } from "./pages/listtripspage/ListTripsPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const Rotas = () => {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage/> } />
        <Route path="/AdminHome" element={<AdminHomePage />} />
        <Route path="/application-form" element={<ApplicationFormPage />} />
        <Route path="/create-trip" element={<CreateTripPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/ListTrip" element={<ListTripsPage />} />
        <Route path="/trip-details" element={<TripDetailsPage />} />
      </Routes>
    </BrowserRouter>

  );
};
