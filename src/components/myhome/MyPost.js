import { Component } from "react";
import { FaEllipsisH } from 'react-icons/fa'


import styles from '../../asset/styles/myhome.module.css'

class MyPost extends Component{
    render(){
        return(
        <div className={styles["profile-main"]}>
            <div className={styles["my-profile"]}>
                <div className={styles["introduction"]}>
                    <h1> Giới Thiệu</h1>
                </div>
                <div className={styles["my-friends"]}>
                    <p className={styles["title"] + ' '+ styles["friends"]}>My Friends</p>
                    <div className={styles["separator"]}></div>
                    <div className={styles["list-friends"]}>
                        <ul className={styles["list"]}>
                            <li className={styles["friend"]}>
                                <div className={styles["avatar"]}>
                                    <div className={styles["status"]}></div>
                                </div>
                            </li>
                            <li className={styles["friend"]}>
                                <div className={styles["avatar"]}>
                                    <div className={styles["status"]}></div>
                                </div>
                            </li>
                            <li className={styles["friend"]}>
                                <div className={styles["avatar"]}>
                                    <div className={styles["status"]}></div>
                                </div>
                            </li>
                            <li className={styles["friend"]}>
                                <div className={styles["avatar"]}>
                                    <div className={styles["status"]}></div>
                                </div>
                            </li>
                            <li className={styles["friend"]}>
                                <div className={styles["avatar"]}>
                                    <div className={styles["status"]}></div>
                                </div>
                            </li>
                            <li className={styles["friend"]}>
                                <div className={styles["avatar"]}>
                                    <div className={styles["status"]}></div>
                                </div>
                            </li>
                            <li className={styles["friend"]}>
                                <div className={styles["avatar"]}>
                                    <div className={styles["status"]}></div>
                                </div>
                            </li>
                            <li className={styles["friend"]}>
                                <div className={styles["avatar"]}>
                                    <div className={styles["status"]}></div>
                                </div>
                            </li>
                            <li className={styles["friend"]}>
                                <div className={styles["avatar"]}>
                                    <div className={styles["status"]}></div>
                                </div>
                            </li>
                    
                        </ul>
                    </div>
                    <p >View All (45)</p>
                </div>
                <div className={styles["my-photos"]}>
                    <p className={styles["title"] + ' ' + styles["photos"]}>My Photos</p>
                    <div className={styles["separator"]}></div>
                    <div className={styles["list-photos"]}>
                        <ul className={styles["list"]}>
                            <li className={styles["photo"]}>
                                <img src="" alt=""/>
                            </li>
                            <li className={styles["photo"]}>
                                <img src="" alt=""/>
                            </li>
                            <li className={styles["photo"]}>
                                <img src="" alt=""/>
                            </li>
                            <li className={styles["photo"]}>
                                <img src="" alt=""/>
                            </li>
                            <li className={styles["photo"]}>
                                <img src="" alt=""/>
                            </li>
                            <li className={styles["photo"]}>
                                <img src="" alt=""/>
                            </li>
                            <li className={styles["photo"]}>
                                <img src="" alt=""/>
                            </li>
                            <li className={styles["photo"]}>
                                <img src="" alt=""/>
                            </li>
                            <li className={styles["photo"]}>
                                <img src="" alt=""/>
                            </li>
                        </ul>
                    </div>
                    <p>View All (176)</p>
                </div>
            </div>
            <div className={styles["posts"]}>
                <div className={styles["create-post"]}>
                    <p className={styles["text-55"]}>Say what is on your mind...</p>
                </div>
                <div className={styles["list-post"]}>
                    <div className={styles["post"]}>
                        <div className={styles["header-post"]}>
                            <div className={styles["avatar-post"]}>
                                <div className={styles["status"]}>
                                </div>
                            </div>
                            <div className={styles["detail-post"]}>
                                <div className={styles["name-post"]}>
                                    <a href="#" className={styles["name"]}>John Doe</a>
                                    <p className={styles["posted"]}>posted</p>
                                </div>
                                <div className={styles["time-post"]}>
                                    <p >10 months ago</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles["content-post"]}>
                            <p className={styles["title-post"]}>This is the first paragraph of text. This is the first paragraph of text. </p>
                            <div className={styles["content"]}></div>
                        </div>
                        <div className={styles["postBottom"]}>
                            <div className={styles["show-interact"]}>
                                <div className={styles["show-icon"]}>
                                    <img className={styles["likeIcon"]} src="/image/like.png"  alt="" />
                                    <img className={styles["likeIcon"]} src="/image/heart.png"  alt="" />
                                    <span className={styles["postLikeCounter"]}>18 people like it</span>
                                </div>
                                <div className={styles["show-cmt"]}>
                                    <span className={styles["postCommentText"]}> 5 comments</span>
                                </div>
                            </div>
                            <div className={styles["interact"]}>
                                <div className={styles["activity like"]}>
                                    <button>
                                        <i className={styles["far fa-thumbs-up "]}></i>
                                        <span>Thích</span>
                                    </button>
                                </div>
                                <div className={styles["activity comment"]}>
                                    <button>
                                        <i className={styles["far fa-comment-alt"]}></i>
                                        <span>Bình luận</span>
                                    </button>
                                </div>
                                <div className={styles["activity share"]}>
                                    <button>
                                        <i className={styles["fas fa-share "]}></i>
                                        <span>Chia sẻ</span>
                                    </button>
                                </div>
                            </div>
                            <div className={styles["list-cmt"]}>
                                <ul>
                                    <li className={styles["cmt"]}>
                                        <div className={styles["img-profile"]}>
                                            <img src="" alt=""/>
                                            <div className={styles["online"]}>
                                                <div className={styles["ellipse"]}></div>
                                            </div>
                                        </div>
                                        <div className={styles["content-cmt"]}>
                                            <div className={styles["center-cmt"]}>
                                                <div className={styles["content-center"]}>
                                                    <p>Long</p>
                                                    <p>This is the first paragraph of text. This is the first paragraph of text.</p>
                                                </div>
                                                <div className={styles["feed-back"]}>
                                                    <span>Thích</span>
                                                    <span>Phản hồi</span>
                                                    <span>28 phút</span>
                                                </div>
                                            </div>
                                            <div className={styles["setting-cmt"]}>
                                                <button>
                                                    <FaEllipsisH />
                                                </button>
                                            </div>
                                        </div>
                                    </li>
                                    <li className={styles["cmt"]}>
                                        <div className={styles["img-profile"]}>
                                            <img src="" alt=""/>
                                            <div className={styles["online"]}>
                                                <div className={styles["ellipse"]}></div>
                                            </div>
                                        </div>
                                        <div className={styles["content-cmt"]}>
                                            <div className={styles["center-cmt"]}>
                                                <div className={styles["content-center"]}>
                                                    <p>Long</p>
                                                    <p>This is the first paragraph of text. This is the first paragraph of text.</p>
                                                </div>
                                                <div className={styles["feed-back"]}>
                                                    <span>Thích</span>
                                                    <span>Phản hồi</span>
                                                    <span>28 phút</span>
                                                </div>
                                            </div>
                                            <div className={styles["setting-cmt"]}>
                                                <button>
                                                    <FaEllipsisH />
                                                </button>
                                            </div>
                                        </div>
                                    </li>
                                    <li className={styles["cmt"]}>
                                        <div className={styles["img-profile"]}>
                                            <img src="" alt=""/>
                                            <div className={styles["online"]}>
                                                <div className={styles["ellipse"]}></div>
                                            </div>
                                        </div>
                                        <div className={styles["content-cmt"]}>
                                            <div className={styles["center-cmt"]}>
                                                <div className={styles["content-center"]}>
                                                    <p>Long</p>
                                                    <p>This is the first paragraph of text. This is the first paragraph of text.</p>
                                                </div>
                                                <div className={styles["feed-back"]}>
                                                    <span>Thích</span>
                                                    <span>Phản hồi</span>
                                                    <span>28 phút</span>
                                                </div>
                                            </div>
                                            <div className={styles["setting-cmt"]}>
                                                <button>
                                                    <FaEllipsisH />
                                                </button>
                                            </div>
                                        </div>
                                    </li>
                                </ul>

                            </div>
                            <div className={styles["activity-cmt"]}>
                                <div className={styles["img-profile"]}>
                                    <img src="" alt=""/>
                                    <div className={styles["online"]}>
                                        <div className={styles["ellipse"]}></div>
                                    </div>
                                </div>
                                <div className={styles["content-cmt"]}>
                                    <input type="text" placeholder="Viết bình luận ..."/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}




export default MyPost