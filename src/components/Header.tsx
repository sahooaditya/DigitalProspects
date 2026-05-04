import Image from "next/image";
import styles from "../styles/Header.module.scss";
import { useState } from "react";

export default function Header() {
  const [active, setActive] = useState("Live Match");

  const menus = ["Live Match", "Scorecard", "Commentary", "Players", "My Matches"];

  return (
    <header className={styles.header}>
      {/* Left Menu */}
      <div className={styles.left}>
        {menus.map((item) => (
          <span
            key={item}
            className={active === item ? styles.active : ""}
            onClick={() => setActive(item)}
          >
            {item}
          </span>
        ))}
      </div>

      {/* Search */}
      <div className={styles.search}>
        <input type="text" placeholder="Search Matches, Players, Stats ..." />
        <span className={styles.icon}>🔍</span>
      </div>

      {/* Right Icons */}
      <div className={styles.right}>
        <span>🔔</span>
        <span>✉️</span>
        <span>♡</span>

        <div className={styles.profile}>
          <Image
            src="/assets/images/Ellipse 1.png"
            alt="user"
            width={32}
            height={32}
            className={styles.avatar}
          />
          <span>Jane Doe</span>
          <span>▾</span>
        </div>
      </div>
    </header>
  );
}
