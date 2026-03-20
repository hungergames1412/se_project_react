import { useEffect } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useForm } from "../../hooks/useForm";

export default function RegisterModal({
  isOpen,
  closeActiveModal,
  onSubmit,
  onSecondButtonClick,
}) {
  const { values, setValues, handleChange } = useForm({
    name: "",
    avatar: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    if (isOpen) {
      setValues({ name: "", avatar: "", email: "", password: "" });
    }
  }, [isOpen, setValues]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(values);
  };

  return (
    <ModalWithForm
      title="Sign Up"
      buttonText="Sign Up"
      isOpen={isOpen}
      closeActiveModal={closeActiveModal}
      onSubmit={handleSubmit}
      secondButtonText="or Log in"
      onSecondButtonClick={onSecondButtonClick}
    >
      {/*Corrected order*/}

      <label htmlFor="signup-name" className="modal__label">
        Name*
        <input
          type="text"
          name="name"
          className="modal__input"
          id="signup-name"
          placeholder="Name"
          value={values.name}
          onChange={handleChange}
          required
        />
      </label>

      <label htmlFor="signup-avatar" className="modal__label">
        Avatar URL*
        <input
          type="url"
          name="avatar"
          className="modal__input"
          id="signup-avatar"
          placeholder="Avatar URL"
          value={values.avatar}
          onChange={handleChange}
          required
        />
      </label>

      <label htmlFor="signup-email" className="modal__label">
        Email*
        <input
          type="email"
          name="email"
          className="modal__input"
          id="signup-email"
          placeholder="Email"
          value={values.email}
          onChange={handleChange}
          required
        />
      </label>

      <label htmlFor="signup-password" className="modal__label">
        Password*
        <input
          type="password"
          name="password"
          className="modal__input"
          id="signup-password"
          placeholder="Password"
          minLength={8}
          maxLength={16}
          value={values.password}
          onChange={handleChange}
          required
        />
      </label>
    </ModalWithForm>
  );
}