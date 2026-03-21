import styles from './Header.module.scss'
import Profile from "@/components/Profile/Profile";
import Toggle from "@/components/Toggle/Toggle";
import HeaderRight from "@/components/HeaderRight/HeaderRight";
import TabBar from "@/components/TabBar/TabBar";
import TableHeader from "@/components/TableHeader/TableHeader";


interface TabBarProps {
    isChecked: boolean;
    onChange: (value: boolean) => void;
}

const Header = (props: TabBarProps) => {

    return (
        <div className={styles.container}>
            <div className={styles.layout}>
                <Profile/>
                <HeaderRight/>
            </div>
            <TableHeader onChange={(val) => props.onChange?.(val)}
                         className={styles.tableHeader}
                         checked={props.isChecked}/>

        </div>
    )
}

export default Header;