import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Footer.module.scss';

function Footer({ className }) {
    const year = new Date().getFullYear();
    return (
        <footer className={classNames(styles.footer, className)}>
            Copyright {year}
        </footer>
    );
}

Footer.propTypes = {
    className: PropTypes.string,
};

export default Footer;
