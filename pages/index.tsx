import styles from "@/pages/index.module.css";
import { useState } from "react";

export default function Home() {
  const [inputNumber, setInputNumber] = useState<any>("");

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Roman Numeral Calculator</h1>
      <input type={"number"} onChange={(e) => setInputNumber(e.target.value)} />
      <div className={styles.output}>{inputNumber}</div>
    </div>
  );
}
