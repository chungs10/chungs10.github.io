// import { Link } from "react-router-dom";
// import pic from "../../images/homeImages/Museo.jpg";

function FriendsList({message}) {
  const {friends} = message;
  
  return (
    <>
      <h3>Your Friends</h3>
      <div className="friendList">
        <ul>
          {friends.map((friend, index) => (
            <li key={index}>{friend}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default FriendsList;
