import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './ApiTask.module.scss';
import Layout from '../../components/Layout/Layout';
import axios from "axios";
import DestinationTile from '../../components/DestinationTile/DestinationTile';

const apiURL='https://s3.eu-west-2.amazonaws.com/tap.techtest/destinations.json';

function ApiTask({ className }) {

    const [destinations, setdestinations] = useState(null);

    useEffect(() => {
        axios.get(apiURL).then((response) => {
            setdestinations(response.data.destinations);
        });
    }, []);
    
    if (!destinations) return null;
  
    
    return (
        <Layout>
            <div className={classNames(styles.apiTask, className)}>
                <h1>API Task</h1>

                {destinations.map((item, i) => (
                    <React.Fragment key={i}>
                        <DestinationTile name={item.name} image={item.image} country={item.country} continetn={item.continent}/>
                    </React.Fragment>
                ))}
            </div>
        </Layout>
    );
}

ApiTask.propTypes = {
    className: PropTypes.string,
};

export default ApiTask;
