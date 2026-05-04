import styles from "@/styles/Trending.module.scss";
import Image from "next/image";

export default function Trending() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h3>Trending Now</h3>
        <div>
          <span>←</span>
          <span>→</span>
        </div>
      </div>

      <div className={styles.card}>
        <Image src="/assets/images/g3843.png" alt="" width={50} height={50} />
        <div className={styles.center}>
          <span>Premier League</span>
          <h2>1 : 2</h2>
          <small>49:30</small>
        </div>
        <Image src="/assets/images/xyz.png" alt="" width={50} height={50} />
      </div>
    </div>
  );
}
