import { Component } from "react";
import styles from '../asset/styles/login.module.css'

class LoginForm extends Component{
    render(){
        return(
            <div className={styles["container"]}>
                <div className={styles["left-container"]}>
                    <img src="https://th.bing.com/th/id/OIP.N4AIyR56AmRGQOp5oZOTVAHaLH?pid=ImgDet&w=800&h=1200&rs=1" alt=""></img>
                </div>
                <div className={styles["right-container"]}>
                    <div className={styles["login"]}>
                        <div className={styles["option"]}>
                            <a href="#">Login to Your Account</a>
                            <a href="#">Sign Up For Free</a>
                        </div>
                        <div className={styles["form"]}>
                            <div className={styles["input"]}>
                                <input type="text" name="" id="" placeholder="Login"/>
                                <i className={styles["fa-regular fa-user"]}></i>
                            </div>
                            <div className={styles["input"]}>
                                <input type="password" placeholder="Password"/>
                                <i className={styles["fa-solid fa-lock"]}></i>
                            </div>
                            <div className={styles["btn-submit"]}>
                                <button>Submit</button>
                                <a href="#">Forgot Password</a>
                            </div>
                        </div>
                    </div>
                </div>
          </div>
        )
    }
}

export default LoginForm