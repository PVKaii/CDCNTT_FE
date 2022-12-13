import { Component } from "react";
import styles from '../../asset/styles/about.module.css'
import {IoEarth} from 'react-icons/io5'
import { MdOutlineModeEditOutline } from 'react-icons/md'
class AboutContent extends Component{
    render(){
        return(
            <div className={styles["profile-main"]}>
                <div className={styles["about"]}>
                    <div className={styles["attribute"]}>
                        <div className={styles["show"]}>
                            <p>Name</p>
                            <p>Long</p>
                        </div>
                        <div className={styles["btn"]}>
                            <div className={styles["btn-obj"]}>
                                <IoEarth/>
                                <span>Công khai</span>
                            </div>
                            <div className={styles["btn-edit"]}>
                                <MdOutlineModeEditOutline/>
                                <span>Edit</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles["attribute"]}>
                        <div className={styles["show"]}>
                            <p>Gender</p>
                            <p>Male</p>
                        </div>
                        <div className={styles["btn"]}>
                            <div className={styles["btn-obj"]}>
                                <IoEarth/>
                                <span>Công khai</span>
                            </div>
                            <div className={styles["btn-edit"]}>
                                <MdOutlineModeEditOutline/>
                                <span>Edit</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles["attribute"]}>
                        <div className={styles["show"]}>
                            <p>Birthdate</p>
                            <p>25/4/2001</p>
                        </div>
                        <div className={styles["btn"]}>
                            <div className={styles["btn-obj"]}>
                                <IoEarth/>
                                <span>Công khai</span>
                            </div>
                            <div className={styles["btn-edit"]}>
                                <MdOutlineModeEditOutline/>
                                <span>Edit</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles["attribute"]}>
                        <div className={styles["show"]}>
                            <p>Location</p>
                            <p>Viet Nam</p>
                        </div>
                        <div className={styles["btn"]}>
                            <div className={styles["btn-obj"]}>
                                <IoEarth/>
                                <span>Công khai</span>
                            </div>
                            <div className={styles["btn-edit"]}>
                                <MdOutlineModeEditOutline/>
                                <span>Edit</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles["attribute"]}>
                        <div className={styles["show"]}>
                            <p>Education</p>
                            <p>Đại học</p>
                        </div>
                        <div className={styles["btn"]}>
                            <div className={styles["btn-obj"]}>
                                <IoEarth/>
                                <span>Công khai</span>
                            </div>
                            <div className={styles["btn-edit"]}>
                                <MdOutlineModeEditOutline/>
                                <span>Edit</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles["attribute"]}>
                        <div className={styles["show"]}>
                            <p>Number</p>
                            <p>1234567890</p>
                        </div>
                        <div className={styles["btn"]}>
                            <div className={styles["btn-obj"]}>
                                <IoEarth/>
                                <span>Công khai</span>
                            </div>
                            <div className={styles["btn-edit"]}>
                                <MdOutlineModeEditOutline/>
                                <span>Edit</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles["attribute"]}>
                        <div className={styles["show"]}>
                            <p>Email</p>
                            <p>abc@gamil.com</p>
                        </div>
                        <div className={styles["btn"]}>
                            <div className={styles["btn-obj"]}>
                                <IoEarth/>
                                <span>Công khai</span>
                            </div>
                            <div className={styles["btn-edit"]}>
                                <MdOutlineModeEditOutline/>
                                <span>Edit</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}








export default AboutContent;