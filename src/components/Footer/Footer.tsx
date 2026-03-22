// Footer.tsx
"use client"
import { motion } from "framer-motion";
import styles from './Footer.module.scss';
import Button from "@/components/Button/Button";

const Footer = () => {
    return (
        <motion.div
            className={styles.container}
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.2}}
        >
            <Button text={"Button"} isActive={true} />
            <Button text={"Button"} isActive={false} />
        </motion.div>
    )
}

export default Footer;