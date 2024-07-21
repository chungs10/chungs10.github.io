import React from "react";
import Footer from "../components/footer";
import SideBar from "../components/sideBar";
import MuseumImage from "../images/MakeAcc.png";
function Contact() {
  return (
    <div
      className="App"
      style={{ backgroundColor: "#E2D6C0", width: "100%", height: "100%" }}
    >
      <div
        style={{ width: "100%", height: "30px", backgroundColor: "#FDF3DE" }}
      ></div>
      <div style={{ backgroundColor: "#FDF3DE" }}>
        <div
          style={{
            // display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            height: "82vh",
            borderRadius: "20px",
            background: "#E2D6C0",
            marginRight: "40px",
            marginLeft: "170px",
            paddingTop: "20px",
            overflow: "hidden",
          }}
        >
          <div style={{ display: "flex", padding: "10% 0" }}>
            <div style={{ flex: "50%", paddingLeft: "30px" }}>
              <h2 style={{ marginBottom: "0px", textAlign: "center" }}>
                About Museo
              </h2>
              <p
                style={{
                  fontSize: "18px",
                  fontStyle: "normal",
                  padding: "25px",
                  paddingTop: "5px",
                  marginTop: "0",
                }}
              >
                Museo was made by Michael H, Andrew R, David C, Trinity G, and
                Emmie S, for our Web Science Systems Development class. It was
                created in the Spring of 2024 over the span of 4 months.
              </p>
              <h3
                style={{
                  fontFamily: "Della Respira",
                  fontSize: "24px",
                  color: "#e4622e",
                  marginBottom: "0px",
                }}
              >
                Questions? Comments? Bugs?{" "}
              </h3>
              <p
                style={{
                  fontSize: "18px",
                  fontStyle: "normal",
                  marginTop: "5px",
                }}
              >
                Send us an email at{" "}
                <a href="mailto:email@example.com">museo@gmail.com</a> <br />
                (don't, actually. it's not a real email.)
              </p>
            </div>
            <div style={{ flex: "50%" }}>
              <img
                src={MuseumImage}
                alt="A patinaed statue from the Louvre of a man looking up"
                width="590"
                id="accountCreationImg"
                height={"auto"}
              />
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
export default Contact;
