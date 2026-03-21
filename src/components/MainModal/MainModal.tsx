"use client"
import styles from './MainModal.module.scss'
import Header from "@/components/Header/Header";
import TabBarSection from "@/components/TabBarSection/TabBarSection";
import Footer from "@/components/Footer/Footer";
import {useState} from "react";
import {AnimatePresence} from "framer-motion";


const MainModal = () => {
    const [isChecked, setIsChecked] = useState(false);

    return (
        <div className={styles.container}>
            <Header onChange={(val) => setIsChecked(val)} isChecked={isChecked}/>
            <AnimatePresence>
                {!isChecked && <TabBarSection />}
            </AnimatePresence>
            <Footer/>
        </div>
    )
}

export default MainModal;