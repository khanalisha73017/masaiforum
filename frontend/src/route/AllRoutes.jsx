import React from "react";
import { Route, Routes } from "react-router-dom";

import { SignUp } from "../page/SignUp";

import { Dashboard } from "../component/Dashboard";
import { Login } from "../page/Login";
import { Singlepage } from "../component/Singlepage";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<SignUp />} />
      <Route path="/login" element={<Login />} />

      <Route path="/feed" element={<Dashboard />} />
      <Route path="/feed/:id" element={<Singlepage />} />
    </Routes>
  );
};
