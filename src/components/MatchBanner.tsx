import Image from "next/image";
import styles from "../styles/MatchBanner.module.scss";

export default function MatchBanner() {
  return (
    <div className={styles.banner}>
      {/* Left Player */}
      <div className={styles.player}>
        <img
          src="assets/images/Group 12.png" // replace with your image
          alt="player"
          width={260}
          height={230}
        />
      </div>

      {/* Content */}
      <div className={styles.content}>
        <h2 className={styles.title}>
          BARCELONA <br />
          <span className={styles.vsLine}></span>
          REAL MADRID
        </h2>

        <div className={styles.matchInfo}>
          <div className={styles.teams}>
            <Image src="/assets/images/Group 3077.png" alt="barca" width={28} height={28} />
            <span>VS</span>
            <Image src="/assets/images/realmadrid.png" alt="madrid" width={28} height={28} />
          </div>

          <div className={styles.details}>
            <span>🕔 5:00 PM</span>
            <span>📍 Spain</span>
          </div>
        </div>
      </div>

      {/* Right CTA */}
      <div className={styles.cta}>
        <p>
          Up To $50 <br />
          <strong>Free Matched</strong>
        </p>

        <button className={styles.btn}>Join Now →</button>
      </div>
    </div>
  );
}
