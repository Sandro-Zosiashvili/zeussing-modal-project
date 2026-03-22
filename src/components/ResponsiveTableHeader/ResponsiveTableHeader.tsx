"use client"
import styles from './ResponsiveTableHeader.module.scss'
import Checkbox from "@/components/CheckBox/CheckBox";
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
        <div className={`${styles.container} ${props.className || ""}`}>
            <PlusMinusCheckbox
                onChange={(val) => props.onChange?.(val)}
                checked={props.checked}/>
            <TabBarItem onTabClick={props.onTabClick}   className={styles.barITem} forHeader={true}/>
            <Button className={styles.button} text={"Button"} isActive={false}/>
        </div>
    )
}


export default ResponsiveTableHeader;