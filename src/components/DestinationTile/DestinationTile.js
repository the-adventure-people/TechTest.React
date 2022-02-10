import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './DestinationTile.module.scss';

function DestinationTile({ className, name,  image, country, continent}) {
    
    return (
        <div className={classNames(styles.destinationTile, className)}>
            <div>
                <img src={image + "?max-w=400&fit=crop&h=400&max-w=400"} alt={name} />
                <p>Name: {name}</p>
                <p>Country: {country}</p>
                <p>Continent: {continent}</p>
            </div>
        </div>
    );
}

DestinationTile.propTypes = {
    name: PropTypes.string,
    image: PropTypes.string,
    country: PropTypes.string,
    continent: PropTypes.string,
};

export default DestinationTile;
