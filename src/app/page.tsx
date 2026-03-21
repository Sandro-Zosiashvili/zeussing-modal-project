import Image from "next/image";
import styles from "./page.module.scss";
import TabBarSection from "@/components/TabBarSection/TabBarSection";

export default function Home() {
  return (
    <div className={styles.page}>
        <TabBarSection />
    </div>
  );
}
