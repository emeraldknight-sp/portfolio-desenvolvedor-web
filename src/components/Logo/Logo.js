import { Link } from "react-router-dom";

import LogoUrl from "../../images/png/emerald.png";

import "./Logo.style.css";

export const Logo = () => {

  return (
    <Link to="/" className="logo">
      <figure>
        <img className="image" src={LogoUrl} alt="logo" />
      </figure>
      <h5 className="title">David Almeida</h5>
    </Link>
  );
};
