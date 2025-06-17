import styles from "../styles/contack.module.css";
import Social from "./social";

export default function Contact() {
  return (
    <div className={styles.stack}>
      <h3 className={styles.headig}>contact</h3>
      <Social iconSize="30px" />
      <address>cube@web.mail.adderss</address>
    </div>
  );
}
