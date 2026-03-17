import { useState, useEffect } from "react";

import ModalWithForm from "../ModalWithForm/ModalWithForm";

export default function LoginModal({
  closeActiveModal,
  isOpen,
  onLoginModalSubmit,
  onSecondButtonClick,
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (isOpen) {
      setEmail("");
      setPassword("");
    }
  }, [isOpen]);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onLoginModalSubmit({ email, password });
  };

  const switchModal = () => {
    onSecondButtonClick();
  };

  return (
    <ModalWithForm
      title="Log In"
      buttonText="Log In"
      secondButtonText={"or Register"}
      closeActiveModal={closeActiveModal}
      isOpen={isOpen}
      onSubmit={handleSubmit}
      switchModal={switchModal}
      onSecondButtonClick={onSecondButtonClick}
    >
      <label htmlFor="email" className="modal__label">
        Email*
        <input
          type="email"
          name="email"
          className="modal__input"
          id="email"
          placeholder="Enter your email"
          value={email}
          onChange={handleEmailChange}
          required
        />
      </label>
      <label htmlFor="password" className="modal__label">
        Password*
        <input
          type="password"
          name="password"
          className="modal__input"
          id="password"
          placeholder="Enter your password"
          minLength={8}
          maxLength={16}
          value={password}
          onChange={handlePasswordChange}
          required
        />
      </label>
    </ModalWithForm>
  );
}
