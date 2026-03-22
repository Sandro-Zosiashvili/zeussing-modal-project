import TabBarItem from "@/components/TabBarItem/TabBarItem";
import Button from "@/components/Button/Button";
import Checkbox from "@/components/CheckBox/CheckBox";
import styles from './TabBarResponsive.module.scss'
import {useState} from "react";


interface TabBarProps {
    checked: boolean;
    className?: string;
    onChange?: (val: boolean) => void;
}


const TabBarResponsive = (props: TabBarProps) => {
    const [triggerAnimation, setTriggerAnimation] = useState(0);

    return (
        <div className={`${styles.container} ${props.className || ""}`}>
            <Checkbox checked={props.checked}/>
            <TabBarItem responsiveData={true} forHeader={false}/>
            <Button className={styles.button} text={"Button"} isActive={false}/>
        </div>
    )
}

export default TabBarResponsive