import { ApiCaller } from "./ApiCaller"

export const getUserPostsRequest=()=>{
    return ApiCaller("GET",null,"user/post")
    .then(res=>{
        return res.data
    })
    .catch(error=>{
        console.log(error)
    })
}