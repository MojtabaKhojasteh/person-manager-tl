import React from "react";
import "./Fard.css";

const Fard = ({ fullname, deleted, changed }) => {
  return (
    <div className="fard">
      <p>{`${fullname}`}</p>
      <input type="text" onChange={changed} placeholder="نام جدید" />
      <button onClick={deleted}>حذف</button>
    </div>
  );
};
export default Fard;
