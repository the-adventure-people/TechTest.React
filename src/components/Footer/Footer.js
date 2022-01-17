import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Footer.module.scss';

function Footer({ className, ...props }) {
    const year = new Date().getFullYear();
    return (
        <footer className={classNames(styles.footer, className)} {...props}>
            <p>Copyright {year}</p>
        </footer>
    );
}

Footer.propTypes = {
    className: PropTypes.string,
};

export default Footer;
