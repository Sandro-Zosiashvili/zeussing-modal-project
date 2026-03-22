// Header.tsx
"use client"
import { motion } from "framer-motion";
import styles from './Header.module.scss'
import Profile from "@/components/Profile/Profile";
import HeaderRight from "@/components/HeaderRight/HeaderRight";
import TableHeader from "@/components/TableHeader/TableHeader";

interface TabBarProps {
    isChecked: boolean;
    onChange: (value: boolean) => void;
    onClick?: () => void;
}

const Header = (props: TabBarProps) => {
    return (
        <motion.div
            className={styles.container}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0}}
        >
            <div className={styles.layout}>
                <Profile onClick={props.onClick}/>
                <HeaderRight RightOnClick={props.onClick}/>
            </div>

            <TableHeader
                onChange={props.onChange}
                className={styles.tableHeader}
                checked={props.isChecked}
            />
        </motion.div>
    )
}

export default Header;