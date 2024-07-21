import React from "react";
import  { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import BookPage from "./pages/bookPage";
import ProfilePage from "./pages/profilePage";
import LogIn from "./pages/login";
import Contact from "./pages/contact";
import Credits from "./pages/credits";
import Terms from "./pages/terms";

const defaultUserData = {
    username: 'Name',
    email: '',
    dateJoined: '',
    profileBio: '......'
  };

function AppRouter() {
    const [userData, setUserData] = useState(defaultUserData);
    const user = document.cookie.split('=')[1];
    console.log(document.cookie);
    useEffect(() => {
        fetch("./profile/" + user)
          .then(response => response.json())
          .then(data => {
            console.log(data);
            setUserData(data);
          }).catch((error) => {
            console.error('Error:', error);
            setUserData(defaultUserData);
          });
      }, []);
    //call the /user/:uid endpoint to get the user data
    //useEffect(() => {
    //    fetch("./profile/" + user)
    //      .then(response => response.json())
    //      .then(data => {
    //        console.log(data);
    
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/book" element={<BookPage />} />
                <Route path="/profile" element={<ProfilePage message={userData}/>} />
                <Route path="/login" element={<LogIn />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/credits" element={<Credits />} />
                <Route path="/terms" element={<Terms />} />
            </Routes>
        </BrowserRouter>
    );
}
export default AppRouter;
