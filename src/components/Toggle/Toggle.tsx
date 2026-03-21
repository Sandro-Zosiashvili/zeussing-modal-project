"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import styles from "./Toggle.module.scss";

interface ToggleProps {
    defaultOn?: boolean;
    onChange?: (value: boolean) => void;
}

export default function Toggle({ defaultOn = true, onChange }: ToggleProps) {
    const [isOn, setIsOn] = useState(defaultOn);

    const handleClick = () => {
        const next = !isOn;
        setIsOn(next);
        onChange?.(next);
    };

    return (
        <motion.button
            className={styles.track}
            onClick={handleClick}
            aria-checked={isOn}
            role="switch"
            initial={{
                backgroundColor: isOn ? "#E9F7FD" : "#f0f0f0",
                borderColor: isOn ? "#1EAFED" : "#d0d0d0",
            }}
            animate={{
                backgroundColor: isOn ? "#E9F7FD" : "#f0f0f0",
                borderColor: isOn ? "#1EAFED" : "#d0d0d0",
            }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
        >
            <motion.div
                className={styles.thumb}
                initial={{
                    x: isOn ? 0 : 49,
                    backgroundColor: isOn ? "#1EAFED" : "#b0b0b0",
                }}
                animate={{
                    x: isOn ? 0 : 49,
                    backgroundColor: isOn ? "#1EAFED" : "#b0b0b0",
                }}
                transition={{ type: "spring", stiffness: 500, damping: 35 }}
            />

            <AnimatePresence mode="wait" initial={false}>
                <motion.span
                    key={isOn ? "on" : "off"}
                    className={styles.label}
                    style={{ x: isOn ? -5 : -33 }}
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0, color: isOn ? "#1EAFED" : "#b0b0b0" }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.15, ease: "easeInOut" }}
                >
                    {isOn ? "On" : "Off"}
                </motion.span>
            </AnimatePresence>
        </motion.button>
    );
}