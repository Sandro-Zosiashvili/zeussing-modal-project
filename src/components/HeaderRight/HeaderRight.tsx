import styles from './HeaderRight.module.scss'
import Toggle from "@/components/Toggle/Toggle";
import Button from "@/components/Button/Button";


interface Props {
    RightOnClick?: () => void;
}

const HeaderRight = (props: Props) => {


    return (
        <div className={styles.container}>
            <div className={styles.toggleLayout}>
                <Toggle   />
                <Toggle   />
            </div>
            <Button onClick={props.RightOnClick}  className={styles.button} icon={"close"}  iconButton={true}   />

        </div>
    )
}

export default HeaderRight;