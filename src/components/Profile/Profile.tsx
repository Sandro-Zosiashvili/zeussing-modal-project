import styles from './Profile.module.scss'
import Button from "@/components/Button/Button";
import ProfileModal from "@/components/ProfileModal/ProfileModal";
import {useState} from "react";



interface ProfileProps {
    onClick?: () => void;
    openModal?: () => void;
}

const Profile = (props: ProfileProps) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className={styles.layoutFlex}>
                <div onClick={() => setIsOpen(true)} className={styles.container}>
                    <img className={styles.img} src={"./assets/icons/AddressBookTabs.svg"} width={24} height={34}
                         alt={"AddressBookTabs"}/>
                    <div className={styles.profileContent}>
                        <p className={styles.headerName}>Header Name H1</p>
                        <p className={styles.explanation}>Modal Explanation</p>
                    </div>
                </div>
                <Button onClick={() => props.onClick?.()}
                        className={styles.button} icon={"close"} iconButton={true}/>
            </div>

            <ProfileModal
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
            />
        </>

    )
}

export default Profile