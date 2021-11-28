import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Afrad from "./components/Afrad";
import "./App.css";
import Header from "./components/Header";
import NewPerson from "./components/NewPerson";
import SimpleContext from "./SimpleContext";

const App = () => {
  const [getPersons, setPersons] = useState([]);
  const [getNewPerson, setNewPerson] = useState("");
  const [getShowPerson, setShowPerson] = useState(true);

  const handleShowPersons = () => {
    setShowPerson(!getShowPerson);
  };

  const handleDeletePerson = (id) => {
    const copyPersons = [...getPersons];
    const filteredPersons = copyPersons.filter((item) => item.id !== id);
    setPersons(filteredPersons);

    const index = copyPersons.findIndex((p) => p.id === id);
    toast.error(`${copyPersons[index].fullname} حذف گردید`);
  };

  const personNameChange = (event, id) => {
    const copyPersons = [...getPersons];
    const index = copyPersons.findIndex((item) => item.id === id);
    copyPersons[index].fullname = event.target.value;
    setPersons(copyPersons);
  };

  const handleNewPerson = () => {
    const copyPersons = [...getPersons];
    const person = {
      id: Math.floor(Math.random() * 1000),
      fullname: getNewPerson,
    };
    if (person.fullname !== "" && person.fullname !== " ") {
      copyPersons.push(person);
      setPersons(copyPersons);
      setNewPerson("");
      toast.success("شخص با موفقیت افزوده شد", {
        position: "bottom-right",
        closeButton: true,
        closeOnClick: true,
      });
    }
  };

  const addPerson = (event) => {
    setNewPerson(event.target.value);
  };

  return (
    <SimpleContext.Provider
      value={{
        persons: getPersons,
        newPerson: getNewPerson,
        handleShowPersons: handleShowPersons,
        handleDeletePerson: handleDeletePerson,
        handleNewPerson: handleNewPerson,
        personNameChange: personNameChange,
        addPerson: addPerson,
      }}
    >
      <div className="rtl text-center">
        <Header appTitle="مدیریت کننده اشخاص" />
        <NewPerson />

        <button
          onClick={handleShowPersons}
          className={getShowPerson ? "btn btn-info" : "btn btn-danger"}
        >
          نمایش اشخاص
        </button>

        {getShowPerson ? <Afrad /> : null}

        <ToastContainer bodyClassName="toastify" />
      </div>
    </SimpleContext.Provider>
  );
};
export default App;
