"use client";

import styles from "../styles/Sidebar.module.scss";
import { useState } from "react";

export default function Sidebar() {
  const [open, setOpen] = useState(true);
  const [active, setActive] = useState(0);

  const menuItems = [
    { icon: "🏠", label: "Home" },
    { icon: "👤", label: "Profile" },
    { icon: "📊", label: "Analytics" },
    { icon: "⚽", label: "Football" },
    { icon: "🏈", label: "Rugby" },
    { icon: "🏸", label: "Badminton" },
    { icon: "🏓", label: "Table Tennis" },
    { icon: "🎾", label: "Tennis" },
    { icon: "🏀", label: "Basketball" },
  ];

  return (
    <div className={`${styles.sidebar} ${open ? styles.open : styles.closed}`}>
      {/* Toggle */}
      <div className={styles.top}>
        <button onClick={() => setOpen(!open)} className={styles.menuBtn}>
          ☰
        </button>
      </div>

      {/* Menu */}
      <div className={styles.menu}>
        {menuItems.map((item, i) => (
          <div
            key={i}
            className={`${styles.iconWrapper} ${active === i ? styles.active : ""}`}
            onClick={() => setActive(i)}
          >
            <span className={styles.icon}>{item.icon}</span>
            <span className={styles.tooltip}>{item.label}</span>
          </div>
        ))}
      </div>

      {/* Bottom */}
      <div className={styles.bottom}>
        <button className={styles.addBtn}>+</button>
      </div>
    </div>
  );
}
