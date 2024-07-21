function MuseumList({message}) {
  const museums = message.visitedMuseums;

  return (
    <>
      <h3>Visited Museums</h3>
      <ul>
        {museums.map((museum, index) => (
          <li key={index}>
            {typeof museum === 'object' ? (
              <>
                <p>Museum Name: {museum.museumName}</p>
                <p>Date Visited: {museum.dateVisited}</p>
                <p>Notes: {museum.notes}</p>
                <p>Notes Public: {museum.notesPublic.toString()}</p>
                <p>Stamp Public: {museum.stampPublic.toString()}</p>
              </>
            ) : (
              <p>{museum}</p>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}

export default MuseumList;