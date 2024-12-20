import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import BookPage from "./pages/bookPage";
import ProfilePage from "./pages/profilePage";
import LogIn from "./pages/login";
import Contact from "./pages/contact";
import Credits from "./pages/credits";
import Terms from "./pages/terms";

function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/book" element={<BookPage />} />
                <Route path="*" element={<HomePage />} />
                {}
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/login" element={<LogIn />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/credits" element={<Credits />} />
                <Route path="/terms" element={<Terms />} />
            </Routes>
        </BrowserRouter>
    );
}
export default AppRouter;
