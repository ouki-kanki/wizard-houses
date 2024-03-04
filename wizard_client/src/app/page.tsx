import styles from "./page.module.css";
import { verdana } from "./config/confStyles";
import { Card } from "./components/Card";

export default function Home() {
  return (
    <main className={`${styles.main} ${verdana.className}`}>
      <h1>the brown fox jumps over the lazy dog</h1>
      <Card>
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, culpa quas ullam ad quam reprehenderit ratione impedit totam ea, veniam dignissimos. Tempora, sunt repellat natus maxime aliquam facilis saepe nemo?</div>
      </Card>
    </main>
  );
}
