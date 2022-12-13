import { ApiCaller } from "./ApiCaller"




export const getUserPost = async ()=>{
    return ApiCaller("GET",'',"api/user/post")
    .then(res=> res.data)
    .catch(error => {
        console.log(error)
    })
} 