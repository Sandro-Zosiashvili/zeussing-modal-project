import styles from './TabBar.module.scss'
import TabBarItem from "@/components/TabBarItem/TabBarItem";
import Button from "@/components/Button/Button";
import Checkbox from "@/components/CheckBox/CheckBox";



interface TabBarProps {
    checked: boolean;
}


const TabBar = (props: TabBarProps) => {

    return (
        <div className={styles.container}>
            <Checkbox checked={props.checked}/>
            <TabBarItem  />
            <Button  className={styles.button} text={"Button"}  isActive={false} />
        </div>
    )
}

export default TabBar