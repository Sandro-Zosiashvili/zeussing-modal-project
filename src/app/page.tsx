"use client"
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./page.module.scss";
import MainModal from "@/components/MainModal/MainModal";
import WelcomeModal from "@/components/WelcomeModal/WelcomeModal";

export default function Home() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={styles.page}>
            <AnimatePresence mode="wait">
                {!isOpen ? (
                    <WelcomeModal key="welcome" onGetStarted={() => setIsOpen(true)} />
                ) : (
                    <motion.div
                        key="main"
                        initial={{opacity: 0, scale: 0.95, filter: "blur(10px)"}}
                        animate={{opacity: 1, scale: 1, filter: "blur(0px)",
                            transition: {duration: 0.5, ease: [0.22, 1, 0.36, 1]}
                        }}
                        exit={{opacity: 0, scale: 0.95, filter: "blur(10px)",
                            transition: { duration: 0.4 }
                        }}
                    >
                        <MainModal onClick={() => {setIsOpen(false);}}
                         />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}