import { ApiCaller } from "./ApiCaller"
export const loginRequest=(user)=>{
    return ApiCaller("POST",JSON.stringify(user),"api/user/login")
    .then(res=>{
        localStorage.setItem("user",JSON.stringify(res.data))
    })
    .catch(error=>{
        alert("ĐĂNG NHẬP THẤT BẠI")
        console.log(error)
    })
}


export const registerRequest=(user)=>{
    return ApiCaller("POST",JSON.stringify(user),"user/register")
    .then(res=>{
        console.log(res.data)
        alert("ĐĂNG KÝ THÀNH CÔNG")
    })
    .catch(error=>{
        alert("ĐĂNG KÝ THẤT BẠI")
        console.log(error)
    })
}


export const logoutRequest= async()=>{
    console.log("click")
    return ApiCaller("POST",null,"api/user/logout")
    .then(res=>{
        localStorage.removeItem("user")
    })
    .catch(error=>{
        console.log(error)
    })

}