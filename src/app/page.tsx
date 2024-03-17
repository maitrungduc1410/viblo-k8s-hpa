import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.center}>
        Kubernetes Horironztal Pod Autoscaling Demo
        👋
      </h1>
    </main>
  );
}
