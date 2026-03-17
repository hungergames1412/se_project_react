import { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import { getWeather, filterWeatherData } from "../../utils/weatherApi";
import { coordinates, APIkey } from "../../utils/constants";
import {
  addItem,
  getItems,
  removeItem,
  updateProfileData,
  addCardLike,
  removeCardLike,
} from "../../utils/api";
import { signin, signup, getUserData } from "../../utils/auth";

import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";
import CurrentUserContext from "../../contexts/CurrentUserContext";

import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Profile from "../Profile/Profile";
import Footer from "../Footer/Footer";
import AddItemModal from "../AddItemModal/AddItemModal";
import ItemModal from "../ItemModal/ItemModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import LoginModal from "../LoginModal/LoginModal";
import EditProfileModal from "../EditProfileModal/EditProfileModal";
import { ProtectedRoute } from "../ProtectedRoute/ProtectedRoute";

function App() {
  const [weatherData, setWeatherData] = useState({
    type: "",
    temp: { F: 999, C: 999 },
    city: "",
    condition: "",
    isDay: false,
  });

  const [clothingItems, setClothingItems] = useState([]);
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    getWeather(coordinates, APIkey)
      .then((data) => {
        const filteredData = filterWeatherData(data);
        setWeatherData(filteredData);
      })
      .catch((err) => {
        console.error("Failed to fetch weather data:", err);
      });
  }, []);

  useEffect(() => {
    getItems()
      .then((data) => {
        setClothingItems([...data].reverse()); 
      })
      .catch((err) => {
        console.error("Failed to fetch clothing items:", err);
      });
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (token) {
      getUserData(token)
        .then((user) => {
          setCurrentUser(user);
          setIsLoggedIn(true);
        })
        .catch((err) => {
          console.error("Token validation failed:", err);
          localStorage.removeItem("jwt");
        });
    }
  }, []);

  const handleCardClick = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const handleAddClick = () => setActiveModal("add-garment");
  const handleSignupClick = () => setActiveModal("new-user");
  const handleLoginClick = () => setActiveModal("login-user");
  const handleEditProfileClick = () => setActiveModal("edit-profile");

  const handleToggleSwitchChange = () => {
    setCurrentTemperatureUnit((prev) => (prev === "F" ? "C" : "F"));
  };

  const handleLogout = () => {
    localStorage.removeItem("jwt");
    setIsLoggedIn(false);
    setCurrentUser({});
    navigate("/");
  };

  const handleCardLike = ({ id, isLiked }) => {
    const token = localStorage.getItem("jwt");

    const request = !isLiked
      ? addCardLike(id, token)
      : removeCardLike(id, token);

    request
      .then((updatedCard) => {
        setClothingItems((cards) =>
          cards.map((card) =>
            card._id === updatedCard.data._id ? updatedCard.data : card,
          ),
        );
      })
      .catch(console.error);
  };

  const handleRegistration = (userData) => {
    signup({
      name: userData.name,
      avatar: userData.avatar,
      email: userData.email,
      password: userData.password,
    })
      .then(() => {
        return signin({
          email: userData.email,
          password: userData.password,
        });
      })
      .then((res) => {
        localStorage.setItem("jwt", res.token);
        return getUserData(res.token);
      })
      .then((userData) => {
        setCurrentUser(userData);
        setIsLoggedIn(true);
        closeActiveModal();
      })
      .catch(console.error);
  };

  const handleLogin = ({ email, password }) => {
    signin({ email, password })
      .then((res) => {
        localStorage.setItem("jwt", res.token);
        return getUserData(res.token);
      })
      .then((userData) => {
        setCurrentUser(userData);
        setIsLoggedIn(true);
        closeActiveModal();
      })
      .catch(console.error);
  };

  const handleAddItemSubmit = (inputValues) => {
    const token = localStorage.getItem("jwt");

    const newCardData = {
      name: inputValues.name,
      imageUrl: inputValues.imageUrl,
      weather: inputValues.weather,
    };

    addItem(newCardData, token)
      .then((data) => {
        setClothingItems((prev) => [data, ...prev]); 
        closeActiveModal();
      })
      .catch(console.error);
  };

  const handleDeleteClick = () => {
    const token = localStorage.getItem("jwt");

    removeItem(selectedCard._id, token)
      .then(() => {
        setClothingItems((prev) =>
          prev.filter((item) => item._id !== selectedCard._id),
        );
        closeActiveModal(); // ✅ fixed
      })
      .catch(console.error);
  };

  const closeActiveModal = () => setActiveModal("");

  const handleEditSubmit = ({ name, avatar }) => {
    const token = localStorage.getItem("jwt");

    updateProfileData({ token, name, avatar })
      .then(({ name, avatar }) => {
        setCurrentUser((prev) => ({ ...prev, name, avatar }));
        closeActiveModal();
      })
      .catch(console.error);
  };

  const onSecondaryButtonClick = () => {
    setActiveModal((prev) =>
      prev === "login-user" ? "new-user" : "login-user",
    );
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <CurrentTemperatureUnitContext.Provider
        value={{ currentTemperatureUnit, handleToggleSwitchChange }}
      >
        <div className="page">
          <div className="page__content">
            <Header
              handleAddClick={handleAddClick}
              handleSignupClick={handleSignupClick}
              handleLoginClick={handleLoginClick}
              weatherData={weatherData}
              isLoggedIn={isLoggedIn}
            />

            <Routes>
              <Route
                path="/"
                element={
                  <Main
                    weatherData={weatherData}
                    handleCardClick={handleCardClick}
                    clothingItems={clothingItems}
                    onCardLike={handleCardLike}
                    isLoggedIn={isLoggedIn}
                  />
                }
              />

              <Route
                path="/profile"
                element={
                  <ProtectedRoute isLoggedIn={isLoggedIn}>
                    <Profile
                      clothingItems={clothingItems}
                      handleCardClick={handleCardClick}
                      handleAddClick={handleAddClick}
                      currentUser={currentUser}
                      onEditProfile={handleEditProfileClick}
                      onLogout={handleLogout}
                      isLoggedIn={isLoggedIn}
                      onCardLike={handleCardLike}
                    />
                  </ProtectedRoute>
                }
              />
            </Routes>

            <Footer />
          </div>

          <AddItemModal
            isOpen={activeModal === "add-garment"}
            closeActiveModal={closeActiveModal}
            handleAddItemSubmit={handleAddItemSubmit}
          />

          <ItemModal
            activeModal={activeModal}
            card={selectedCard}
            closeActiveModal={closeActiveModal}
            handleDeleteClick={handleDeleteClick}
            currentUser={currentUser}
            isOpen={activeModal === "preview"}
          />

          <RegisterModal
            isOpen={activeModal === "new-user"}
            closeActiveModal={closeActiveModal}
            onSubmit={handleRegistration}
            onSecondButtonClick={onSecondaryButtonClick}
          />

          <LoginModal
            isOpen={activeModal === "login-user"}
            closeActiveModal={closeActiveModal}
            onLoginModalSubmit={handleLogin}
            onSecondButtonClick={onSecondaryButtonClick}
          />

          <EditProfileModal
            closeActiveModal={closeActiveModal}
            onEditModalSubmit={handleEditSubmit}
            isOpen={activeModal === "edit-profile"}
          />
        </div>
      </CurrentTemperatureUnitContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;
