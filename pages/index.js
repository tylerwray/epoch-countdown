import { useState, useEffect } from "react";
import Head from "next/head";
import Confetti from "react-confetti";
import styles from "../styles/Home.module.css";

function currentEpoch() {
  return Math.round(+new Date() / 1000);
}

export default function App() {
  const [epoch, setEpoch] = useState(currentEpoch);

  useEffect(() => {
    const timeoutId = setTimeout(() => setEpoch(currentEpoch()), 1000);
    return () => {
      clearTimeout(timeoutId);
    };
  });

  return (
    <div className={styles.container}>
      <Head>
        <title>🥳 Epoch Countdown 🎉</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <span>🥳</span> Epoch Countdown <span>🎉</span>
        </h1>
        <div className={styles.epoch}>{epoch}</div>
        {epoch > 1600000000 && <Confetti />}
      </main>
    </div>
  );
}
