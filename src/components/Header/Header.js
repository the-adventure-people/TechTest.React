import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Header.module.scss';
import { NavLink } from 'react-router-dom';

function Header({ className, ...props }) {
    return (
        <nav className={classNames(styles.header, className)}>
            <NavLink to="/" className={styles.title}>
                Tech Test - React
            </NavLink>
            <ul className={styles.links}>
                <li>
                    <NavLink to="form-task">Form Task</NavLink>
                </li>
                <li>
                    <NavLink to="api-task">API Task</NavLink>
                </li>
            </ul>
        </nav>
    );
}

Header.propTypes = {
    className: PropTypes.string,
};

export default Header;
