import styles from ".header.module.css";

export default function Header(props) {
  const { title, subtitle } = props;

  return (
    <header className={styles.header}>
      <h1>{title ? title : "Weather App"}</h1>
      <h2>{subtitle ? subtitle : "Oluwafunke Adeyemo"}</h2>
    </header>
  );
}
