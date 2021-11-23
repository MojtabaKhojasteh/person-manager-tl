import react from "react";
const Header = ({ personLength, appTitle }) => {
  let badgeStyle = "";
  if (personLength <= 1) badgeStyle = "badge-danger";
  if (personLength <= 2) badgeStyle = "badge-warning";
  if (personLength >= 3) badgeStyle = "badge-success";
  return (
    <div>
      <div className="alert alert-info">
        <h2>{appTitle}</h2>
      </div>
      <div className="alert alert-light">
        <h5>
          تعداد اشخاص
          <span className={`badge badge-pill ${badgeStyle}`}>
            {personLength}
          </span>
          نفر می باشد
        </h5>
      </div>
    </div>
  );
};
export default Header;
