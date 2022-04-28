import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/homepage/HomePage";
import { AdminHomePage } from "./pages/adminhomegame/AdminHomePage";
import { ApplicationFormPage } from "./pages/application-formpage/ApplicationFormPage";
import { CreateTripPage } from "./pages/create-trippage/CreateTripPage";
import { LoginPage } from "./pages/login/LoginPage";
import { TripDetailsPage } from "./pages/trip-detailspage/TripDetailsPage";
import { ListTripsPage } from "./pages/list-trippage/ListTripsPage";

export const Router = () => {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage/> } />
        <Route path="/admin-home" element={<AdminHomePage />} />
        <Route path="/application-form" element={<ApplicationFormPage />} />
        <Route path="/create-trip" element={<CreateTripPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/trip-details" element={<TripDetailsPage />} />
        <Route path="/list-trip" element={<ListTripsPage />} />

      </Routes>
    </BrowserRouter>

  );
};
