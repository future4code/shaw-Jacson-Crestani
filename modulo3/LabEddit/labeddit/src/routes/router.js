import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CadastrePage from "../pages/CadastrePage/CadastrePage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import FeedPage from "../pages/FeedPage/FeedPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import PostPage from "../pages/PostPage/PostPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LoginPage />} />

        <Route element={<CadastrePage />} path="/cadastre" />

        <Route element={<FeedPage />} path="/feed" />

        <Route element={<PostPage />} path="/post/:id" />

        <Route element={<ErrorPage />} path="*" />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
