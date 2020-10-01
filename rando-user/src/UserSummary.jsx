import React, { useState } from "react";

function UserSummary(props) {
  const [showMore, updateShowMore] = useState(false);

  return (
    <div>
      {props.userData === null ? (
        <h3>There is no user data</h3>
      ) : (
        <div>
          <h2>
            {props.userData.name.first} {props.userData.name.last}
          </h2>
          <p>Email: {props.userData.email}</p>
        </div>
      )}

      <button onClick={() => updateShowMore(!showMore)}>
        {showMore ? "Show Less" : "Show More"}
      </button>

      {showMore ? (
        <div>
          <img
            src={props.userData.picture.large}
            alt="portrait of rando user"
          />
          <p>Age: {props.userData.dob.age}</p>
          <p>
            Location: {props.userData.location.street.number}{" "}
            {props.userData.location.street.name}
            {props.userData.location.city}, {props.userData.location.country}
          </p>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default UserSummary;
