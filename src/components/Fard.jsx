import React from "react";

const Fard = ({ firstname, lastname, deleted }) => {
  return (
    <div onClick={deleted} style={{ cursor: "pointer" }}>
      <p>{`${firstname} ${lastname}`}</p>
      <hr />
    </div>
  );
};
export default Fard;
