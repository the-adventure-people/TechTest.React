import styles from "./Destination.module.scss";

export default function Destination({ destination }) {
  const { name, image, country, continent } = destination;

  return (
    <div className={styles.tile}>
      <img
        src={`${image}?auto=compress&auto=format&fit=crop&h=400&max-w=400`}
        alt={country}
      />
      <h2>{name}</h2>
      <p>{country}</p>
      <p>{continent}</p>
    </div>
  );
}
