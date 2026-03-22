"use client"
import { motion } from "framer-motion";
import styles from "./WelcomeModal.module.scss";

interface Props {
    onGetStarted: () => void;
}

const WelcomeModal = ({ onGetStarted }: Props) => {
    return (
        <motion.div
            className={styles.welcomeModal}
            initial={{ opacity: 1 }}
            exit={{opacity: 0, transition: { duration: 0.3 }}}
        >
            <motion.div
                className={styles.welcomeContent}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
                <motion.div className={styles.logo}>
                    <h1>Zeussing</h1>
                    <div className={styles.underline} />
                </motion.div>

                <motion.p
                    className={styles.subtitle}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                >
                    Smart Cloud-Based Self Check-in for Hotels
                </motion.p>

                <motion.p
                    className={styles.description}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                >
                    Streamline your hotel operations with our professional, secure, and efficient cloud platform
                </motion.p>

                <motion.button
                    className={styles.getStartedButton}
                    onClick={onGetStarted}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.6 }}
                    whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                    whileTap={{ scale: 0.98 }}
                >
                    Get Started
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </motion.button>
            </motion.div>
        </motion.div>
    );
};

export default WelcomeModal;