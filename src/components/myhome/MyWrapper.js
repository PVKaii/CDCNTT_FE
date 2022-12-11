import { Component } from "react";
import { FaCamera } from "react-icons/fa"
import styles from '../../asset/styles/myhome.module.css'
class MyWrapper extends Component{
    render(){
        return(
            <div className={styles["sidebar-wrapper"]}>
                <div className={styles["cover-image"]}>
                    <img src="/image/coverImg.jpg" alt=""/>
                    <div className={styles["edit-imge"]}>
                        <button>
                            <FaCamera/>
                            <span style={{marginLeft:"5px"}}>Chỉnh sửa ảnh bìa</span>
                        </button>
                    </div>
                </div>
                <div className={styles["avatar-image"]}>
                    <img src="/image/avatar.jpg" alt=""/>
                    <h1>Long</h1>
                    <ul className={styles["info"]}>
                        <li>
                            <span style={{fontWeight:"bold"}}>12</span>
                            <span style={{marginLeft:"10px"}}>posts</span>
                        </li>
                        <li style={{marginLeft:"30px"}}>
                            <span style={{fontWeight:"bold"}}>100</span>
                            <span style={{marginLeft:"10px"}}>friends</span>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
export default MyWrapper;