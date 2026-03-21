import Image from "next/image";
import styles from "./page.module.scss";
import Button from "@/components/Button/Button";

export default function Home() {
  return (
    <div className={styles.page}>
      <Button  text={"Button"}  />
    </div>
  );
}
