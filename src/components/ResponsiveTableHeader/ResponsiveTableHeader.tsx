"use client"
import { motion } from "framer-motion";
import styles from './ResponsiveTableHeader.module.scss'
import TabBarItem from "@/components/TabBarItem/TabBarItem";
import Button from "@/components/Button/Button";
import PlusMinusCheckbox from "@/components/PlusMinusCheckbox/PlusMinusCheckbox";

interface TabBarProps {
    checked: boolean;
    className?: string;
    onChange?: (val: boolean) => void;
    onTabClick?: () => void;
}

const ResponsiveTableHeader = (props: TabBarProps) => {
    return (
        <motion.div
            className={`${styles.container} ${props.className || ""}`}
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.7
            }}
        >
            <PlusMinusCheckbox />
            <TabBarItem
                onTabClick={props.onTabClick}
                className={styles.barITem}
                forHeader={true}
            />
            <Button className={styles.button} text={"Button"} isActive={false}/>
        </motion.div>
    )
}

export default ResponsiveTableHeader;