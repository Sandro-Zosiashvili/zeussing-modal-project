


import styles from './TabBarItem.module.scss'

const TabBarItem = () => {

const data =  [
    {
        id: 1,
        title: 'Tab Name',
    },
    {
        id: 2,
        title: 'Tab Name',
    },
    {
        id: 3,
        title: 'Tab Name',
    },
    {
        id: 4,
        title: 'Tab Name',
    },
    {
        id: 5,
        title: 'Tab Name',
    },
    {
        id: 6,
        title: 'Tab Name',
    },
]

    return (

        <div className={styles.container}>
            {
                data.map((item, index) => (
                    <p key={item.id} className={styles.tabsItem}>
                        {item.title}
                    </p>
                ))
            }
        </div>
    )
}

export default TabBarItem