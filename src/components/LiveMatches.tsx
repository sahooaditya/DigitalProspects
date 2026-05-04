import styles from "@/styles/LiveMatches.module.scss";
import Image from "next/image";

export default function LiveMatches() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>Live Matches</h2>
        <div>
          <span>←</span>
          <span className={styles.active}>→</span>
        </div>
      </div>

      <div className={styles.card}>
        <div className={styles.top}>
          <Image src="/assets/images/g3843.png" alt="" width={50} height={50} />
          <div className={styles.score}>
            <span className={styles.league}>Premier League</span>
            <h1>1 : 2</h1>
            <span className={styles.time}>● 49:30</span>
          </div>
          <Image src="/assets/images/xyz.png" alt="" width={50} height={50} />
        </div>

        <div className={styles.odds}>
          <button>1.8</button>
          <button>2.1</button>
          <button>1.3</button>
        </div>
      </div>
    </div>
  );
}
