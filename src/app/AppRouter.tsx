// src/app/AppRouter.tsx
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import HomePage from "../ui/pages/HomePage";
import MainLayout from "../ui/layouts/MainLayout";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
