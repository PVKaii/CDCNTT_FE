import { Component } from "react";
import styles from '../../asset/styles/login.module.css'
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

class Authen extends Component{
    render(){
        return(
            <div className={styles["container"]}>
                <div className={styles["left-container"]}>
                    <img src="https://images.unsplash.com/photo-1511688878353-3a2f5be94cd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt=""></img>
                </div>
                <div className={styles["right-container"]}>
                    <div className={styles["login"]}>
                        <div className={styles["option"]}>
                            <div name="login" 
                                onClick={
                                    ()=>{this.props.handleClickOption("login")}
                                }
                            >
                                Login to Your Account
                            </div>
                            <div onClick={()=>{this.props.handleClickOption("register")}}>Sign Up For Free</div>
                        </div>
                        {
                            this.props.clickOption ? <LoginForm  onChange={this.props.onChange} onLogin={this.props.onLogin}/> : <RegisterForm onChange={this.props.onChange} handleSubmit={this.props.handleSubmit} onBlur={this.props.onBlur} error={this.props.error}/>
                        }


                    </div>
                </div>
          </div>
        )
    }
}

export default Authen