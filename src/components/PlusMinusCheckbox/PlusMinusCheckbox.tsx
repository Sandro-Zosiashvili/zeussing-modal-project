"use client";

import styles from "./PlusMinusCheckbox.module.scss";
import { useState } from "react";
import { motion } from "framer-motion";

interface PlusMinusCheckboxProps {
    checked?: boolean;
    onChange?: (val: boolean) => void;

}

export default function PlusMinusCheckbox({ checked = false, onChange }: PlusMinusCheckboxProps) {
    const [isChecked, setIsChecked] = useState(checked);

    const handleClick = () => {
        const next = !isChecked;
        setIsChecked(next);
        onChange?.(next);
    };


    return (
        <button
            className={`${styles.box} ${isChecked ? styles.checked : ""}`}
            onClick={handleClick}
            role="checkbox"
            aria-checked={isChecked}
        >

            <motion.svg
                viewBox="0 0 12 12"
                fill="none"
                animate={{ rotate: isChecked ? 90 : 0 }}
                transition={{ type: "spring", stiffness: 800, damping: 50 }}
            >
                <rect x="1" y="5.25" width="10" height="1.5" rx="0.75" fill="#16DB2A" />
                {isChecked && (
                    <rect x="5.25" y="1" width="1.5" height="10" rx="0.75" fill="#16DB2A" />
                )}
            </motion.svg>
        </button>
    );
}