import { Link } from "react-router-dom";

function FinalSell() {
  return (
    <div className="finalSell">
      <h6>
        Have you ever wanted a digital scrapbook to collect museum memories like pokemon? Sign up for MUSEO today and start your stamp and sticker journey today!
      </h6>
      <Link to="/LogIn">
        <button>JOIN MUSEO!</button>
      </Link>
    </div>
  );
}

export default FinalSell;
