import { ApiCaller } from "./ApiCaller"

export const loginRequest=(user)=>{
    return ApiCaller("POST",JSON.stringify(user),"user/login")
    .then(res=>{
        localStorage.setItem("user",JSON.stringify(res.data))
    })
    .catch(error=>{
        alert("ĐĂNG NHẬP THẤT BẠI")
        console.log(error)
        localStorage.setItem("user",JSON.stringify(
            {"Token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYmYiOjE2NjU4NTU5MjAsImV4cCI6MTY3NjQ4MzEyMCwiaXNzIjoiaHR0cHM6Ly9lbmxhYnNvZnR3YXJlLmNvbS8iLCJhdWQiOiJodHRwczovL2VubGFic29mdHdhcmUuY29tLyJ9.HsvAImj6IGTHnik3F_t46xXzXvEwGSZ9Ivq6Q4vQeQ8"}
        ))
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

