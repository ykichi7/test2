import Container from "./container";
import Logo from "./logo";
import styles from "../styles/footer.module.css";
import Social from "./social";

export default function Fotter() {
  return (
    <footer className={styles.wrapper}>
      <Container>
        <div className={styles.flexContent}>
          <Logo />
          <Social />
        </div>
      </Container>
    </footer>
  );
}
