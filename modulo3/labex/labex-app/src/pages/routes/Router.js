import React from "react";
import { HomePage } from "../pages/homepage/HomePage";
import {
  BrowserRouter,
  BrowserRouter as Routes,
  Route,
} from "react-router-dom";

export const Router = () => {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
