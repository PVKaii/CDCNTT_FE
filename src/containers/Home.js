import axios from 'axios'
import { useEffect, useState } from 'react'
import HomeContent from '../components/homepage/HomeContent'
import Post from '../components/interaction/Post'
import { ApiCaller } from '../Service/ApiCaller'


const Home = ()=>{

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
 
    return <HomeContent fileSelected={fileSelected} handlePost={handlePost} contentChange = {contentChange}/>
}

export default Home