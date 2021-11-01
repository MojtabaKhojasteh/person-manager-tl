import React, { Component } from "react";
import Person from "./components/Person";
import "./App.css";

class App extends Component {
  state = {
    persons: [
      { firstname: "mojtaba", lastname: "khojasteh", age: 31 },
      { firstname: "ali", lastname: "akbari", age: 25 },
      { firstname: "amin", lastname: "hoseyni", age: 40 },
    ],
  };

  handlePersonsChange = () => {
      this.setState({
        persons: [
          { firstname: "ahad", lastname: "beyrami", age: 31 },
          { firstname: "sam", lastname: "khosravi", age: 25 },
          { firstname: "sajjad", lastname: "zahernia", age: 40 },
        ],
      }
      );
  };
  
  render() {

    const style={
      color:"red",
    };
    return (
      <div className="App" style={style}>
        <h1>سلام دنیا </h1>
        {this.state.persons.map((fard) => (
          <Person
            firstname={fard.firstname}
            lastname={fard.lastname}
            age={fard.age}
          />
        ))}
        <button onClick={this.handlePersonsChange}>تغییر بده</button>
      </div>
    );
  }
}

export default App;
