import { Component } from "react";
import styles from '../../asset/styles/myhome.module.css'
class MyWrapper extends Component{
    render(){
        return(
            <div className={styles["sidebar-wrapper"]}>
                <div className={styles["cover-image"]}>
                    <div className={styles["img"]}>
                        <img src="" alt=""/>
                    </div>
                    <div className={styles["edit-imge"]}>
                        <button>
                            <i className={styles["fa-solid fa-camera"]}></i>
                            <span>Chỉnh sửa ảnh bìa</span>
                        </button>
                    </div>
                </div>
                <div className={styles["avatar-image"]}>
                    <div className={styles["avatar"]}>
                        <img src="" alt=""/>
                    </div>
                    <div className={styles["name"]}>
                        <h1>Long</h1>
                    </div>
                </div>
            </div>
        )
    }
}
export default MyWrapper;