import React from "react";
import Fard from "./Fard.jsx";

const Afrad = ({ persons, personDelete, personChange }) => {
  return (
    <div>
      {persons.map((fard) => (
        <Fard
          key={fard.id}
          fullname={fard.fullname}
          deleted={() => personDelete(fard.id)}
          changed={(event) => personChange(event, fard.id)}
        />
      ))}
    </div>
  );
};

export default Afrad;
