import { ApiCaller } from "./ApiCaller"
var user ;
if(localStorage.getItem("user")){
    user = JSON.parse(localStorage.getItem("user")).accessToken
}


export const addPost = async()=>{
    console.log("click")
    return ApiCaller('POST',"",'api/user/post').then(res => {console.log(res.data)}).catch(error=>{
        console.log(error,"error")
    })
}
