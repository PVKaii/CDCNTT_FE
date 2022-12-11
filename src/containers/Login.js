import { useNavigate } from 'react-router-dom'
import LoginForm from '../components/LoginForm'

const Login = ()=>{
    const navigate = useNavigate()
    const handleLogin = ()=>{
        navigate("/page")
    }
    
    return <LoginForm handleLogin={handleLogin}/>
}

export default Login