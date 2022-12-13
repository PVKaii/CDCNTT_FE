import { Component } from "react";
import { FaEllipsisH,FaRegThumbsUp,FaRegCommentAlt,FaShare } from 'react-icons/fa'
import { Link } from "react-router-dom";
import { listPost,listCommentOfOnePost } from "../../data";

import Post from "../interaction/Post";
import styles from '../../asset/styles/homepage.module.css'
import CreatePost from "../interaction/CreatePost";
import OnlineFriends from "../interaction/OnlineFriends"
class HomeContent extends Component{
  render(){


    

    const listCmt = listCommentOfOnePost.map((comment,index)=>{
      return(
        <li className={styles["cmt"]} key={index}>
          <div className={styles["img-profile"]}>
            <img src={listPost[0].User.srcAvatar} alt=""/>
            <div className={styles["online"]}>
              <div className={styles["ellipse"]}></div>
            </div>
          </div>
          <div className={styles["content-cmt"]}>
            <div className={styles["center-cmt"]}>
              <div className={styles["content-center"]}>
                <p style={{fontWeight:"700"}}>{comment.User[1].name}</p>
                <p>{comment.Content}</p>
              </div>
              <div className={styles["feed-back"]}>
                <span>Thích</span>
                <span>Phản hồi</span>
                <span>{comment.CreatedDate}</span>
              </div>
            </div>
            <div className={styles["setting-cmt"]}>
              <button>
                <FaEllipsisH/>
              </button>
            </div>
          </div>
        </li>
      )
    })


    return(
        <div className={styles["container"]} >
          <div className={styles["navigation"]} >
            <div className={styles["my-profile-menu"]}>

              <ul className={styles["list-detail"]}>
                <li>
                  <Link className={styles["a-profile"]} to={"/myhome"}>
                    <div className={styles["img-profile"]}>
                        <img src="./image/avatar.jpg" />
                      </div>
                      <div className={styles["name-profile"]}>
                        <p>Long</p>
                      </div>
                  </Link>
                </li>
                <li >
                    <Link to={`/myhome/friends`}>
                      <div className={styles["icon"]}>
                        <i className={styles["fa-solid fa-user-group fa-2xl"]}></i>
                        <img src="./image/icon-friend.png" alt=""/>
                        </div>
                        <div className={styles["title"]}>
                        <p>Bạn bè</p>
                        </div>
                    </Link>
                </li>
                <li>
                  <a href="#">
                    <div className={styles["icon"]}>
                      {/* <i className={styles["fa-solid fa-users-viewfinder fa-2xl"]}></i>  */}
                      <img src="./image/icon-group.png" alt=""/>
                    </div>
                    <div className={styles["title"]}>
                      <p>Nhóm</p>
                    </div>
                  </a>
                </li>
                <li >
                  <a href="#">
                    <div className={styles["icon"]}>
                      <i className={styles["fa-brands fa-facebook-messenger fa-2xl"]}></i>
                      <img src="./image/icons-messages.png" alt=""/>
                    </div>
                    <div className={styles["title"]}>
                      <p>Messenger</p>
                    </div>
                  </a>
                </li>
                <li >
                  <a href="#">
                    <div className={styles["icon"]}>
                      <i className={styles["fa-solid fa-right-from-bracket fa-2xl"]}></i>
                      <img src="./image/icons-logout.png" alt=""/>
                    </div>
                    <div className={styles["title"]}>
                      <p>Log Out</p>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles["main"]} >
            <CreatePost fileSelected={this.props.fileSelected} handlePost={this.props.handlePost} contentChange={this.props.contentChange}/>
            <div className={styles["list-post"]}>              
              <Post/>     
              <Post/>
              <Post/>
              <Post/>
              <Post/>   
              <Post/>
            </div>

          </div>
          
          <div className={styles["right-container"]}>
            <OnlineFriends/>
          </div>
      </div>
    )
  }
}

export default HomeContent