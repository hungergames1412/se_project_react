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

  const renderAvatar = () => {
    if (currentUser?.avatar) {
      return (
        <img
          src={currentUser.avatar}
          alt={currentUser.name}
          className="header__avatar"
        />
      );
    }

    const initial = currentUser?.name?.[0]?.toUpperCase() || "?";

    return (
      <div className="header__avatar header__avatar_placeholder">{initial}</div>
    );
  };

  return (
    <header className="header">
      <NavLink className="header__nav-link" to="/">
        <img className="header__logo" src={logo} alt="WTWR logo" />
      </NavLink>

      <p className="header__date-and-location">
        {currentDate}, {weatherData?.city}
      </p>

      <div className="header__right">
        {isLoggedIn ? (
          <div className="header__controls">
            <ToggleSwitch />

            <button
              onClick={handleAddClick}
              type="button"
              className="header__add-clothes-btn"
            >
              + Add clothes
            </button>

            <NavLink to="/profile" className="header__nav-link">
              <div className="header__profile-container">
                <p className="header__username">{currentUser?.name}</p>
                {renderAvatar()}
              </div>
            </NavLink>
          </div>
        ) : (
          <div className="header__controls">
            <ToggleSwitch />

            <button
              className="header__signup-button"
              onClick={handleSignupClick}
              type="button"
            >
              Sign Up
            </button>

            <button
              className="header__login-button"
              onClick={handleLoginClick}
              type="button"
            >
              Login
            </button>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
