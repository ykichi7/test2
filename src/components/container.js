import styles from "../styles/container.module.css";

export default function Container({ children }) {
  return <div className={styles.defualt}>{children}</div>;
}
