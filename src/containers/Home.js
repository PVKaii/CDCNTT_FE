import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import HomeContent from '../components/homepage/HomeContent'
import { ApiCaller } from '../Service/ApiCaller'
import { logoutRequest } from '../Service/AuthService'


const Home = (props)=>{

    var [file,setFile]= useState({
        fileSelection:null
    })
    var [content , setContent] = useState(null)

    const fileSelected = (e)=>{
        setFile({
            fileSelection:e.target.files[0]
        })
    }

    const contentChange = (e)=>{
        setContent(e.target.value)
    }
    const handlePost = ()=>{
        var fd = new FormData();
        if(file.fileSelection!==null){
            fd.append("File",file.fileSelection,file.fileSelection.name)
        }
        fd.append("Content",content)
        ApiCaller("POST",fd,"user/post").then(res=>{console.log(res.data)})
    }
    const navigate = useNavigate()
    const onLogout =async ()=>{
        await logoutRequest()
        props.setUser()
        navigate('/')
    }
 
    return <HomeContent fileSelected={fileSelected} handlePost={handlePost} contentChange = {contentChange} onLogout={onLogout}/>
}

export default Home