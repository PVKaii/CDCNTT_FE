import { Component } from "react";
import styles from '../../asset/styles/myhome.module.css'


class MyHomeContainer extends Component{
    render(){
        return( 
        <div className={styles["container"]}>
            <div className={styles["navigation"]}>
                <ul className={styles["list-nav"]}>
                    {< this.props.loadHomeMenu />}
                </ul>
            </div>
            <div className={styles["container-middle"]}>
                {< this.props.loadMyProfile />}
            </div>
        </div>
        )
    }
}




export default MyHomeContainer