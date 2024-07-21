// import { Link } from "react-router-dom";
import stamp1 from "../

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
