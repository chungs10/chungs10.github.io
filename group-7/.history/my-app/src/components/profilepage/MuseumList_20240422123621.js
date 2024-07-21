// import { Link } from "react-router-dom";

function MuseumList({params, message}) {
  const museums = params.listType === "Visited Museums" ? message.visitedMuseums : message.savedMuseums;
  
  return (
    <>
      <h3>{params.listType}</h3>
      <ul>
        {museums.map((museum, index) => (
          <li key={index}>{museum}</li>
        ))}
        // add the whole museum document to the list
        
      </ul>
    </>
  );
}

export default MuseumList;
