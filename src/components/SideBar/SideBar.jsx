import "./SideBar.css";
import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

export default function SideBar({ onEditProfile, onLogout }) {
  const currentUser = useContext(CurrentUserContext);

  return (
    <aside className="sidebar">
      <div className="sidebar__user-container">
        <img
          src={currentUser.avatar}
          alt="Default Avatar"
          className="sidebar__avatar"
        />
        <p className="sidebar__username">{currentUser.name}</p>
      </div>

      <div className="sidebar__buttons-container">
        <button
          className="sidebar__change-profile-btn"
          onClick={onEditProfile}
          type="button"
        >
          Change profile data
        </button>

        <button
          className="sidebar__logout-btn"
          onClick={onLogout}
          type="button"
        >
          Log out
        </button>
      </div>
    </aside>
  );
}