import styles from './Profile.module.scss'


const Profile = () => {

    return (
        <div className={styles.container}>
            <img className={styles.img} src={"./assets/icons/AddressBookTabs.svg"} width={24} height={34} alt={"AddressBookTabs"}/>
            <div className={styles.profileContent}>
                <p className={styles.headerName}>Header Name H1</p>
                <p className={styles.explanation}>Modal Explanation</p>
            </div>
        </div>
    )
}

export default Profile