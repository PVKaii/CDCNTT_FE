import { Component } from "react";
import styles from "../../asset/styles/notification.module.css"
import Message from "./Message";


class Notification extends Component{
    render(){
        const check = this.props.checkTypeNotification
        return(
            <div className={styles["container-notification"]}>
                {check===2 ? < Message/> : null}
            </div>
        )
    }
}



export default Notification