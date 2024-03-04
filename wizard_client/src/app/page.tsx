import styles from "./page.module.css";
import { verdana } from "./config/confStyles";
import { Card } from "./components/Card";

export default function Home() {
  return (
    <main className={`${styles.main} ${verdana.className}`}>
      <Card>
        <div className={styles.cardContainer}>
          <div className={styles.cardTitleContainer}>
            <h2>Gryffindor</h2>
            <h3>Lion</h3>
          </div>
          <div className={styles.cardGradient}></div>
          <div className={styles.cardDescription}>Founder: <span>Roweda Ravenclaw</span></div>
        </div>
      </Card>
    </main>
  );
}
