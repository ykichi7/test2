import Link from "next/link";
import Styles from "../styles/nav.module.css";

export default function Nav() {
  return (
    <nav>
      <ul className={Styles.list}>
        <li>
          <Link href="/" legacyBehavior>
            <a className={Styles.link}>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about" legacyBehavior>
            <a className={Styles.link}>About</a>
          </Link>
        </li>
        <li>
          <Link href="/blog" legacyBehavior>
            <a className={Styles.link}>Blog</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
