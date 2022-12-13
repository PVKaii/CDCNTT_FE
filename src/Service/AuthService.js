import { ApiCaller } from "./ApiCaller"

export const loginRequest=(user)=>{
    return ApiCaller("POST",JSON.stringify(user),"user/login")
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


export const logoutRequest=()=>{
    return ApiCaller("POST",null,"user/logout")
    .then(res=>{
        localStorage.removeItem("user")
    })

}

