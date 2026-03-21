import Image from "next/image";
import styles from "./page.module.scss";
import Button from "@/components/Button/Button";
import Toggle from "@/components/Toggle/Toggle";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import TabBar from "@/components/TabBar/TabBar";

export default function Home() {
  return (
    <div className={styles.page}>
        {/*<Header />*/}
        <TabBar/>

        <Footer />
    </div>
  );
}
