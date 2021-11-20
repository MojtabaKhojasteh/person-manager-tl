import React, { Component } from "react";
import { ToastContainer, toast } from "react-toastify";
import Afrad from "./components/Afrad";

class App extends Component {
  state = {
    persons: [],
    newPerson: "",
    showPersons: true,
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
    const { persons, showPersons } = this.state;

    let show = null;

    let badgeStyle = "";
    if (persons.length <= 1) badgeStyle = "badge-danger";
    if (persons.length <= 2) badgeStyle = "badge-warning";
    if (persons.length >= 3) badgeStyle = "badge-success";

    if (showPersons) {
      show = (
        <Afrad
          persons={persons}
          personDelete={this.handleDeletePerson}
          personChange={this.personNameChange}
        />
      );
    }

    return (
      <div className="rtl text-center">
        <ToastContainer />;
        <div className="alert alert-info">
          <h2>مدیریت کننده اشخاص</h2>
        </div>
        <div className="alert alert-light">
          <h5>
            تعداد اشخاص
            <span className={`badge badge-pill ${badgeStyle}`}>
              {persons.length}
            </span>
            نفر می باشد
          </h5>
        </div>
        <div className="m-2 p-2">
          <form
            className="form-inline justify-content-center"
            onSubmit={(event) => event.preventDefault()}
          >
            <div className="input-group w-25">
              <input
                type="text"
                className="form-control"
                placeholder="اسم بهم بده"
                onChange={this.addPerson}
                value={this.state.newPerson}
              />
              <div className="input-group-prepend">
                <button
                  type="submit"
                  onClick={this.handleNewPerson}
                  className="btn btn-sm btn-success fa fa-plus-square"
                ></button>
              </div>
            </div>
          </form>
        </div>
        <button
          onClick={this.handleShowPersons}
          className={showPersons ? "btn btn-info" : "btn btn-danger"}
        >
          نمایش اشخاص
        </button>
        {show}
      </div>
    );
  }
}

export default App;
