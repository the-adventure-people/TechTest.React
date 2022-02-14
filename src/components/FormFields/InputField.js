import React from "react";
// eslint-disable-next-line no-unused-vars
import styles from "./InputField.module.scss";

const InputField = ({ label, type, name, required }) => {
  return (
    <div>
      <label htmlFor={label}>{label}</label>
      <input type={type} name={name} id={label} required={required} />
    </div>
  );
};

export default InputField;
