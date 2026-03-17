import { useState, useEffect } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

export default function LogInModal({
  isOpen,
  onClose,
  handleLogin,
  handleRegisterClick,
}) {
  const { values, handleChange, errors, isValid, resetForm } =
    useFormAndValidation();

  useEffect(() => {
    if (isOpen) {
      resetForm();
    }
  }, [isOpen, resetForm]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onLoginModalSubmit({ email, password });
  };

  const switchModal = () => onSecondButtonClick();

  return (
    <ModalWithForm
      title="Log In"
      buttonText="Log In"
      secondButtonText="or Register"
      closeActiveModal={closeActiveModal}
      isOpen={isOpen}
      onSubmit={handleSubmit}
      switchModal={switchModal}
      onSecondButtonClick={onSecondButtonClick}
    >
      <label htmlFor="login-email" className="modal__label">
        Email*
        <input
          type="email"
          name="email"
          className="modal__input"
          id="login-email"
          placeholder="Enter your email"
          value={email}
          onChange={handleEmailChange}
          required
        />
      </label>

      <label htmlFor="login-password" className="modal__label">
        Password*
        <input
          type="password"
          name="password"
          className="modal__input"
          id="login-password"
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
