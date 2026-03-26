"use client"
import { motion, AnimatePresence } from "framer-motion";
import { useRef, useEffect } from "react";
import styles from "./ProfileModal.module.scss";
import Button from "@/components/Button/Button";

interface ProfileModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const ProfileModal = ({ isOpen, onClose }: ProfileModalProps) => {
    const wrapperRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const wasFixed = document.body.style.position === "fixed";

        if (!wasFixed) {
            const scrollY = window.scrollY;
            document.body.style.position = "fixed";
            document.body.style.top = `-${scrollY}px`;
            document.body.style.width = "100%";
            document.body.style.overflowY = "scroll";
        }

        function handleClickOutside(event: MouseEvent) {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
                onClose();
            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            if (!wasFixed) {
                const savedScrollY = document.body.style.top;
                document.body.style.position = "";
                document.body.style.top = "";
                document.body.style.width = "";
                document.body.style.overflowY = "";
                if (savedScrollY) {
                    window.scrollTo(0, Math.abs(parseInt(savedScrollY)));
                }
            }
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [onClose]);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className={styles.overlay}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <motion.div
                        className={styles.modal}
                        ref={wrapperRef}
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className={styles.header}>
                            <h2>Profile Settings</h2>
                            <Button
                                className={styles.button}
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
                                    src="./assets/icons/profile.avif"
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
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ProfileModal;