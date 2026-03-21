import styles from './Footer.module.scss';
import Button from "@/components/Button/Button";


const Footer = () => {

    return (
        <div className={styles.container}>
            <Button text={"Button"} isActive={true} />
            <Button text={"Button"} isActive={false} />
        </div>
    )
}


export default Footer;