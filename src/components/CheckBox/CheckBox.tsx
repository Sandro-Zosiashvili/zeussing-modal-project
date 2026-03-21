"use client";

import styles from "./Checkbox.module.scss";
import {useState} from "react";

interface CheckboxProps {
    checked?: boolean;
    onChange?: (val: boolean) => void;
}

export default function Checkbox({ checked = false, onChange }: CheckboxProps) {
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