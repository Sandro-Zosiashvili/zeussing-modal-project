import styles from './TabBarItem.module.scss'
import {useState} from "react";

interface Props {
    className?: string
    onClick?: (id: number) => void
    forHeader?: boolean
    responsiveData?: boolean
    onChange?: (val: boolean) => void
    onTabClick?: () => void

}

const TabBarItem = (props: Props) => {
    const [activeId, setActiveId] = useState<number | null>(1);

    const responsiveData = [{ id: 1, title: 'Tab Name'}];

    const data = [
        { id: 1, title: 'Tab Name' },
        { id: 2, title: 'Tab Name' },
        { id: 3, title: 'Tab Name' },
        { id: 4, title: 'Tab Name' },
        { id: 5, title: 'Tab Name' },
        { id: 6, title: 'Tab Name' },
    ];

    if (props.forHeader) {
        return (
            <div className={`${styles.container} ${props.className || ""}`}>
                {data.map((item) => (
                    <p
                        onClick={() => {
                            const newActiveState = activeId !== item.id; // ✅ toggle logic
                            setActiveId(newActiveState ? item.id : null);
                            props.onChange?.(newActiveState);
                            props.onTabClick?.();

                        }}
                        key={item.id}
                        className={`${styles.tabsItemTwo} ${activeId === item.id ? styles.ActiveTabsItem : ""}`}
                    >
                        {item.title}
                    </p>
                ))}
            </div>
        );
    }
    const displayData = props.responsiveData ? responsiveData : data;

    return (
        <div className={styles.container}>
            {displayData.map((item) => (
                <p
                    onClick={() => props.onClick?.(item.id)}
                    key={item.id}
                    className={`${styles.tabsItem} ${props.className || ""}`}
                >
                    {item.title}
                </p>
            ))}
        </div>
    );
}

export default TabBarItem;