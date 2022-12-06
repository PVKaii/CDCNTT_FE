import styles from '../asset/styles/header.module.css'
import { FaFacebookMessenger,FaUserFriends,FaBell } from "react-icons/fa"

const MenuBar = ()=>{
    return(
        <header className={styles["header"]}>
            <div className={styles["header-logo"]}>
            </div>
            <div className={styles["header-search"]}>
                <input type="search" name="" />
            </div>
            <div className={styles["header-profile"]}>
                <div className={styles["img-profile"]}>
                    <div className={styles['avatar']}>
                        <img src="" alt=""/>
                    </div>
                    <div className={styles["online"]}>
                        <div className={styles["ellipse"]}></div>
                    </div>
                </div>
                <p className={styles["profile-name"]}>John Doe</p>

            </div>
            <div className={styles["group-notification"]}>
                <div className={styles["contact"] + " " + styles["people"]}>
                    <div className={styles['count-nof']}>
                        <span>1</span>
                    </div>
                    <div className={styles['icon']}>
                        <FaUserFriends size="2.3vh" style={{margin:"auto"}} />
                    </div>
                </div>
                <div className={styles["contact"] + " " + styles["messages"]}>
                    <div className={styles['count-nof']}>
                        <span>1</span>
                    </div>
                    <div className={styles['icon']}>
                        <FaFacebookMessenger size="2.3vh" style={{margin:"auto"}}/>
                    </div>
                </div>
                <div className={styles["contact"] + " " + styles["notifications"]}>
                    <div className={styles['count-nof']}>
                        <span>1</span>
                    </div>
                    <div className={styles['icon']}>
                        <FaBell size="2.3vh" style={{margin:"auto"}}/>
                    </div>
                </div>
            </div>
        </header>
    )
}
export default MenuBar;