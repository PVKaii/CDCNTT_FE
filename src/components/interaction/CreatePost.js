import { Component } from "react";
import {MdPermMedia,MdEmojiEmotions} from "react-icons/md"

import styles from '../../asset/styles/createpost.module.css'


class CreatePost extends Component{
    render(){
        return(
            <div className={styles["create-post"]}>
              <div className={styles["cp-wrapper"]}>
                <div className={styles["cp-top"]}>
                    <img className={styles["img-profile"]} src="/image/avatar.jpg" alt=""/>
                    <input className={styles["cp-input"]} placeholder="what's in your mind Long ?"/>
                </div>
                <hr className={styles["cp-hr"]} />
                <div className={styles["cp-bottom"]}>
                    <div className={styles["left"]}>
                        <div className={styles["cp-option"]}>
                            <MdPermMedia color="tomato" className={styles["cp-icon"]}/>
                            <span className="cp-optiontext">Photo or Video</span>
                        </div>
                        <div className={styles["cp-option"]}>
                            <MdEmojiEmotions color="goldenrod" className={styles["cp-icon"]}/>
                            <span className="cp-optiontext">Feelings</span>
                        </div>
                    </div>
                    <div className={styles["right"]}>
                        <button className={styles["cp-btn"]}>Post</button>
                    </div>

                </div>
               
              </div>
            </div>
        )
    }
}


export default CreatePost;