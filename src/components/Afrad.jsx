import React from "react";
import Fard from "./Fard.jsx";

const Afrad = ({ persons, personDelete }) => {
  return (
    <div>
      {persons.map((fard) => (
        <Fard
          key={fard.id}
          firstname={fard.firstname}
          lastname={fard.lastname}
          deleted={() => personDelete(fard.id)}
        />
      ))}
    </div>
  );
};

export default Afrad;
