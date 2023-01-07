import { useNavigate } from "react-router-dom";

import LogoUrl from "../../images/png/emerald.png";

import "./Logo.style.css";

export const Logo = () => {
  const navigate = useNavigate();

  return (
    <a href="/" className="logo" onClick={() => navigate("/")}>
      <figure>
        <img className="image" src={LogoUrl} alt="logo" />
      </figure>
      <h5 className="title">David Almeida</h5>
    </a>
  );
};
