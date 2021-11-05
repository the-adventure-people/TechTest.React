import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './ApiTask.module.scss';

function ApiTask({ className, ...props }) {
    return (
        <div className={classNames(styles.apiTask, className)} {...props}>
            <h1>API Task</h1>
        </div>
    );
}

ApiTask.propTypes = {
    className: PropTypes.string,
};

export default ApiTask;
