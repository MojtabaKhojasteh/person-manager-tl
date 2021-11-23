import { createContext } from "react";

const SimpleContext = createContext({
    persons: [],
    newPerson: "",
    handleShowPersons: () => {},
    handleDeletePerson: () => {},
    handleNewPerson: () => {},
    personNameChange: () => {},
    addPerson: () => {},
});

export default SimpleContext;