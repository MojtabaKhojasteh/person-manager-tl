import React, { Component } from "react";
import { ToastContainer, toast } from "react-toastify";
import Afrad from "./components/Afrad";
import "./App.css";
import Header from "./components/Header";
import NewPerson from "./components/NewPerson";
import SimpleContext from "./SimpleContext";

class App extends Component {
  state = {
    persons: [],
    newPerson: "",
    showPersons: true,
    appTitle: "مدیریت کننده اشخاص",
  };

  handleShowPersons = () => {
    this.setState({ showPersons: !this.state.showPersons });
  };

  handleDeletePerson = (id) => {
    const copyPersons = [...this.state.persons];
    const filteredPersons = copyPersons.filter((item) => item.id !== id);
    this.setState({ persons: filteredPersons });

    const index = copyPersons.findIndex((p) => p.id === id);
    toast.error(`${copyPersons[index].fullname} حذف گردید`);
  };

  personNameChange = (event, id) => {
    const copyPersons = [...this.state.persons];
    const index = copyPersons.findIndex((item) => item.id === id);
    copyPersons[index].fullname = event.target.value;
    this.setState({ persons: copyPersons });
  };

  handleNewPerson = () => {
    const copyPersons = [...this.state.persons];
    const person = {
      id: Math.floor(Math.random() * 1000),
      fullname: this.state.newPerson,
    };
    if (person.fullname !== "" && person.fullname !== " ") {
      copyPersons.push(person);
      this.setState({ persons: copyPersons, newPerson: "" });
      toast.success("شخص با موفقیت افزوده شد", {
        position: "bottom-right",
        closeButton: true,
        closeOnClick: true,
      });
    }
  };

  addPerson = (event) => {
    this.setState({ newPerson: event.target.value });
  };

  render() {
    const { showPersons } = this.state;

    let show = null;
    if (showPersons) {
      show = <Afrad />;
    }

    return (
      <SimpleContext.Provider
        value={{
          state: this.state,
          handleShowPersons: this.handleShowPersons,
          handleDeletePerson: this.handleDeletePerson,
          handleNewPerson: this.handleNewPerson,
          personNameChange: this.personNameChange,
          addPerson: this.addPerson,
        }}
      >
        <div className="rtl text-center">
          <Header />
          <NewPerson />

          <button
            onClick={this.handleShowPersons}
            className={showPersons ? "btn btn-info" : "btn btn-danger"}
          >
            نمایش اشخاص
          </button>

          {show}

          <ToastContainer bodyClassName="toastify" />
        </div>
      </SimpleContext.Provider>
    );
  }
}

export default App;
