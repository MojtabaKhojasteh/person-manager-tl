import React, { createContext } from "react";

const SimpleContext = createContext({
    state: {},
    handleShowPersons: () => {},
    handleDeletePerson: () => {},
    handleNewPerson: () => {},
    personNameChange: () => {},
    addPerson: () => {},
});

export default SimpleContext;