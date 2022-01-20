import { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {destinationCard, card, location, title, bottom, apiTask, content, destinationWrap} from './ApiTask.module.scss';

const DestinationComponent = (data, className) => {
    let newData = data.data;
    return (
        <div className={destinationCard}>
            <div className={card}>
                <img src={newData.image} alt={newData.name} />
                <div className={location}>
                    <p className={title}>{newData.name}</p>
                    <div>
                        <p>{newData.country}</p> -
                        <p>{newData.continent}</p>
                    </div>
                </div>
                <div className={bottom}>
                    <p>Description would go here...</p>
                    <p>Price: </p>
                    <button>Book now</button>
                </div>
            </div>

        </div>
    )

}

function ApiTask({ className, ...props }) {
    const [data, setData] = useState([]);
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(async () => {
        fetch('http://s3.eu-west-2.amazonaws.com/tap.techtest/destinations.json')
            .then(response => response.json())
            .then(data => setData(data.destinations))
            .catch(error => {
                console.error('error fetching test', error)
        })

    }, []);
    return (
        <div className={apiTask}>
            <div className={content}>
                <h1>API Task</h1>
                <div className={destinationWrap}>
                {data.map(function(d){
                    return (
                            <DestinationComponent key={d.name} data={d} />
                    )
                })} 
                </div>
            </div>
        </div>
    );
}

ApiTask.propTypes = {
    className: PropTypes.string,
};

export default ApiTask;
