import React from "react";
import Footer from "../components/footer";
import SideBar from "../components/sideBar";
import "./profilePage.css";
import ProfileBanner from "../components/profilepage/ProfileBanner";
import MuseumList from "../components/profilepage/MuseumList";
import FriendsList from "../components/profilepage/FriendsList";

function ProfilePage() {
  if (!document.cookie) {
    navi
  }
  return (
    <div
      className="App"
      style={{ backgroundColor: "#E2D6C0", width: "100%", height: "100%" }}
    >
      <div
        style={{ width: "100%", height: "30px", backgroundColor: "#FDF3DE" }}
      ></div>

      <div style={{ backgroundColor: "#FDF3DE" }}>
        <div id="main_content">
          <div class="profilepage_parent">
            <div className="title">
              <h2 style={{ textAlign: "center" }}>Your Profile</h2>
            </div>
            <div class="profileBanner box">
              <ProfileBanner />
            </div>
            <div className="columns">
              <div className="visitedMuseums box">
                <MuseumList listType="Visited Museums" />
              </div>
              <div className="savedMuseums box">
                <MuseumList listType="Saved Museums" />
              </div>
              <div className="friendsList box">
                {" "}
                <FriendsList />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ position: "fixed", top: 0, left: 0 }}>
        <SideBar />
      </div>
      <Footer />
    </div>
  );
}
export default ProfilePage;
