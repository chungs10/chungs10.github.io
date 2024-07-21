// import { Link } from "react-router-dom";
import stamp1 from "../.././images/The_Metropolitan_Art_Museum.png";
import stamp2 from "../.././images/The_Isabella_Stewart_Gardner_Museum.png";
import stamp3 from "../.././images/The_Guggenheim_Museum.png";
import stamp4 from "../.././images/Albany_Museum_of_Art.png";
import stamp5 from "../.././images/Albany_Museum_of_Art.png";

import pic from "../../images/homeImages/Museo.jpg";
function RecentStamps(params) {
  return (
    <>
      <h3 style={{ margin: "0 0 10px 0" }}>Recent Stamps</h3>
      <div className="stamps" style={{ textAlign: "left" }}>
        <img className="recentStamp" src={stamp1} alt="" />
        <img className="recentStamp" src={stamp2} alt="" />
        <img className="recentStamp" src={stamp3} alt="" />
        <img className="recentStamp" src={stamp4} alt="" />
        <img className="recentStamp" src={stamp6} alt="" />
      </div>
    </>
  );
}

export default RecentStamps;
