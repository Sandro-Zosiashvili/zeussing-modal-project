"use client";
import styles from "./PlusMinusCheckbox.module.scss";
import { motion } from "framer-motion";
import { useGlobalStore } from "@/GlobalStates/useGlobalStore";

export default function PlusMinusCheckbox() {
    const { allChecked, setAllChecked } = useGlobalStore();

    const handleClick = () => {
        console.log("All checked:", allChecked);
        setAllChecked(!allChecked);
    };

    return (
        <button
            className={`${styles.box} ${allChecked ? styles.checked : ""}`}
            onClick={handleClick}
            role="checkbox"
            aria-checked={allChecked}
        >
            <motion.svg
                viewBox="0 0 12 12"
                fill="none"
                animate={{ rotate: !allChecked ? 90 : 0 }}
                transition={{ type: "spring", stiffness: 800, damping: 50 }}
            >
                <rect x="1" y="5.25" width="10" height="1.5" rx="0.75" fill="#16DB2A" />
                {!allChecked && (
                    <rect x="5.25" y="1" width="1.5" height="10" rx="0.75" fill="#16DB2A" />
                )}
            </motion.svg>
        </button>
    );
}