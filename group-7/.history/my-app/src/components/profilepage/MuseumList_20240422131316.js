// import { Link } from "react-router-dom";

function MuseumList({params, message}) {
  let museums = museums = params.visitedMuseums.map((stamp) => stamp);

  
  return (
    <>
      <h3>{params.listType}</h3>
      <ul>
        {museums.map((stamp) => (
          <li key={stamp._id}>
            <p>Museum Name: {stamp.museumName}</p>
            <p>Date Visited: {stamp.dateVisited}</p>
            <p>Notes: {stamp.notes}</p>
          </li>
        ))}
      </ul>
      <h2>{museums}</h2>
    </>
  );
}

export default MuseumList;
