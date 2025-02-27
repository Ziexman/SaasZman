import Link from "next/link";
import Illustration from "../app/src/components/Illustration";
import styles from "../app/src/styles/HomePage.module.css";

export default function HomePage() {
  return (
    <div className={styles.container}>
      <div className={styles.background}>
        <h1>I BUILD</h1>
        <h1>WEBSITES</h1>
      </div>
      <div className={styles.foreground}>
        <div className={styles.content}>
          <h1 className={styles.name}>Precedence Dube</h1>
          <h6 className={styles.bio}>Full Stack Web Developer</h6>
          <Link href="/projects">
            <button className={styles.button}>View Work</button>
          </Link>
          <Link href="/contact">
            <button className={styles.outlined}>Contact Me</button>
          </Link>
        </div>
        <Illustration className={styles.illustration} />
      </div>
    </div>
  );
}