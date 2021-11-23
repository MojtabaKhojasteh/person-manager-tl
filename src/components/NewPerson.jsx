import React, { useContext } from "react";
import SimpleContext from "../SimpleContext";

const NewPerson = () => {
  const context = useContext(SimpleContext);
  const { newPerson } = context.state;
  return (
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
            onChange={context.addPerson}
            value={newPerson}
          />
          <div className="input-group-prepend">
            <button
              type="submit"
              onClick={context.handleNewPerson}
              className="btn btn-sm btn-success fa fa-plus-square"
            ></button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default NewPerson;
