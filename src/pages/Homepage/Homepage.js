import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Homepage.module.scss';

function Homepage({ className, ...props }) {
    return (
        <div className={classNames(styles.homepage, className)} {...props}>
            <div className={classNames(styles.content, className)} {...props}>
                <h1>Tech Test - React</h1>
            </div>
        </div>
    );
}

Homepage.propTypes = {
    className: PropTypes.string,
};

export default Homepage;
