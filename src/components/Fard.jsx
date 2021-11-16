import React from "react";

const Fard = ({ fullname, deleted, changed }) => {
  return (
    <div className="card text-white bg-info mt-3 w-25 mx-auto">
      <div className="card-body text-center">
        <p className="d-block">{`${fullname}`}</p>
        <div className="input-group justify-content-center">
          <input
            type="text"
            className="form-control w-50"
            onChange={changed}
            placeholder="نام جدید"
          />
          <div className="input-group-prepend">
            <button
              className="btn btn-sm btn-danger fa fa-trash"
              onClick={deleted}
            ></button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Fard;
