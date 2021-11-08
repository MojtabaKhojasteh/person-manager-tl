import React from "react";
import Fard from "./Fard.jsx";

const Afrad = ({ persons }) => {
  return (
    <div>
      {persons.map((fard) => (
        <Fard firstname={fard.firstname} lastname={fard.lastname} />
      ))}
    </div>
  );
};

export default Afrad;
