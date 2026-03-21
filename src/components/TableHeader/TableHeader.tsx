import styles from "./TableHeader.module.scss"
import Checkbox from "@/components/CheckBox/CheckBox";
import TabBarItem from "@/components/TabBarItem/TabBarItem";
import Button from "@/components/Button/Button";
import PlusMinusCheckbox from "@/components/PlusMinusCheckbox/PlusMinusCheckbox";
import {useState} from "react";


interface TabBarProps {
    checked: boolean;
    className?: string;
    onChange?: (val: boolean) => void;
}


const TableHeader = (props: TabBarProps) => {

    return (
        <div className={`${styles.container} ${props.className || ""}`}>
            <PlusMinusCheckbox
                onChange={(val) => props.onChange?.(val)}
                checked={props.checked}/>
            <TabBarItem/>
            <Button className={styles.button} text={"Button"} isActive={false}/>
        </div>
    )
}


export default TableHeader;