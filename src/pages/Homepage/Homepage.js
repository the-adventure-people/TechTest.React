import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Homepage.module.scss';
import Layout from '../../components/Layout/Layout';

function Homepage({ className }) {
    
    return (
        <>
        <Layout>
            <div className={classNames(styles.homepage, className)}>
                <h1>Tech Test - React</h1>
                
            </div>
        </Layout>
        </>
    );
}

Homepage.propTypes = {
    className: PropTypes.string,
};

export default Homepage;
