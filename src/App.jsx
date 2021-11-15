import React, { Component } from "react";

import Afrad from "./components/Afrad";
import "./App.css";

class App extends Component {
  state = {
    persons: [],
    newPerson: "",
    showPersons: false,
  };

  handleShowPersons = () => {
    this.setState({ showPersons: !this.state.showPersons });
  };

  handleDeletePerson = (id) => {
    const copyPersons = [...this.state.persons];
    const filteredPersons = copyPersons.filter((item) => item.id !== id);
    this.setState({ persons: filteredPersons });
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
    copyPersons.push(person);
    this.setState({ persons: copyPersons, newPerson: "" });
  };
  addPerson = (event) => {
    this.setState({ newPerson: event.target.value });
  };
  render() {
    const { persons, showPersons } = this.state;

    let show = null;
    if (showPersons) {
      show = (
        <Afrad
          persons={persons}
          personDelete={this.handleDeletePerson}
          personChange={this.personNameChange}
        />
      );
    }

    const style = {
      textAlign: "center",
    };

    return (
      <div style={style}>
        <h2>مدیریت کننده اشخاص</h2>
        <h4>تعداد اشخاص {persons.length} نفر می باشد</h4>
        <div>
          <input
            type="text"
            placeholder="اضافه کردن شخص جدید"
            style={{ direction: "rtl" }}
            onChange={this.addPerson}
            value={this.state.newPerson}
          />
          <button onClick={this.handleNewPerson}>اضافه کن</button>
        </div>
        <button
          className="btn btn-sm btn-success  fa fa-plus-square"
          onClick={this.handleShowPersons}
        ></button>
        {show}
      </div>
    );
  }
}

export default App;
