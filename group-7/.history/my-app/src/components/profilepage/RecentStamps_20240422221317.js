// import { Link } from "react-router-dom";
import stamp1 from "../.././images/stamp1.png";
import stamp2 from "../.././images/stamp2.png";
import stamp3 from "../.././images/stamp3.png";
import stamp4 from "../.././images/stamp4.png";
import stamp5 from "../.././images/stamp5.png";
import stamp6 from "../.././images/stamp6.png";
import stamp7 from "../.././images/stamp7.png";

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
