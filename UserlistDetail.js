import React from "react";

const UserlistDetail = (props) => {
  return (
    <div>
      <p>{props.detail.firstName}</p>
      <p>{props.detail.lastName}</p>
      <p>{props.detail.email}</p>
      <p>{props.detail.phone}</p>
    </div>
  );
};

export default UserlistDetail;
