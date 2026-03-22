// // "use client";
// //
// // import styles from './TabBarSection.module.scss';
// // import TabBar from "@/components/TabBar/TabBar";
// // import {motion} from "framer-motion";
// // import TabBarResponsive from "@/components/TabBarRsponsive/TabBarResponsive";
// //
// // interface TabBarTypes {
// //     id: number;
// //     isChecked: boolean;
// // }
// //
// // const data: TabBarTypes[] = [
// //     {id: 1, isChecked: false},
// //     {id: 2, isChecked: true},
// //     {id: 3, isChecked: true},
// //     {id: 4, isChecked: true},
// //     {id: 5, isChecked: true},
// //     {id: 6, isChecked: true},
// //     {id: 7, isChecked: true},
// //     {id: 8, isChecked: true},
// //     {id: 9, isChecked: true},
// // ];
// //
// // const container = {
// //     hidden: {},
// //     show: {transition: {staggerChildren: 0.07}},
// //     exit: {transition: {staggerChildren: 0.05, staggerDirection: -1}},
// // };
// //
// // const TabBarSection = () => {
// //     return (
// //         <motion.div
// //             className={styles.container}
// //             variants={container}
// //             initial="hidden"
// //             animate="show"
// //             exit="exit"
// //         >
// //             {data.map((row) => (
// //                 <motion.div key={row.id} variants={
// //                     {
// //                         hidden: {opacity: 0, y: -16},
// //                         show: {opacity: 1, y: 0, transition: {type: "spring", stiffness: 400, damping: 28}},
// //                         exit: {opacity: 0, y: -16, transition: {type: "spring", stiffness: 400, damping: 28}},
// //                     }
// //                 }>
// //                     <TabBar checked={row.isChecked}/>
// //                 </motion.div>
// //             ))}
// //         </motion.div>
// //     );
// // };
// //
// // export default TabBarSection;
//
//
// "use client";
//
// import styles from './TabBarSection.module.scss';
// import TabBar from "@/components/TabBar/TabBar";
// import {motion} from "framer-motion";
// import TabBarResponsive from "@/components/TabBarRsponsive/TabBarResponsive";
//
// interface TabBarTypes {
//     id: number;
//     isChecked: boolean;
// }
//
// interface Props {
//     onChange?: (val: boolean) => void;
//     triggerAnimation?: number;
//
//
// }
//
// const data: TabBarTypes[] = [
//     {id: 1, isChecked: false},
//     {id: 2, isChecked: true},
//     {id: 3, isChecked: true},
//     {id: 4, isChecked: true},
//     {id: 5, isChecked: true},
//     {id: 6, isChecked: true},
//     {id: 7, isChecked: true},
//     {id: 8, isChecked: true},
//     {id: 9, isChecked: true},
// ];
//
// const container = {
//     hidden: {},
//     show: {transition: {staggerChildren: 0.07}},
//     exit: {transition: {staggerChildren: 0.05, staggerDirection: -1}},
// };
//
//
// const TabBarSection = (props: Props) => {
//     return (
//         <motion.div
//             key={props.triggerAnimation}
//             className={styles.container}
//             variants={container}
//             initial="hidden"
//             animate="show"
//             exit="exit"
//         >
//             {data.map((row) => (
//                 <motion.div key={row.id} variants={{
//                     hidden: {opacity: 0, y: -16},
//                     show: {opacity: 1, y: 0, transition: {type: "spring", stiffness: 400, damping: 28}},
//                     exit: {opacity: 0, y: -16, transition: {type: "spring", stiffness: 400, damping: 28}},
//                 }}>
//                     <TabBar checked={row.isChecked}/>
//                     <TabBarResponsive  checked={row.isChecked}/>
//                 </motion.div>
//             ))}
//         </motion.div>
//     );
// };
//
// export default TabBarSection;


// TabBarSection.tsx
"use client";
import styles from './TabBarSection.module.scss';
import TabBar from "@/components/TabBar/TabBar";
import { motion } from "framer-motion";
import TabBarResponsive from "@/components/TabBarRsponsive/TabBarResponsive";
import { useGlobalStore } from "@/GlobalStates/useGlobalStore";

interface TabBarTypes {
    id: number;
}

const data: TabBarTypes[] = [
    {id: 1},
    {id: 2},
    {id: 3},
    {id: 4},
    {id: 5},
    {id: 6},
    {id: 7},
    {id: 8},
    {id: 9},
];

const container = {
    hidden: {},
    show: {transition: {staggerChildren: 0.07}},
    exit: {transition: {staggerChildren: 0.05, staggerDirection: -1}},
};

interface Props {
    triggerAnimation?: number;
}

const TabBarSection = (props: Props) => {
    const allChecked = useGlobalStore((state) => state.allChecked);

    return (
        <motion.div
            key={props.triggerAnimation}
            className={styles.container}
            variants={container}
            initial="hidden"
            animate="show"
            exit="exit"
        >
            {data.map((row) => (
                <motion.div key={row.id} variants={{
                    hidden: {opacity: 0, y: -16},
                    show: {opacity: 1, y: 0, transition: {type: "spring", stiffness: 400, damping: 28}},
                    exit: {opacity: 0, y: -16, transition: {type: "spring", stiffness: 400, damping: 28}},
                }}>
                    <TabBar checked={allChecked} />
                    <TabBarResponsive checked={allChecked} />
                </motion.div>
            ))}
        </motion.div>
    );
};

export default TabBarSection;