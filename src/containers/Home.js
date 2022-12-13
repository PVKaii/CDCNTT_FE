import { useEffect, useState } from 'react'
import HomeContent from '../components/homepage/HomeContent'
import { addPost } from '../Service/PostService'
import { logoutRequest } from '../Service/AuthService'
import { useNavigate } from 'react-router-dom'
const Home = (props)=>{
    console.log(props.setUser)
    const handleCreatePost = ()=>{
        addPost()
        
    }
    const navigate = useNavigate()
    const onLogout =async ()=>{
        await logoutRequest()
        props.setUser()
        navigate('/')
    }
    return <HomeContent  
                handleCreatePost={handleCreatePost}
                onLogout={onLogout}
            />
}

export default Home