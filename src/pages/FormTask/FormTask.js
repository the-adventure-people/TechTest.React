import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './FormTask.module.scss';

function FormTask({ className, ...props }) {
    return (
        <div className={classNames(styles.formTask, className)} {...props}>
            <h1>Form Task</h1>
        </div>
    );
}

FormTask.propTypes = {
    className: PropTypes.string,
};

export default FormTask;
