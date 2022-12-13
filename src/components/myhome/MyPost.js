import { Component } from "react";


import styles from '../../asset/styles/mypost.module.css'
import CreatePost from "../interaction/CreatePost";
import Post from "../interaction/Post";

class MyPost extends Component{

    loadListPost = ()=>{
        return this.props.listPost.map((post,index)=>{
            return <Post key={index} post={post}/>
        })
    }

    loadListFriend = ()=>{
        return this.props.myFriend.map((friend,index)=>{
            return  <li className={styles["friend"]} key={index}>
            <img src="/image/avatar.jpg" />
            <span>{friend.name}</span>
        </li>
        })
    }

    render(){
        return(
        <div className={styles["profile-main"]}>
            <div className={styles["my-profile"]}>
                <div className={styles["introduction"]}>
                    <h1> Giới Thiệu</h1>
                </div>
                <div className={styles["my-friends"]}>
                    <p className={styles["title"]}>My Friends</p>
                    <hr className={styles["cp-hr"]}></hr>
                    <ul className={styles["list-friends"]}>
                        {this.loadListFriend()}

                    </ul>
                    <p className={styles["total-friends"]}>View All (45)</p>
                </div>
                <div className={styles["my-photos"]}>
                    <p className={styles["title"]}>My Photos</p>
                    <hr className={styles["cp-hr"]}></hr>
                    <div className={styles["list-photos"]}>
                        <img src="/image/image.png" alt=""/>
                        <img src="/image/image.png" alt=""/>
                        <img src="/image/image.png" alt=""/>
                        <img src="/image/image.png" alt=""/>
                        <img src="/image/image.png" alt=""/>
                        <img src="/image/image.png" alt=""/>
                        <img src="/image/image.png" alt=""/>
                        <img src="/image/image.png" alt=""/>
                        <img src="/image/image.png" alt=""/>
                    </div>
                    <p className={styles["total-photos"]}>View All (176)</p>
                </div>
            </div>
            <div className={styles["main"]}>
                <CreatePost/>
                <div className={styles["list-post"]}>
                    {this.loadListPost()}
                </div>
            </div>
        </div>
        )
    }
}





export default MyPost