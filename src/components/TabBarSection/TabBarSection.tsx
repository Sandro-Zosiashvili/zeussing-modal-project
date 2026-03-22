"use client";
import styles from './TabBarSection.module.scss';
import TabBar from "@/components/TabBar/TabBar";
import {motion} from "framer-motion";
import TabBarResponsive from "@/components/TabBarRsponsive/TabBarResponsive";
import {useGlobalStore} from "@/GlobalStates/useGlobalStore";

interface TabBarTypes {
    id: number;
}

const data: TabBarTypes[] = [
    {id: 1},
    {id: 2},
    {id: 3},
    {id: 4},
    {id: 5},
    {id: 6},
    {id: 7},
    {id: 8},
    {id: 9},
];

const container = {
    hidden: {},
    show: {transition: {staggerChildren: 0.07}},
    exit: {transition: {staggerChildren: 0.05, staggerDirection: -1}},
};

interface Props {
    triggerAnimation?: number;
}

const TabBarSection = (props: Props) => {
    const allChecked = useGlobalStore((state) => state.allChecked);

    return (
        <motion.div
            key={props.triggerAnimation}
            className={styles.container}
            variants={container}
            initial="hidden"
            animate="show"
            exit="exit"
        >
            {data.map((row) => (
                <motion.div key={row.id} variants={{
                    hidden: {opacity: 0, y: -16},
                    show: {opacity: 1, y: 0, transition: {type: "spring", stiffness: 400, damping: 28}},
                    exit: {opacity: 0, y: -16, transition: {type: "spring", stiffness: 400, damping: 28}},
                }}>
                    <TabBar checked={allChecked}/>
                    <TabBarResponsive checked={allChecked}/>
                </motion.div>
            ))}
        </motion.div>
    );
};

export default TabBarSection;