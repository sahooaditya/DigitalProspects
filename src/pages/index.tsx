import Sidebar from "../components/Sidebar";
import styles from "../styles/Home.module.css";

import MatchList from "../components/MatchList";
import LiveMatches from "@/components/LiveMatches";
import LeagueTable from "@/components/LeagueTable";
import Trending from "@/components/Trending";
import Header from "@/components/Header";
import MatchBanner from "@/components/MatchBanner";

export default function Home() {
  return (
    <div className="container">
      <Sidebar />

      <div className={styles.main}>
        <Header />

        <div className={styles.content}>
          <div className={styles.left}>
            <LiveMatches />
            <LeagueTable title="Premier League" country="England" />
            <LeagueTable title="La Liga" country="Spain" />
            <Trending />
          </div>

          <div className={styles.right}>
            <MatchBanner />
            <MatchList />
          </div>
        </div>
      </div>
    </div>
  );
}
