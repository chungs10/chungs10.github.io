import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./homePage";
import BookPage from "./pages/bookPage";
import ProfilePage from "./profilePage";
import LogIn from "./login";
import Contact from "./pages/contact";
import Credits from "./credits";
import Terms from "./terms";

function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/book" element={<BookPage />} />
                <Route path="*" element={<HomePage />} />
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
