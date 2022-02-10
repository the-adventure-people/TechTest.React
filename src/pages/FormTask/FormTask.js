import React from 'react';
import { useHistory } from "react-router-dom";
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './FormTask.module.scss';
import Layout from '../../components/Layout/Layout';
import { useForm } from "react-hook-form";
import axios from "axios";

function FormTask({ className }) {
    const history = useHistory();
    const { register, handleSubmit, formState: { errors } } = useForm();
    
    const submittedForm = (data) => {
        console.log(data);
        axios.post('https://reqbin.com/echo/post/json', {
            'First name': data.firstName,
            'Last name': data.lastName,
            'Email': data.email,
        }).then(res=>{
            if(res.status === 200 && res.data.success === 'true'){
                history.push("/form-task/success");
            }
        });
    };

    return (
        <Layout>
            <div className={classNames(styles.formTask, className)}>
                <h1>Form Task</h1>

                <form onSubmit = { handleSubmit(submittedForm) }>
                    <div>
                        <label> First Name:</label>
                        <input {...register("firstName", { required: true, maxLength: 20 })} type = "text" />
                        {errors.firstName && <span className={classNames(styles.error, className)}>First Name empty</span>}
                    </div>

                    <div>
                        <label> Last Name:</label>
                        <input {...register("lastName", { required: true, maxLength: 20 })} type = "text" />
                        {errors.lastName && <span className={classNames(styles.error, className)}>Last Name empty</span>}
                    </div>

                    <div>
                        <label>Email:</label>
                            <input {...register("email",
                            {
                                required: true,
                                pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                            })} type = "text" />
                            {errors.email && <span className={classNames(styles.error, className)}>Email wrong</span>}
                    </div>

                    <button type = "submit"> Submit </button>

                </form>
            </div>
        </Layout>
    );
}

FormTask.propTypes = {
    className: PropTypes.string,
};

export default FormTask;
