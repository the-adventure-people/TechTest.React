import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './FormTaskSuccess.module.scss';
import Layout from '../../components/Layout/Layout';

function FormTaskSuccess({ className }) {
    return (
        <Layout>
            <div
                className={classNames(styles.formTaskSuccess, className)}>
                <h1>Form Task Success</h1>
                <p>You successfully submitted the form!</p>
            </div>
        </Layout>
    );
}

FormTaskSuccess.propTypes = {
    className: PropTypes.string,
};

export default FormTaskSuccess;
