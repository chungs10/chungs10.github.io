// import { Link } from "react-router-dom";
import pic from "../../images/homeImages/Museo.jpg";


function ProfileBanner(params) {
  const {message} = params;


  function toggleEdit() {
    var textBox = document.getElementById('editableTextBox');
    var isEditable = textBox.contentEditable;
    textBox.contentEditable = isEditable === "true" ? "false" : "true";
  }

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      toggleEdit();
      console.log(event.target.innerText)
      // send data to server
      const uid = document.cookie.split('=')[1];
      fetch("./profile/"+uid, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ "profileBio": event.target.innerText, "uid": uid}),
      })
        .then((response) => response.json())
        .then((data) => {
          alert("Profile Bio Updated!");
          window.location.assign("http://localhost:3000")
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  };

  if (!message) {
    return <div>Loading...</div>;
  }


  return (
    <>
      <img
        className="profilepic"
        src={pic}
        alt="Close-up of a museum display shelf."
        style={{
          width: "100px",
          height: "100px",
          borderRadius: "50px",
          float: "left",
          marginRight: "20px",
        }}
      />
      <div className="basicInfo">
        <h3>{message.username}</h3>
        <p>Email: {message.email}</p>
        <p>Member Since: {message.dateJoined}</p>
      </div>
      <div className="bio">
        <h4>Profile Bio</h4>
        <div id="editableTextBox" contenteditable="false" onKeyDown={handleKeyPress}>
          {message.profileBio}
        </div>
        <svg
          width="30"
          viewBox="0 0 82 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={toggleEdit}
        >
          <path
            d="M39.5 17H12C7.58172 17 4 20.5817 4 25V68C4 72.4183 7.58172 76 12 76H55C59.4183 76 63 72.4183 63 68V40"
            stroke="#4B4338"
            stroke-width="7"
            fill="none"
            stroke-linecap="round"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M74.4129 2.25615C72.4603 0.303533 69.2944 0.30353 67.3418 2.25615L34.2204 35.3776C34.1053 35.4927 34.0201 35.6341 33.972 35.7895L29.8624 49.0915C29.6252 49.8595 30.345 50.5794 31.113 50.3421L44.415 46.2325C44.5705 46.1845 44.7119 46.0993 44.827 45.9842L59.5 31.3112L63.0077 27.8035C62.9525 28.5071 63.1941 29.2296 63.7322 29.7677C64.7085 30.7441 66.2915 30.7441 67.2678 29.7677L79.2678 17.7677L81.0355 16L79.2678 14.2322L77.9234 12.8878L77.9484 12.8628C79.901 10.9101 79.901 7.74431 77.9484 5.79169L74.4129 2.25615Z"
            fill="#4B4338"
          />
        </svg>
      </div>
    </>
  );
}

export default ProfileBanner;
