import React from 'react';
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import classNames from 'classnames';
import styles from './Form.module.scss';
import { useState } from 'react/cjs/react.development';

const FormComponent = (className) => {
  const [valid, setValidity] = useState(false);
  return (
    <Formik
      initialValues={{ firstName: '', lastName: '', email: '' }}
      validate={values => {
        const errors = {};
        if (!values.firstName) {
          errors.firstName = 'Required';
        }

        if (!values.lastName) {
          errors.lastName = 'Required';
        }

        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        if (Object.keys(errors).length === 0) {
          console.log('no errors')
          setValidity(true);
        } else {
          console.log('errors')
          setValidity(false);
        }
        return errors;
      }}
      onSubmit={(values) => {
        console.log(values)
        axios.post('https://reqbin.com/echo/post/json', { values })
          .then((response) => {
            console.log(response)
            window.location = '/form-task/success'
          }, 1000)
          .catch(error => {
            console.log(error)
            alert(error)
          });
      }}
    >
      {() => (
        <Form className={classNames(styles.form, className)}>
        <h2>Please complete the fields below</h2>
          <div className={classNames(styles.field, className)}>
            <Field type="text" placeholder="First Name" name="firstName" />
            <ErrorMessage className={classNames(styles.error, className)} name="firstName" component="div" />
          </div>
          <div className={classNames(styles.field, className)}>
            <Field type="text" placeholder="Last Name" name="lastName" />
            <ErrorMessage className={classNames(styles.error, className)} name="lastName" component="div" />
          </div>
          <div className={classNames(styles.field, className)}>
            <Field type="email" placeholder="Email" name="email" />
            <ErrorMessage className={classNames(styles.error, className)} name="email" component="div" />
          </div>
          <button type="submit" disabled={!valid}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  )
}

export default FormComponent;