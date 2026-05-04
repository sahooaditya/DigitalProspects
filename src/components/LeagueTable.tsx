import styles from "@/styles/LeagueTable.module.scss";

export default function LeagueTable({ title, country }: any) {
  const data = [
    { team: "Liverpool", d: 6, l: 2, ga: 21, gd: 16, pts: 33 },
    { team: "Man United", d: 3, l: 3, ga: 24, gd: 9, pts: 33 },
    { team: "Leicester City", d: 2, l: 5, ga: 21, gd: 10, pts: 32 },
    { team: "Villarreal", d: 8, l: 2, ga: 10, gd: 16, pts: 32 },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h3>{title}</h3>
        <span>{country}</span>
      </div>

      <div className={styles.table}>
        <div className={styles.rowHead}>
          <span>Team</span>
          <span>D</span>
          <span>L</span>
          <span>Ga</span>
          <span>Gd</span>
          <span>Pts</span>
        </div>

        {data.map((item, i) => (
          <div key={i} className={styles.row}>
            <span>{item.team}</span>
            <span>{item.d}</span>
            <span>{item.l}</span>
            <span>{item.ga}</span>
            <span>{item.gd}</span>
            <span>{item.pts}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
