import React from "react";
import PropTypes from "prop-types";
import styles from "./ApiTask.module.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import Destination from "../../components/Destination/Destinantion";

function ApiTask() {
  const url =
    "https://s3.eu-west-2.amazonaws.com/tap.techtest/destinations.json";

  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    const getDestinations = () => {
      axios
        .get(url)
        .then((response) => {
          setDestinations(response.data.destinations);
        })
        .catch((error) => console.error(`error: ${error}`));
    };
    getDestinations();
  }, []);

  return (
    <Layout>
      <div className={styles.container}>
        <h1>API Task</h1>
        {destinations.map((destination) => (
          <Destination destination={destination} />
        ))}
      </div>
    </Layout>
  );
}

export default ApiTask;
