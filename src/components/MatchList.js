"use client";

import Image from "next/image";
import styles from "../styles/Card.module.scss";
import { useState } from "react";

export default function MatchList() {
  const [liked, setLiked] = useState([]);

  const matches = [
    {
      id: 1,
      team1: "Barcelona",
      team2: "Real Madrid",
      time: "5:00 PM",
      location: "Spain",
      highlight: true,
      logo1: "/assets/images/xyz.png",
      logo2: "/assets/images/xyz.png",
    },
    {
      id: 2,
      team1: "NY Yorks",
      team2: "NY Yorks",
      time: "5:00 PM",
      location: "London",
      logo1: "/assets/images/xyz.png",
      logo2: "/assets/images/xyz.png",
    },
    {
      id: 3,
      team1: "NY Yorks",
      team2: "NY Yorks",
      time: "5:00 PM",
      location: "London",
      logo1: "/assets/images/xyz.png",
      logo2: "/assets/images/xyz.png",
    },
    {
      id: 4,
      team1: "NY Yorks",
      team2: "NY Yorks",
      time: "5:00 PM",
      location: "London",
      logo1: "/assets/images/xyz.png",
      logo2: "/assets/images/xyz.png",
    },
    {
      id: 5,
      team1: "NY Yorks",
      team2: "NY Yorks",
      time: "5:00 PM",
      location: "London",
      logo1: "/assets/images/xyz.png",
      logo2: "/assets/images/xyz.png",
    },
  ];

  const toggleLike = (id) => {
    setLiked((prev) => (prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]));
  };

  return (
    <div className={styles.container}>
      {/* Header */}
      <div className={styles.header}>
        <h2>Latest Matches</h2>

        <div className={styles.filters}>
          <span>Filter :</span>
          <button>Football ▾</button>
          <button>Anywhere ▾</button>
          <span className={styles.viewAll}>View All</span>
        </div>
      </div>

      {/* Cards */}
      {matches.map((match) => (
        <div key={match.id} className={`${styles.card} ${match.highlight ? styles.highlight : ""}`}>
          {/* Teams */}
          <div className={styles.teams}>
            <div className={styles.team}>
              <Image src={match.logo1} alt="" width={36} height={36} />
              <span>{match.team1}</span>
            </div>

            <div className={styles.vs}>VS</div>

            <div className={styles.team}>
              <Image src={match.logo2} alt="" width={36} height={36} />
              <span>{match.team2}</span>
            </div>
          </div>

          {/* Info */}
          <div className={styles.info}>
            <span>🕒 {match.time}</span>
            <span>📍 {match.location}</span>
          </div>

          {/* Actions */}
          <div className={styles.actions}>
            <span
              className={`${styles.heart} ${liked.includes(match.id) ? styles.liked : ""}`}
              onClick={() => toggleLike(match.id)}
            >
              ❤️
            </span>

            <span className={styles.details}>View Details →</span>
          </div>
        </div>
      ))}
    </div>
  );
}
