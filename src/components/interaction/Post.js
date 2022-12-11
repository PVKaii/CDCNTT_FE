import { Component } from "react";
import styles from "../../asset/styles/post.module.css"
import { listPost,listInteractionOfOnePost,listCommentOfOnePost } from "../../data";
import { Link } from "react-router-dom";
import { FaRegThumbsUp,FaRegCommentAlt,FaShare } from 'react-icons/fa'
import { MdMoreVert } from "react-icons/md"

class Post extends Component{
    render(){
        return(
            <div className={styles["post"]}>
                <div className={styles["post-wrapper"]}>
                    <div className={styles["post-top"]}>
                        <div className={styles["post-topLeft"]}>
                            <img className={styles["post-profileImgae"]} src="/image/avatar.jpg" />
                            <Link className={styles["post-name"]} to={listPost[0].User[0].srcLink}>
                                <span >{listPost[0].User[1].name}</span>
                            </Link>
                            <span className={styles["post-date"]}>{listPost[0].timePost}</span>
                        </div>
                        <div className={styles["post-topRight"]}>
                            <MdMoreVert/>
                        </div>
                    </div>
                    <div className={styles["post-center"]}>
                        <span className={styles["post-centerTitle"]}>{listPost[0].titlePost}</span>    
                        <div className={styles["post-centerContent"]}>
                            <img className={styles["post-centerImage"]} src="/image/avatar.jpg" alt=""/>
                        </div>
                    </div>
                    <div className={styles["post-bottom"]}>
                        <div className={styles["show-interact"]}>
                            <div className={styles["show-icon"]}>
                                <img className={styles["likeIcon"]} src="image/like.png"  alt="" />
                                <span className={styles["count-like"]}>{listInteractionOfOnePost.length + " people like it"}</span>
                            </div>
                            <span className={styles["count-comment"]}>{listCommentOfOnePost.length + " comments"}</span>
                        </div>
                        <div className={styles["interact"]}>
                            <div className={styles["activity"]}>
                                <FaRegThumbsUp/>
                                <span>Thích</span>
                            </div>
                            <div className={styles["activity"]}>
                                <FaRegCommentAlt/>
                                <span>Bình luận</span>
                            </div>
                            <div className={styles["activity"]}>
                                <FaShare/>
                                <span>Chia sẻ</span>
                            </div>
                        </div>
                        <div className={styles["list-cmt"]}>
                            <ul>
                            {/* {listCmt} */}
                            </ul>
                            <div className={styles["activity-cmt"]}>
                                <div className={styles["img-profile"]}>
                                    <img src="./image/avatar.jpg" alt=""/>
                                    <div className={styles["online"]}>
                                    <div className={styles["ellipse"]}></div>
                                    </div>
                                </div>
                                <div className={styles["content-cmt"]}>
                                    <input placeholder="Viết bình luận ......" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
          </div>
        )
    }
}

export default Post;