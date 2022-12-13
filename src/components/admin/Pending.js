import { Component } from "react";
import styles from "../../asset/styles/listreview.module.css"
import { TiTickOutline,TiTimesOutline } from 'react-icons/ti'

import { MdMoreVert } from "react-icons/md"

class Pending extends Component{
    render(){
        
        return(
            <div className={styles["post"]}>
                <div className={styles["post-wrapper"]}>
                    <div className={styles["post-top"]}>
                        <div className={styles["post-topLeft"]}>
                            <h1 className={styles["post-date"]}>{this.props.pending.createdDate}</h1>
                        </div>
                        <div className={styles["post-topRight"]}>
                            <MdMoreVert/>
                        </div>
                    </div>
                    <div className={styles["post-center"]}>
                        <span className={styles["post-centerTitle"]}>{this.props.pending.content}</span>    
                        <div className={styles["post-centerContent"]}>
                            <img className={styles["post-centerImage"]} src={this.props.pending.fileUrl} alt=""/>
                        </div>
                    </div>
                    <div className={styles["post-bottom"]}>
                        <div className={styles["interact"]}>
                            <div className={styles["activity"]} onClick={()=>this.props.handleApprove(this.props.pending.id)}>
                                <TiTickOutline size="40px"/>
                                <span>Accept</span>
                            </div>
                            <div className={styles["activity"]} onClick={()=>this.props.handleDeny(this.props.pending.id)}>
                                <TiTimesOutline size="40px"/>
                                <span>Deny</span>
                            </div>
                        </div>
                    </div>
                </div>
          </div>
        )
    }
}

export default Pending;