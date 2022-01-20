import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {homepage, content} from './Homepage.module.scss';

function Homepage({ className, ...props }) {
    return (
        <div className={homepage} {...props}>
            <div className={content}>
                <h1>Tech Test - React</h1>
            </div>
        </div>
    );
}

Homepage.propTypes = {
    className: PropTypes.string,
};

export default Homepage;
