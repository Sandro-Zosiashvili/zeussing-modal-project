// ProfileModal.tsx
"use client"
import { motion, AnimatePresence } from "framer-motion";
import styles from "./ProfileModal.module.scss";
import Button from "@/components/Button/Button";

interface ProfileModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const ProfileModal = ({ isOpen, onClose }: ProfileModalProps) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Overlay */}
                    <motion.div
                        className={styles.overlay}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        onClick={onClose}
                    />

                    {/* Modal */}
                    <motion.div
                        className={styles.modal}
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className={styles.header}>
                            <h2>Profile Settings</h2>
                            <Button
                                onClick={onClose}
                                icon="close"
                                iconButton={true}
                                iconWidth={24}
                                iconHeight={24}
                            />
                        </div>

                        <div className={styles.content}>
                            <div className={styles.avatarSection}>
                                <img
                                    src="./assets/icons/AddressBookTabs.svg"
                                    width={80}
                                    height={80}
                                    alt="Profile"
                                    className={styles.avatar}
                                />
                                <button className={styles.changeAvatar}>Change Avatar</button>
                            </div>

                            <div className={styles.infoSection}>
                                <div className={styles.field}>
                                    <label>Name</label>
                                    <input type="text" defaultValue="Header Name H1" />
                                </div>

                                <div className={styles.field}>
                                    <label>Email</label>
                                    <input type="email" defaultValue="user@example.com" />
                                </div>

                                <div className={styles.field}>
                                    <label>Role</label>
                                    <input type="text" defaultValue="Administrator" disabled />
                                </div>
                            </div>
                        </div>

                        <div className={styles.footer}>
                            <Button text="Cancel" isActive={false} onClick={onClose} />
                            <Button text="Save Changes" isActive={true} />
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default ProfileModal;