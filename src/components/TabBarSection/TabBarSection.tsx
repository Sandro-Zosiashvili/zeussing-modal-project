import styles from './TabBarSection.module.scss';
import TabBar from "@/components/TabBar/TabBar";


interface TabBarTypes {
    id: number;
    isChecked: boolean;
}

const TabBarSection = () => {

    const data: TabBarTypes[] = [
        {id: 1, isChecked: false,},
        {id: 2, isChecked: true,},
        {id: 3, isChecked: true,},
        {id: 4, isChecked: true,},
        {id: 5, isChecked: true,},
        {id: 6, isChecked: true,},
        {id: 7, isChecked: true,},
        {id: 8, isChecked: true,},
    ]


    return (
        <div className={styles.container}>
            {
                data.map((item: TabBarTypes, index) => (
                    <TabBar key={item.id} checked={item.isChecked}/>
                ))
            }

        </div>

    )
}

export default TabBarSection;