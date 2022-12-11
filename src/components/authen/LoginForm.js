import { Component } from "react";
import styles from '../../asset/styles/login.module.css'
import { MdEmail } from 'react-icons/md'
import { RiLockPasswordFill } from 'react-icons/ri'
class LoginForm extends Component{
    render(){
        return(
            <div className={styles["form"]}>
            <div className={styles["input"]}>
                <input 
                    type="text" 
                    name="username" 
                    value={this.props.username} 
                    placeholder="Login"
                    onChange={(e)=>{ this.props.onChange(e) }}
                />
                <MdEmail/>
            </div>
            <div className={styles["input"]}>
                <input 
                    type="password"
                    name="password"
                    value={this.props.password} 
                    placeholder="Password"
                    onChange={(e)=>{ this.props.onChange(e) }}
                />
                <RiLockPasswordFill/>
            </div>
            <div className={styles["btn-submit"]}>
                <button onClick={this.props.onLogin}>Submit</button>
                <a href="#">Forgot Password</a>
            </div>
        </div>
        )
    }

}

export default LoginForm