import pic from "../../images/homeImages/Museo.jpg";
import { Link } from "react-router-dom";

function Hero(params) {
  return (
    <div className="heroSection">
      <div className="heroText">
        <h2>MUSEO</h2>
        <h4>Your Museum Stampbook!</h4>
        <p>
          Have you ever wanted to track museum visits and collect stamps to
          remember all of your trips instead of forgetting where you put the
          tickets? Have you ever lost all of your precious belongings to a flood
          or a fire and had no way to recover precious lost memories? Don't trust 
          a paper scrapbook, those suck, make it digital. Here at Museo we provide 
          you with a scrapbook for all your museum visits that can never be lost 
          or destroyed! Get out and go explore more museums today!
        </p>
        <Link to="/LogIn">
          <button>SIGN UP</button>
        </Link>
      </div>
      <img
        className="heroImg"
        src={pic}
        alt="Close-up of a museum display shelf."
      />
    </div>
  );
}

export default Hero;
