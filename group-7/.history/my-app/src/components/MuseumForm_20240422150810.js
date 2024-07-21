import React, { useState } from "react";

const MuseumForm = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedMuseum, setSelectedMuseum] = useState("");
  const [showForm, setShowForm] = useState(true);

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };
    let museums = [];
    fetch("./museums") 
      .then(response => response.json())
      .then(data => {
        console.log(data);
        for (let i = 0; i < data.length; i++) {
          museums
        }
      }).catch((error) => {
        console.error('Error:', error);
      });
  fetch("./museums") 
    .then(response => response.json())
    .then(data => {
      console.log(data);
      // setMuseums(data);
    }).catch((error) => {
      console.error('Error:', error);
    });


  const handleAddMuseum = () => {
    const museumId = selectedMuseum;
    const dateVisited = selectedDate;
    const verificationCode = document.getElementById("verificationCode").value;
    const thoughtsAndNotes = document.getElementById("thoughtsAndNotes").value;
    const makeNotesPublic = document.getElementById("checkbox1").checked;
    const makeStampPublic = document.getElementById("checkbox2").checked;
    console.log(museumId);

    const data = {
      museumName: museumId,
      dateVisited: dateVisited,
      verification: verificationCode,
      notes: thoughtsAndNotes,
      notesPublic: makeNotesPublic,
      stampPublic: makeStampPublic,
      top: 0,
      left: 0,
    }

    console.log(data);

    // Send data to the server
    let uid = document.cookie.split('=')[1];
    fetch("./museum/" + uid, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        console.log(response);
        //redirect to homepage
        window.location.href = "/";
      })
      .catch((error) => {
        console.error("Error:", error);
    })



    setShowForm(false);
  };

  const handleMuseumChange = (event) => {
    setSelectedMuseum(event.target.value);
  };

  return (
    <div
      style={{
        transform: "scale(0.8)",
        position: "absolute",
        left: "34vw",
        top: "62vh",
        fontFamily: "Kumbh Sans",
      }}
    >
      {showForm && (
        <div
          style={{
            width: 855,
            height: 289,
            left: 0,
            top: 0,
            position: "absolute",
            background: "#FDF3DE",
            boxShadow: "0px 4px 2px rgba(0, 0, 0, 0.25)",
            borderRadius: 20,
          }}
        >
          <div
            style={{
              width: 792.91,
              height: 241,
              left: 31.55,
              top: 19,
              position: "absolute",
            }}
          >
            <div
              style={{
                width: 292.12,
                height: 66,
                left: 0,
                top: 0,
                position: "absolute",
              }}
            >
              <div
                style={{
                  width: 292.12,
                  height: 37,
                  left: 0,
                  top: 29,
                  position: "absolute",
                }}
              >
                <select
                  value={selectedMuseum}
                  onChange={handleMuseumChange}
                  style={{
                    width: 292.12,
                    height: 37,
                    left: 0,
                    top: 0,
                    position: "absolute",
                    background: "#FDF3DE",
                    boxShadow: "0px 4px 2px rgba(0, 0, 0, 0.25)",
                    borderRadius: 5,
                    border: "2px #4B4338 solid",
                    paddingLeft: "10px",
                    paddingRight: "10px",
                    fontSize: 16,
                    outlineColor: "#FF6E34",
                  }}
                >
                  <option value="">Select a museum...</option>
                  {museums.map((museum) => (
                    <option key={museum.id} value={museum.id}>
                      {museum.name}
                    </option>
                  ))}
                </select>
              </div>
              <div
                style={{
                  width: 138.43,
                  left: 0,
                  top: 0,
                  position: "absolute",
                  textAlign: "center",
                  color: "#4B4338",
                  fontSize: 18,
                  fontFamily: "Kumbh Sans",
                  fontWeight: "700",
                  wordWrap: "break-word",
                }}
              >
                *Museum Name
              </div>
            </div>
            <div
              style={{
                width: 213.75,
                height: 65,
                left: 0,
                top: 85,
                position: "absolute",
              }}
            >
              <div
                style={{
                  width: 213.75,
                  height: 37,
                  left: 0,
                  top: 28,
                  position: "absolute",
                }}
              >
                <input
                  type="date"
                  value={selectedDate}
                  onChange={handleDateChange}
                  style={{
                    width: 213.75,
                    height: 37,
                    left: 0,
                    top: 0,
                    position: "absolute",
                    background: "#FDF3DE",
                    boxShadow: "0px 4px 2px rgba(0, 0, 0, 0.25)",
                    borderRadius: 5,
                    border: "2px #4B4338 solid",
                    paddingLeft: "10px",
                    paddingRight: "10px",
                    fontSize: 16,
                    outlineColor: "#FF6E34",
                  }}
                />
              </div>
              <div
                style={{
                  width: 117.05,
                  left: 0,
                  top: 0,
                  position: "absolute",
                  color: "#4B4338",
                  fontSize: 18,
                  fontFamily: "Kumbh Sans",
                  fontWeight: "700",
                  wordWrap: "break-word",
                }}
              >
                *Date Visited
              </div>
            </div>
            <div
              style={{
                width: 213.75,
                height: 65,
                left: 0,
                top: 176,
                position: "absolute",
              }}
            >
              <div
                style={{
                  width: 213.75,
                  height: 37,
                  left: 0,
                  top: 28,
                  position: "absolute",
                }}
              >
                <input
                  id = "verificationCode"
                  type="text"
                  placeholder="code"
                  style={{
                    width: 213.75,
                    height: 37,
                    left: 0,
                    top: 0,
                    position: "absolute",
                    background: "#FDF3DE",
                    boxShadow: "0px 4px 2px rgba(0, 0, 0, 0.25)",
                    borderRadius: 5,
                    border: "2px #4B4338 solid",
                    fontSize: 18,
                    paddingLeft: "10px",
                    outlineColor: "#FF6E34",
                  }}
                />
              </div>
              <div
                style={{
                  width: 177.11,
                  left: 0,
                  top: 0,
                  position: "absolute",
                  color: "#4B4338",
                  fontSize: 18,
                  fontFamily: "Kumbh Sans",
                  fontWeight: "700",
                  wordWrap: "break-word",
                }}
              >
                Verification Number
              </div>
            </div>
            <div
              style={{
                width: 467.2,
                height: 175,
                left: 325.71,
                top: 1,
                position: "absolute",
              }}
            >
              <textarea
                id = "thoughtsAndNotes"
                placeholder="Write whatever you want! What did you think of the museum?"
                style={{
                  width: 450,
                  height: 147,
                  left: 0,
                  top: 28,
                  position: "absolute",
                  background: "#FDF3DE",
                  boxShadow: "0px 4px 2px rgba(0, 0, 0, 0.25)",
                  borderRadius: 5,
                  border: "2px #4B4338 solid",
                  outlineColor: "#FF6E34",
                  paddingTop: "5px",
                  paddingLeft: "10px",
                  paddingRight: "10px",
                  resize: "none",
                }}
              >
                {" "}
              </textarea>
              <div
                style={{
                  width: 154.71,
                  left: 0,
                  top: 0,
                  position: "absolute",
                  color: "#4B4338",
                  fontSize: 18,
                  fontFamily: "Kumbh Sans",
                  fontWeight: "700",
                  wordWrap: "break-word",
                }}
              >
                Thoughts & Notes
              </div>
            </div>
            <button
              onClick={handleAddMuseum}
              style={{
                width: 190.34,
                height: 50,
                paddingTop: 6,
                paddingBottom: 4,
                paddingLeft: 8,
                paddingRight: 8,
                left: 602.57,
                top: 198,
                position: "absolute",
                background: "#499D7B",
                boxShadow: "0px 4px 2px rgba(0, 0, 0, 0.25)",
                borderRadius: 33,
                overflow: "hidden",
                border: "2px #499D7B solid",
                justifyContent: "center",
                alignItems: "center",
                gap: 10,
                display: "inline-flex",
                color: "#FDF3DE",
                fontSize: 18,
                fontFamily: "Kumbh Sans",
                fontWeight: "400",
                wordWrap: "break-word",
              }}
            >
              ADD MUSEUM
            </button>
            <div
              style={{
                width: 181.18,
                height: 47,
                left: 325.71,
                top: 194,
                position: "absolute",
              }}
            >
              <div
                style={{
                  width: 181.18,
                  height: 20,
                  left: 0,
                  top: 30,
                  position: "absolute",
                }}
              >
                <div
                  style={{
                    width: 155.73,
                    height: 17,
                    left: 25.45,
                    top: 4,
                    position: "absolute",
                    color: "#4B4338",
                    fontSize: 13,
                    fontFamily: "Kumbh Sans",
                    fontWeight: "400",
                    wordWrap: "break-word",
                  }}
                >
                  Make your notes public?
                </div>
                <input
                  id = "checkbox1"
                  type="checkbox"
                  style={{
                    width: 20.36,
                    height: 20,
                    left: 0,
                    top: 0,
                    position: "absolute",
                    background: "#E2D6C0",
                    borderRadius: 9999,
                    border: "2px #499D7B solid",
                  }}
                />
              </div>
              <div
                style={{
                  width: 181.18,
                  height: 20,
                  left: 0,
                  top: 0,
                  position: "absolute",
                }}
              >
                <div
                  style={{
                    width: 155.73,
                    height: 17,
                    left: 25.45,
                    top: 4,
                    position: "absolute",
                    color: "#4B4338",
                    fontSize: 13,
                    fontFamily: "Kumbh Sans",
                    fontWeight: "400",
                    wordWrap: "break-word",
                  }}
                >
                  Make this stamp public?
                </div>
                <input
                  id = "checkbox2"
                  type="checkbox"
                  style={{
                    width: 20.36,
                    height: 20,
                    left: 0,
                    top: 0,
                    position: "absolute",
                    background: "#E2D6C0",
                    borderRadius: 9999,
                    border: "2px #499D7B solid",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default MuseumForm;
