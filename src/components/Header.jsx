import React, { useContext } from "react";
import SimpleContext from "../SimpleContext";

const Header = ({ appTitle }) => {
  const context = useContext(SimpleContext);
  const { persons } = context;

  let badgeStyle = "";
  if (persons.length <= 1) badgeStyle = "badge-danger";
  if (persons.length <= 2) badgeStyle = "badge-warning";
  if (persons.length >= 3) badgeStyle = "badge-success";

  return (
    <div>
      <div className="alert alert-info">
        <h2>{appTitle}</h2>
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
    </div>
  );
};
export default Header;
