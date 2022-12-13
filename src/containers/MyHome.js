
import { Link} from "react-router-dom"
import styles from '../asset/styles/myhome.module.css'
import { useEffect, useState } from "react"

import MyWrapper from "../components/myhome/MyWrapper"
import MyHomeContainer from "../components/myhome/MyHomeContainer"
import MyPost from "../components/myhome/MyPost"
import AboutContent from "../components/myhome/AboutContent"
import MyFriend from "../components/myhome/MyFriend"
import Photos from "../components/myhome/Photos"
import Videos from "../components/myhome/Videos"
import { getUserPostsRequest } from "../Service/PostService"
import { ApiCaller } from "../Service/ApiCaller"



const homeMenu = [
    {
        name: "Bài viết",
        to: ""
    },
    {
        name: "Giới thiệu",
        to: "/about/"
    },
    {
        name: "Bạn bè",
        to: "/friends/"
    },
    {
        name: "Ảnh",
        to: "/photos/"
    },
    {
        name: "Video",
        to: "/videos/"
    },
]


const MyHome = ()=>{
    const [menuHome,setMenuHome] = useState("")
    
    const [myFriend,setMyFriend] = useState([])

    const listFriend = async()=>{
        var friends = await ApiCaller("GET",'',"api/user/friend")
        .then(res=> (res.data))
        .catch(error => {
            console.log(error)
        })
        setMyFriend(friends)
    }
    useEffect(()=>{
        listFriend()
    },[])
    console.log(myFriend)

    const loadMyProfile = ()=>{
        if(menuHome === ""){
            return <MyPost listPost={listPost} myFriend={myFriend}/>
        }
        if(menuHome === "/about/"){
            return <AboutContent/>
        }
        if(menuHome === "/friends/"){
            return <MyFriend friends={myFriend}/>
        }
        if(menuHome === "/photos/"){
            return <Photos/>
        }
    
        if(menuHome === "/videos/"){
            return <Videos/>
        }
    }   

    var [listPost , setListPost] = useState([])
    const  loadListPost= async ()=>{
        var posts= await getUserPostsRequest();
        setListPost(posts)
    }

    useEffect(()=>{
        loadListPost();
    },[])


    const loadHomeMenu = ()=>{
        const handleClickMenu = (value) =>{
            console.log("click")
            console.log(value,'value')
            setMenuHome(value)
        }
        return(
            homeMenu.map((item,index)=>
                (
                <li 
                    key={index} 
                    name={'menu'} 
                    value={index} 
                    onClick={(e)=>handleClickMenu(item.to)}
                >
                    <Link to={`/myhome${item.to}`} >{item.name}</Link>
                </li> 
                )
            )
        )
    }

    return(
        <div className={styles["content"]}>
            <MyWrapper/>
            <MyHomeContainer 
                loadHomeMenu={loadHomeMenu}
                loadMyProfile={loadMyProfile}
            />
        </div>
    )
}

export default MyHome