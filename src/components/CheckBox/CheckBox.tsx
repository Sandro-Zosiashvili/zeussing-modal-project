// Checkbox.tsx
"use client";
import styles from "./Checkbox.module.scss";
import { useState, useEffect } from "react";
import { useGlobalStore } from "@/GlobalStates/useGlobalStore";

export default function Checkbox() {
    const allChecked = useGlobalStore((state) => state.allChecked);
    const [isChecked, setIsChecked] = useState(allChecked);
    useEffect(() => {
        setIsChecked(allChecked);
    }, [allChecked]);

    const handleClick = () => {
        const next = !isChecked;
        setIsChecked(next);
    };

    return (
        <button
            className={`${styles.box} ${isChecked ? styles.checked : ""}`}
            onClick={handleClick}
            role="checkbox"
            aria-checked={isChecked}
        >
            {isChecked && (
                <svg viewBox="0 0 12 10" fill="none">
                    <path
                        d="M1 5l3.5 3.5L11 1"
                        stroke="#16DB2A"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )}
        </button>
    );
}