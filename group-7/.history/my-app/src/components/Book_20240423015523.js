import HTMLFlipBook from "react-pageflip";
import bookLeft from ".././images/bookLeft.png";
import bookRight from ".././images/bookRight.png";
import MuseumForm from "./MuseumForm.js";

import { useState } from "react";
import Draggable from "react-draggable";
import stamp1 from ".././images/The_Metropolitan_Art_Museum.png";
import stamp2 from ".././images/The_Isabella_Stewart_Gardner_Museum.png";
import stamp3 from ".././images/The_Guggenheim_Museum.png";
import stamp4 from ".././images/Albany_Museum_of_Art.png";
import stamp5 from ".././images/Albany_Institute_of_History_and_Art.png";
import stamp6 from ".././images/nhm.png";
import stamp7 from ".././images/intrepid.png";
import stamp8 from ".././images/illusions.png";
import stamp9 from ".././images/spyscape.png";
import stamp10 from ".././images/boston_museum_of_science.png";



import "./Book.css";

function MyBook(props) {
  const [showForm, setShowForm] = useState(false);

  const handleCircleClick = () => {
    setShowForm(!showForm);
  };
  //create variables for the stamps
  let stamps = ['none', 'none', 'none', 'none', 'none', 'none', 'none', 'none', 'none', 'none'];
  // call the /profile/:uid endpoint to get the user's profile data
  const uid = document.cookie.split('=')[1];
  fetch("./profile/" + uid)
    .then((response) => response.json())
    .then((data) => {
      for (let i = 0; i < data.visitedMuseums; i++) {
        if (data.visitedMuseums[i] === "The Metropolitan Art Museum") {
          stamps[0] = 'block';
        }
        if (data.visitedMuseums[i] === "The Isabella Stewart Gardner Museum") {
          stamps[1] = 'block';
        }
        if (data.visitedMuseums[i] === "The Guggenheim Museum") {
          stamps[2] = 'block';
        }
        if (data.visitedMuseums[i] === "Albany Museum of Art") {
          stamps[3] = 'block';
        }
        if (data.visitedMuseums[i] === "Albany Institute of History and Art") {
          stamps[4] = 'block';
        }
        if (data.visitedMuseums[i] === "Museum of Natural History") {
          stamps[5] = 'block';
        }
        if (data.visitedMuseums[i] === "The Intrepid") {
          stamps[6] = 'block';
        }
        if (data.visitedMuseums[i] === "The Museum of Illusions") {
          stamps[7] = 'block';
        }
        if (data.visitedMuseums[i] === "Spyscape") {
          stamps[8] = 'block';
        }
        if (data.visitedMuseums[i] === "Boston Museum of Science") {
          stamps[9] = 'block';
        }
      }
    })

}

export default MyBook;
