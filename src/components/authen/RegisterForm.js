import { Component } from "react";
import styles from '../../asset/styles/login.module.css'
import { MdEmail } from 'react-icons/md'
import { FaUserAlt } from 'react-icons/fa'
import { RiLockPasswordFill } from 'react-icons/ri'
class RegisterForm extends Component{
    render(){
        return(
            <div className={styles["form"]}>
                <p>{this.props.error.username}</p>
                <div className={ this.props.error.username.length > 0 ? styles["is-invaid"] :  styles["input"]}>
                    <input 
                        type="text" 
                        name="username" 
                        value={this.props.username}
                        placeholder="Email"
                        onChange={(e)=>{ this.props.onChange(e) }}
                        onBlur={(e)=> {this.props.onBlur(e)}}
                    />
                    <MdEmail/>
                </div>
                <p>{this.props.error.name}</p>
                <div className={this.props.error.name.length > 0 ? styles["is-invaid"] : styles["input"]}>
                    <input 
                        type="text" 
                        name="name" 
                        value={this.props.name}
                        placeholder="Name"
                        onChange={(e)=>{ this.props.onChange(e) }}
                        onBlur={(e)=> {this.props.onBlur(e)}}
                    />
                    <FaUserAlt/>
                </div>
                <div className={styles["input-date"]}>
                    <label>Birthdate</label>
                    <input 
                        type="date" 
                        name="dateOfBirth" 
                        value={this.props.dateOfBirth} 
                        min="1940-01-01" 
                        max="2005-01-01" 
                        //onChange={(e)=>{ this.props.onChange(e) }}
                        
                    />
                </div>
                <div className={styles["input-sex"]}>
                    <label>Gender</label>
                    <div className={styles["sex"]}>
                        <input 
                            type="radio" 
                            name="gender" 
                            value={1}
                            //onChange={(e)=>{ this.props.onChange(e) }}
                        />
                        <label>Male</label>
                    </div>
                    <div className={styles["sex"]}>
                        <input 
                            type="radio" 
                            name="gender" 
                            value={2}
                           // onChange={(e)=>{ this.props.onChange(e) }}
                        />
                        <label>Female</label>
                    </div>
                    <div className={styles["sex"]}>
                        <input 
                            type="radio" 
                            name="gender" 
                            value={3}
                            //onChange={(e)=>{ this.props.onChange(e) }}
                        />
                        <label>Other</label>
                    </div>
                </div>
                <div className={styles["input"]}>
                    <input 
                        type="password" 
                        name="password" 
                        value={this.props.password}
                        placeholder="Password"
                        onChange={(e)=>{ this.props.onChange(e) }}
                        onBlur={(e)=> {this.props.onBlur(e)}}
                    />
                    <RiLockPasswordFill/>
                </div>
                <div className={styles["input"]}>
                    <input 
                        type="password" 
                        name="confirmpassword" 
                        value={this.props.confirmpassword}
                        placeholder="Confirm Password"
                        onChange={(e)=>{ this.props.onChange(e) }}
                        onBlur={(e)=> {this.props.onBlur(e)}}
                    />
                        
                    <RiLockPasswordFill/>
                </div>
                <div className={styles["btn-submit"]}>
                    <button onClick={this.props.handleSubmit}>Submit</button>
                    <a href="#">Forgot Password</a>
                </div>
            </div>
        )
    }

}

export default RegisterForm