import { Component } from "react";
import { FaEllipsisH,FaRegThumbsUp,FaRegCommentAlt,FaShare } from 'react-icons/fa'

import styles from '../../asset/styles/homepage.module.css'

class HomeContent extends Component{
    render(){
        return(
            <div className={styles["container"]}>
            <div className={styles["navigation"]}>
              <div className={styles["my-profile-menu"]}>
    
                <ul className={styles["list-detail"]}>
                  <li>
                    <a className={styles["a-profile"]} href="#">         
                      <div className={styles["img-profile"]}>
                        <img src="./image/avatar.jpg" />
                      </div>
                      <div className={styles["name-profile"]}>
                        <p>Long</p>
                      </div>
                      
                    </a>
                  </li>
                  <li >
                    <a href="#">
                        <div className={styles["icon"]}>
                        <i className={styles["fa-solid fa-user-group fa-2xl"]}></i>
                        <img src="./image/icon-friend.png" alt=""/>
                        </div>
                        <div className={styles["title"]}>
                        <p>Bạn bè</p>
                        </div>
                    </a>
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
            <div className={styles["main"]}>
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
                          <img className={styles["likeIcon"]} src="image/like.png"  alt="" />
                          <img className={styles["likeIcon"]} src="image/heart.png"  alt="" />
                          <span className={styles["postLikeCounter"]}>18 people like it</span>
                        </div>
                        <div className={styles["show-cmt"]}>
                          <span className={styles["postCommentText"]}> 5 comments</span>
                        </div>
                      </div>
                      <div className={styles["interact"]}>
                        <div className={styles["activity"] + ' ' + styles["like"]}>
                            <button>
                                <FaRegThumbsUp size={"1vw"}/>
                                <span>Thích</span>
                            </button>
                        </div>
                        <div className={styles["activity"] + ' ' + styles["comment"]}>
                            <button>
                                <FaRegCommentAlt size={"1vw"}/>
                                <span>Bình luận</span>
                            </button>
                        </div>
                        <div className={styles["activity"] + ' ' + styles["share"]}>
                            <button>
                                <FaShare size={"1vw"}/>
                                <span>Chia sẻ</span>
                            </button>
                        </div>
                      </div>
                      <div className={styles["list-cmt"]}>
                        <ul>
                          <li className={styles["cmt"]}>
                            <div className={styles["img-profile"]}>
                              <img src="/image/avatar.jpg" alt=""/>
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
                                  <i className={styles["fa-solid fa-ellipsis"]}></i>
                                </button>
                              </div>
                            </div>
                          </li>
                          <li className={styles["cmt"]}>
                            <div className={styles["img-profile"]}>
                              <img src="./image/avatar.jpg" alt=""/>
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
                                  <i className={styles["fa-solid fa-ellipsis"]}></i>
                                </button>
                              </div>
                            </div>
                          </li>
                          <li className={styles["cmt"]}>
                            <div className={styles["img-profile"]}>
                              <img src="./image/avatar.jpg" alt=""/>
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
                                  <i className={styles["fa-solid fa-ellipsis"]}></i>
                                </button>
                              </div>
                            </div>
                          </li>
                        </ul>
                        <div className={styles["activity-cmt"]}>
                          <div className={styles["img-profile"]}>
                            <img src="./image/avatar.jpg" alt=""/>
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
            <div className={styles["right-container"]}>
              <div className={styles["list-friend"]}>
                <h2>Người liên hệ</h2>
                <ul>
                  <li>
                    <div className={styles["avatar"]}>
                      <img src="./image/avatar.jpg" alt=""/>
                    </div>
                    <div className={styles["name-friend"]}>
                      <p>Long</p>
                    </div>
                    <div className={styles["status"]}>
                    </div>
                  </li>
                  <li>
                    <div className={styles["avatar"]}>
                      <img src="./image/avatar.jpg" alt=""/>
                    </div>
                    <div className={styles["name-friend"]}>
                      <p>Long</p>
                    </div>
                    <div className={styles["status"]}>
                    </div>
                  </li>
                  <li>
                    <div className={styles["avatar"]}>
                      <img src="./image/avatar.jpg" alt=""/>
                    </div>
                    <div className={styles["name-friend"]}>
                      <p>Long</p>
                    </div>
                    <div className={styles["status"]}>
                    </div>
                  </li>
                  <li>
                    <div className={styles["avatar"]}>
                      <img src="./image/avatar.jpg" alt=""/>
                    </div>
                    <div className={styles["name-friend"]}>
                      <p>Long</p>
                    </div>
                    <div className={styles["status"]}>
                    </div>
                  </li>
                  <li>
                    <div className={styles["avatar"]}>
                      <img src="./image/avatar.jpg" alt=""/>
                    </div>
                    <div className={styles["name-friend"]}>
                      <p>Long</p>
                    </div>
                    <div className={styles["status"]}>
                    </div>
                  </li>
                  <li>
                    <div className={styles["avatar"]}>
                      <img src="./image/avatar.jpg" alt=""/>
                    </div>
                    <div className={styles["name-friend"]}>
                      <p>Long</p>
                    </div>
                    <div className={styles["status"]}>
                    </div>
                  </li>
                  <li>
                    <div className={styles["avatar"]}>
                      <img src="./image/avatar.jpg" alt=""/>
                    </div>
                    <div className={styles["name-friend"]}>
                      <p>Long</p>
                    </div>
                    <div className={styles["status"]}>
                    </div>
                  </li>
                  <li>
                    <div className={styles["avatar"]}>
                      <img src="./image/avatar.jpg" alt=""/>
                    </div>
                    <div className={styles["name-friend"]}>
                      <p>Long</p>
                    </div>
                    <div className={styles["status"]}>
                    </div>
                  </li>
                  <li>
                    <div className={styles["avatar"]}>
                      <img src="./image/avatar.jpg" alt=""/>
                    </div>
                    <div className={styles["name-friend"]}>
                      <p>Long</p>
                    </div>
                    <div className={styles["status"]}>
                    </div>
                  </li>
                  <li>
                    <div className={styles["avatar"]}>
                      <img src="./image/avatar.jpg" alt=""/>
                    </div>
                    <div className={styles["name-friend"]}>
                      <p>Long</p>
                    </div>
                    <div className={styles["status"]}>
                    </div>
                  </li>
                  <li>
                    <div className={styles["avatar"]}>
                      <img src="./image/avatar.jpg" alt=""/>
                    </div>
                    <div className={styles["name-friend"]}>
                      <p>Long</p>
                    </div>
                    <div className={styles["status"]}>
                    </div>
                  </li>
                  <li>
                    <div className={styles["avatar"]}>
                      <img src="./image/avatar.jpg" alt=""/>
                    </div>
                    <div className={styles["name-friend"]}>
                      <p>Long</p>
                    </div>
                    <div className={styles["status"]}>
                    </div>
                  </li>
                  <li>
                    <div className={styles["avatar"]}>
                      <img src="./image/avatar.jpg" alt=""/>
                    </div>
                    <div className={styles["name-friend"]}>
                      <p>Long</p>
                    </div>
                    <div className={styles["status"]}>
                    </div>
                  </li>
                  <li>
                    <div className={styles["avatar"]}>
                      <img src="./image/avatar.jpg" alt=""/>
                    </div>
                    <div className={styles["name-friend"]}>
                      <p>Long</p>
                    </div>
                    <div className={styles["status"]}>
                    </div>
                  </li>
                  <li>
                    <div className={styles["avatar"]}>
                      <img src="./image/avatar.jpg" alt=""/>
                    </div>
                    <div className={styles["name-friend"]}>
                      <p>Long</p>
                    </div>
                    <div className={styles["status"]}>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )
    }
}

export default HomeContent