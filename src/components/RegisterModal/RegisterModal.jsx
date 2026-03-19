import { useEffect } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useForm } from "../../hooks/useForm"; 

export default function RegisterModal({
  isOpen,
  closeActiveModal,
  onSubmit,
  onSecondButtonClick,
  handleSignupClick,
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
      formType="signup"
      isOpen={isOpen}
      closeActiveModal={closeActiveModal}
      onSubmit={handleSubmit}
      secondButtonText="or Log in"
      onSecondButtonClick={onSecondButtonClick}
      handleSignupClick={handleSignupClick}
    >
      <label htmlFor="email" className="modal__label">
        Email*
        <input
          type="email"
          name="email"
          className="modal__input"
          id="email"
          placeholder="Email"
          required
          onChange={handleChange}
          value={values.email}
        />
      </label>

      <label htmlFor="password" className="modal__label">
        Password*
        <input
          type="password"
          name="password"
          className="modal__input"
          required
          minLength={8}
          maxLength={16}
          id="password"
          placeholder="Password"
          onChange={handleChange}
          value={values.password}
        />
      </label>

      <label htmlFor="name" className="modal__label">
        Name*
        <input
          type="text"
          name="name"
          className="modal__input"
          id="name"
          placeholder="Name"
          onChange={handleChange}
          value={values.name}
          required
        />
      </label>

      <label htmlFor="avatar" className="modal__label">
        Avatar URL*
        <input
          type="url"
          name="avatar"
          className="modal__input"
          id="avatar"
          placeholder="Avatar URL"
          onChange={handleChange}
          value={values.avatar}
          required
        />
      </label>
    </ModalWithForm>
  );
}