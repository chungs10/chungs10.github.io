// import { Link } from "react-router-dom";
import stamp1 from "../.././images/The_Metropolitan_Art_Museum.png";
import stamp2 from "../.././images/The_Isabella_Stewart_Gardner_Museum.png";
import stamp3 from "../.././images/The_Guggenheim_Museum.png";
import stamp4 from "../.././images/Albany_Museum_of_Art.png";
import stamp5 from "../.././images/Albany_Institute_of_History_and_Art.png";
import stamp6 from "../.././images/nhm.png";
import stamp7 from "../.././images/intrepid.png";
import stamp8 from "../.././images/illusions.png";
import stamp9 from "../.././images/spyscape.png";
imp


function RecentStamps(params) {
  return (
    <>
      <h3 style={{ margin: "0 0 10px 0" }}>All Stamps</h3>
      <div className="stamps" style={{ textAlign: "left" }}>
        <img className="recentStamp" src={stamp1} alt="" />
        <img className="recentStamp" src={stamp2} alt="" />
        <img className="recentStamp" src={stamp3} alt="" />
        <img className="recentStamp" src={stamp4} alt="" />
        <img className="recentStamp" src={stamp5} alt="" />
        <img className="recentStamp" src={stamp6} alt="" />
        <img className="recentStamp" src={stamp7} alt="" />
        <img className="recentStamp" src={stamp8} alt="" />
        <img className="recentStamp" src={stamp9} alt="" />
      </div>
    </>
  );
}

export default RecentStamps;
