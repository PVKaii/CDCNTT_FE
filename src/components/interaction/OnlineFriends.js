import { Component } from "react";
import { onlineFriends } from "../../data";
import styles from '../../asset/styles/homepage.module.css'
class OnlineFriends extends Component{
    render(){
        
        const friendOnline = onlineFriends.map((friend,index)=>{
            return(
            <li key={index}>
                <div className={styles["avatar"]}>
                <img src={friend.srcAvatar} alt=""/>
                </div>
                <div className={styles["name-friend"]}>
                <p>{friend.name}</p>
                </div>
                <div className={styles["status"]}>
                </div>
            </li>
            )
        })
        return(
            <div className={styles["list-friend"]}>
              <h2>Người liên hệ</h2>
              <ul>
                {friendOnline}
              </ul>
            </div>
        )
    }
}
export default OnlineFriends