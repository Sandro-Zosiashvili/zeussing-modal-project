


import styles from './Header.module.scss'
import Profile from "@/components/Profile/Profile";
import Toggle from "@/components/Toggle/Toggle";
import HeaderRight from "@/components/HeaderRight/HeaderRight";


const Header = () => {

    return (
        <div className={styles.container}>
            <div className={styles.layout}>
                <Profile />
                <HeaderRight  />
            </div>
        </div>
    )
}

export default Header;