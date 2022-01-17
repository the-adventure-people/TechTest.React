import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './FormTaskSuccess.module.scss';

function FormTaskSuccess({ className, ...props }) {
    return (
        <div
            className={classNames(styles.formTaskSuccess, className)}
            {...props}>
            <div className={classNames(styles.content, className)} {...props}>
                <h1>Form Task Success</h1>
                <p>You successfully submitted the form!</p>
            </div>
        </div>
    );
}

FormTaskSuccess.propTypes = {
    className: PropTypes.string,
};

export default FormTaskSuccess;
