import React, { useContext } from "react";
import SimpleContext from "../SimpleContext.js";
import Fard from "./Fard.jsx";

const Afrad = () => {
  const context = useContext(SimpleContext);
  const { persons } = context.state;

  return (
    <div>
      {persons.map((fard) => (
        <Fard
          key={fard.id}
          deleted={() => context.handleDeletePerson(fard.id)}
          changed={(event) => context.personNameChange(event, fard.id)}
        />
      ))}
    </div>
  );
};

export default Afrad;
