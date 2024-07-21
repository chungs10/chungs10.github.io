// import { Link } from "react-router-dom";

function MuseumList({params, message}) {
  const museums = params.listType === "Saved Museums" ? message.visitedMuseums : message.savedMuseums;
  
  return (
    <>
      <h3>{params.listType}</h3>
      <ul>
        {museums.map((stamps) => (
          <li key={stamps._id}>
            <p>Museum Name: {stamps.museumName}</p>
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
