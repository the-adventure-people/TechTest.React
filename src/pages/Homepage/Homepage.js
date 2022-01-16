import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Homepage.module.scss';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

function Homepage({ className, ...props }) {
    return (
        <div className={classNames(styles.homepage, className)} {...props}>
            <Header />
            <div className={classNames(styles.content, className)} {...props}>
                <h1>Tech Test - React</h1>
            </div>
            <Footer />
        </div>
    );
}

Homepage.propTypes = {
    className: PropTypes.string,
};

export default Homepage;
