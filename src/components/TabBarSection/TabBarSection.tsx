"use client";

import styles from './TabBarSection.module.scss';
import TabBar from "@/components/TabBar/TabBar";
import {motion} from "framer-motion";

interface TabBarTypes {
    id: number;
    isChecked: boolean;
}

const data: TabBarTypes[] = [
    {id: 1, isChecked: false},
    {id: 2, isChecked: true},
    {id: 3, isChecked: true},
    {id: 4, isChecked: true},
    {id: 5, isChecked: true},
    {id: 6, isChecked: true},
    {id: 7, isChecked: true},
    {id: 8, isChecked: true},
    {id: 9, isChecked: true},
];

const container = {
    hidden: {},
    show: {transition: {staggerChildren: 0.07}},
    exit: {transition: {staggerChildren: 0.05, staggerDirection: -1}},
};

const TabBarSection = () => {
    return (
        <motion.div
            className={styles.container}
            variants={container}
            initial="hidden"
            animate="show"
            exit="exit"
        >
            {data.map((row) => (
                <motion.div key={row.id} variants={
                    {
                        hidden: {opacity: 0, y: -16},
                        show: {opacity: 1, y: 0, transition: {type: "spring", stiffness: 400, damping: 28}},
                        exit: {opacity: 0, y: -16, transition: {type: "spring", stiffness: 400, damping: 28}},
                    }
                }>
                    <TabBar checked={row.isChecked}/>
                </motion.div>
            ))}
        </motion.div>
    );
};

export default TabBarSection;
