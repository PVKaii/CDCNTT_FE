import styles from '../asset/styles/header.module.css'
import { FaFacebookMessenger,FaUserFriends,FaBell,FaSistrix } from "react-icons/fa"
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Notification from '../components/interaction/Notification';

const MenuBar = ()=>{
    const [clickNotification,setclickNotification] = useState(false);
    const [checkTypeNotification,setCheckTypeNotificaion] = useState(0);
    
    const onClickHanle = (value)=>{
        setclickNotification(!clickNotification)
        setCheckTypeNotificaion(value)
    }

    return(
        <header className={styles["header"]}>
            <div className={styles['left']}>
                <Link to={"page"}>
                    <span>Social Medial</span>
                </Link>

                <div className={styles["header-search"]}>
                    <FaSistrix />
                    <input type="search" name="" placeholder='search...' />
                </div>
            </div>
            <div className={styles['right']}>
                <div className={styles["group-notification"]}>
                    <div className={styles["contact"]}
                        onClick={()=>onClickHanle(1)}
                    >
                        <div className={styles['count-nof']}>
                            <span>1</span>
                        </div>
                        <div className={styles['icon']}>
                            <FaUserFriends style={{margin:"auto"}}/>
                        </div>
                    </div>
                    <div className={styles["contact"]}  
                        onClick={()=>onClickHanle(2)}
                    >
                        <div className={styles['count-nof']}>
                            <span>1</span>
                        </div>
                        <div className={styles['icon']}>
                            <FaFacebookMessenger style={{margin:"auto"}} />
                        </div> 
                    </div>
                    <div className={styles["contact"]}
                        onClick={()=>onClickHanle(3)}
                    >
                        <div className={styles['count-nof']}>
                            <span>1</span>
                        </div>
                        <div className={styles['icon']}>
                            <FaBell style={{margin:"auto"}}/>
                        </div>
                    </div>
                </div>
                    {clickNotification ? < Notification checkTypeNotification={checkTypeNotification} /> : null}
                <div className={styles["user"]}>
                    <img src="/image/avatar.jpg" alt=""/>
                    <span>Long</span>
                </div>
            </div>
        </header>
    )
}
export default MenuBar;