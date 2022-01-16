import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './FormTask.module.scss';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Form from '../../components/Form/form';

function FormTask({ className, ...props }) {
    return (
        <div className={classNames(styles.formTask, className)} {...props}>
            <Header />
            <div className={classNames(styles.content, className)} {...props}>
                <h1>Form Task</h1>
                <Form />
            </div>
            <Footer />
        </div>
    );
}

FormTask.propTypes = {
    className: PropTypes.string,
};

export default FormTask;
