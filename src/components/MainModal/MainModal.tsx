// MainModal.tsx
"use client"
import styles from './MainModal.module.scss'
import Header from "@/components/Header/Header";
import TabBarSection from "@/components/TabBarSection/TabBarSection";
import Footer from "@/components/Footer/Footer";
import {useState} from "react";
import {AnimatePresence} from "framer-motion";
import ResponsiveTableHeader from "@/components/ResponsiveTableHeader/ResponsiveTableHeader";


interface Props {
    onClick?: () => void
}

const MainModal = (props: Props) => {
    const [isChecked, setIsChecked] = useState(false);
    const [triggerAnimation, setTriggerAnimation] = useState(0);

    return (
        <div className={styles.container}>
            <Header
                onClick={props.onClick}
                onChange={(val) => setIsChecked(val)} isChecked={isChecked}

            />
            <ResponsiveTableHeader
                checked={isChecked}
                onChange={(val) => setIsChecked(val)}
                onTabClick={() => setTriggerAnimation(prev => prev + 1)}
            />
            <AnimatePresence mode="wait">
                {!isChecked && (
                    <TabBarSection
                        triggerAnimation={triggerAnimation}
                    />
                )}
            </AnimatePresence>

            <Footer/>
        </div>
    )
}

export default MainModal;