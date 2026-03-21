import Image from "next/image";
import styles from "./page.module.scss";
import MainModal from "@/components/MainModal/MainModal";

export default function Home() {
  return (
    <div className={styles.page}>
        <MainModal  />
    </div>
  );
}
