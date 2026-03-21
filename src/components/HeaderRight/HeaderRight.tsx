import styles from './HeaderRight.module.scss'
import Toggle from "@/components/Toggle/Toggle";
import Button from "@/components/Button/Button";




const HeaderRight = () => {


    return (
        <div className={styles.container}>
            <div className={styles.toggleLayout}>
                <Toggle   />
                <Toggle   />
            </div>
            <Button  className={styles.button} icon={"close"}  iconButton={true}   />

        </div>
    )
}

export default HeaderRight;