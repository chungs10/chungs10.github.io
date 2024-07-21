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
            <p>Date Visited: {stamps.dateVisited}</p>
            <p>Notes: {stamps.notes}</p>
          </li>
        ))}
      </ul>
      <h2>{params}</h2>
    </>
  );
}

export default MuseumList;
