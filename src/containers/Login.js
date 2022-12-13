import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Authen from '../components/authen/Authen'
import { loginRequest, registerRequest } from '../Service/AuthService'

const regularExpression = RegExp(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/)
const errorTrim = "Bạn chưa nhập trường này"


const Login = ()=>{
    const  [clickOption,setClickOption] = useState(true)
    const navigate = useNavigate()
    const [user,setUser] = useState({
        Email:"",
        Password:""
    })
    const [error,setError] = useState(
        {
            "Email":'',
            "name":'',
            "Password":'',
            "confirmpassword":''
        })
 
    const onLogin = ()=>{
        console.log(user)
        loginRequest(user)
        if(localStorage.getItem("user")!==null) navigate("/page")
    }
    const handleSubmit = (event)=>{
        event.preventDefault()
        console.log(error)
        if(error.Email.length + error.name.length + error.Password.length + error.confirmpassword.length === 0){
            registerRequest(user)
        }
    }
    const handleClickOption =(check)=>{
        if( check === "login"){
            setClickOption(true)
        }
        else{
            setClickOption(false)
        }
        console.log(clickOption,"click")
    } 
    const onChange = (e)=>{
        var name = e.target.name;
        var value = e.target.value;
        if(!clickOption){
            setError({...error,[name]:""})
        }
        setUser({...user,[name]:value});
        console.log(user)
        console.log(error)
    }
    const onBlur = (e)=>{
        const atribute = e.target.name;
        if(!e.target.value){
            setError({...error,[atribute]:errorTrim})
        }
        else {
            if(atribute === 'username'){
                if(!regularExpression.test(user[atribute])){
                    setError({...error,[atribute]:"trường này là Email"})
                }
            }
            if(atribute === 'password'){
                if(user[atribute].length < 6){
                    setError({...error,[atribute]:"Mật khẩu phải nhiều hơn 6 kí tự"})
                }
            }
            if(atribute === 'confirmpassword'){
                if(e.target.value !== user['Password']){
                    setError({...error,[atribute]:"Mật khẩu không khớp"})
                }
            }
        }
    }

    
    return <Authen  
                onLogin={onLogin}
                handleSubmit={handleSubmit}
                clickOption={clickOption}
                handleClickOption={handleClickOption}
                onChange={onChange}
                onBlur={onBlur}
                error={error}
            />
}

export default Login