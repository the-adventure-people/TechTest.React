import React from "react";
import Layout from "../../components/Layout/Layout";
import InputField from "../../components/FormFields/InputField";
import axios from "axios";
import { useHistory } from "react-router-dom";

const FormTask = () => {
  const history = useHistory();
  const handleSubmit = (evt) => {
  
    evt.preventDefault();
    const postForm = "https://reqbin.com/echo/post/json";
    const postData = {
      firstname: evt.target[0].value,
      lastname: evt.target[1].value,
      email: evt.target[2].value,
    };
    axios.post(postForm, postData).then(() => {
      history.push("/form-task/success");
    });
  };
  
  return (
    <Layout>
      <h1>Form Task</h1>
      <form onSubmit={handleSubmit}>
        <InputField label="First Name" required />
        <InputField label="Last Name" required />
        <InputField label="Email" required />
        <input type="submit" value="Submit" />
      </form>
    </Layout>
  );
};

export default FormTask;
