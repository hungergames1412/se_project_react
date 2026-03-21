import "./Header.css";
import { NavLink } from "react-router-dom";
import { useContext } from "react";

import logo from "../../assets/logo.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function Header({
  handleAddClick,
  weatherData,
  isLoggedIn,
  handleSignupClick,
  handleLoginClick,
}) {
  const currentUser = useContext(CurrentUserContext);

  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <div className="header__left">
        <NavLink to="/" className="header__logo-link">
          <img src={logo} alt="WTWR logo" className="header__logo" />
        </NavLink>
      </div>

      <p className="header__date">
        {currentDate}, {weatherData?.city}
      </p>

      <div className="header__right">
        <ToggleSwitch />

        {!isLoggedIn ? (
          <>
            <button
              className="header__signup-btn"
              onClick={handleSignupClick}
              type="button"
            >
              Sign Up
            </button>

            <button
              className="header__login-btn"
              onClick={handleLoginClick}
              type="button"
            >
              Log In
            </button>
          </>
        ) : (
          <>
            <button
              className="header__add-btn"
              onClick={handleAddClick}
              type="button"
            >
              + Add clothes
            </button>

            <NavLink to="/profile" className="header__profile">
              <p className="header__username">{currentUser?.name}</p>

              <img
                src={currentUser?.avatar}
                alt="avatar"
                className="header__avatar"
              />
            </NavLink>
          </>
        )}
      </div>
    </header>
  );
}

export default Header;
