import { Component } from "react";
import styles from '../../asset/styles/myhome.module.css'

class AboutContent extends Component{
    render(){
        return(
            <div className={styles["profile-main"]}>
                <div className={styles["about"]}>
                    <div className={styles["attribute"] + ' ' + styles["fist-name"]}>
                        <div className={styles["show"]}>
                            <p>First Name</p>
                            <p>Long</p>
                        </div>
                        <div className={styles["btn"]}>
                            <div className={styles["btn-obj"]}>
                            <button>
                                <i className={styles["fa-solid fa-earth-americas"]}></i>
                                <span>Công khai</span>
                            </button>
                            </div>
                            <div className={styles["btn-edit"]}>
                            <button >
                                <i className={styles["fa-regular fa-pen-to-square"]}></i>
                                <span>Edit</span>
                            </button>
                            </div>

                        </div>
                    </div>
                    <div className={styles["attribute"] + ' ' + styles["last-name"]}>
                        <div className={styles["show"]}>
                            <p>Last Name</p>
                            <p>Long</p>
                        </div>
                        <div className={styles["btn"]}>
                            <div className={styles["btn-obj"]}>
                                <button>
                                    <i className={styles["fa-solid fa-earth-americas"]}></i>
                                    <span>Công khai</span>
                                </button>
                            </div>
                            <div className={styles["btn-edit"]}>
                                <button >
                                    <i className={styles["fa-regular fa-pen-to-square"]}></i>
                                    <span>Edit</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className={styles["attribute"] + ' ' + styles["gender"]}>
                        <div className={styles["show"]}>
                            <p>Gender</p>
                            <p>Male</p>
                        </div>
                        <div className={styles["btn"]}>
                            <div className={styles["btn-obj"]}>
                                <button>
                                    <i className={styles["fa-solid fa-earth-americas"]}></i>
                                    <span>Công khai</span>
                                </button>
                            </div>
                            <div className={styles["btn-edit"]}>
                                <button >
                                    <i className={styles["fa-regular fa-pen-to-square"]}></i>
                                    <span>Edit</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className={styles["attribute"] + ' ' + styles["birthdate"]}>
                        <div className={styles["show"]}>
                            <p>Birthdate</p>
                            <p>25/4/2001</p>
                        </div>
                        <div className={styles["btn"]}>
                            <div className={styles["btn-obj"]}>
                                <button>
                                    <i className={styles["fa-solid fa-earth-americas"]}></i>
                                    <span>Công khai</span>
                                </button>
                            </div>
                            <div className={styles["btn-edit"]}>
                                <button >
                                    <i className={styles["fa-regular fa-pen-to-square"]}></i>
                                    <span>Edit</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className={styles["attribute"] + ' ' + styles["location"]}>
                        <div className={styles["show"]}>
                            <p>Location</p>
                            <p>Viet Nam</p>
                        </div>
                        <div className={styles["btn"]}>
                            <div className={styles["btn-obj"]}>
                                <button>
                                    <i className={styles["fa-solid fa-earth-americas"]}></i>
                                    <span>Công khai</span>
                                </button>
                            </div>
                            <div className={styles["btn-edit"]}>
                                <button >
                                    <i className={styles["fa-regular fa-pen-to-square"]}></i>
                                    <span>Edit</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className={styles["attribute"] + ' ' + styles["education"]}>
                        <div className={styles["show"]}>
                            <p>Education</p>
                            <p>Đại học</p>
                        </div>
                        <div className={styles["btn"]}>
                            <div className={styles["btn-obj"]}>
                                <button>
                                    <i className={styles["fa-solid fa-earth-americas"]}></i>
                                    <span>Công khai</span>
                                </button>
                            </div>
                            <div className={styles["btn-edit"]}>
                                <button >
                                    <i className={styles["fa-regular fa-pen-to-square"]}></i>
                                    <span>Edit</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className={styles["attribute"] + ' ' + styles["number"]}>
                        <div className={styles["show"]}>
                            <p>Number</p>
                            <p>1234567890</p>
                        </div>
                        <div className={styles["btn"]}>
                            <div className={styles["btn-obj"]}>
                                <button>
                                    <i className={styles["fa-solid fa-earth-americas"]}></i>
                                    <span>Công khai</span>
                                </button>
                            </div>
                            <div className={styles["btn-edit"]}>
                                <button >
                                    <i className={styles["fa-regular fa-pen-to-square"]}></i>
                                    <span>Edit</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className={styles["attribute"] + ' ' + styles["email"]}>
                        <div className={styles["show"]}>
                            <p>Email</p>
                            <p>abc@gamil.com</p>
                        </div>
                        <div className={styles["btn"]}>
                            <div className={styles["btn-obj"]}>
                                <button>
                                    <i className={styles["fa-solid fa-earth-americas"]}></i>
                                    <span>Công khai</span>
                                </button>
                            </div>
                            <div className={styles["btn-edit"]}>
                                <button >
                                    <i className={styles["fa-regular fa-pen-to-square"]}></i>
                                    <span>Edit</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}








export default AboutContent;