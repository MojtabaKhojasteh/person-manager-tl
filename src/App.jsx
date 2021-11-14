import React, { Component } from "react";

import Afrad from "./components/Afrad";
import "./App.css";

class App extends Component {
  state = {
    persons: [
      { id: 1, fullname: "مجتبی خجسته" },
      { id: 2, fullname: "احد بیرامی" },
      { id: 3, fullname: "سجاد ظاهرنیا" },
    ],
    showPersons: false,
  };

  handleShowPersons = () => {
    this.setState({ showPersons: !this.state.showPersons });
  };

  handleDeletePerson = (id) => {
    const newPersons = [...this.state.persons];
    const filteredPersons = newPersons.filter((item) => item.id !== id);
    this.setState({ persons: filteredPersons });
  };

  personNameChange = (event, id) => {
    const newPersons = [...this.state.persons];
    const index = newPersons.findIndex((item) => item.id === id);
    newPersons[index].fullname = event.target.value;
    this.setState({ persons: newPersons });
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
    const buttonStyle = {
      padding: "1em",
      fontFamily: "BYekan",
      backgroundColor: "pink",
    };

    return (
      <div style={style}>
        <h2>مدیریت کننده اشخاص</h2>
        <h4>تعداد اشخاص {persons.length} نفر می باشد</h4>
        {show}
        <button style={buttonStyle} onClick={this.handleShowPersons}>
          نمایش اشخاص
        </button>
      </div>
    );
  }
}

export default App;
