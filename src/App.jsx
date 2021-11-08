import React, { Component } from "react";

import Afrad from "./components/Afrad";
import "./App.css";

class App extends Component {
  state = {
    persons: [
      { firstname: "مجتبی", lastname: "خجسته" },
      { firstname: "احد", lastname: "بیرامی" },
      { firstname: "سجاد", lastname: "ظاهرنیا" },
    ],
    showPersons: false,
  };

  handleShowPersons = () => {
    this.setState({ showPersons: !this.state.showPersons });
  };
  render() {
    const { persons, showPersons } = this.state;

    let show = null;
    if (showPersons) {
      show = <Afrad persons={persons} />;
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
