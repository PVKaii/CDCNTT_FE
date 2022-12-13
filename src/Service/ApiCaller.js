import axios from 'axios'




export const ApiCaller = (method,body,endpoint)=>{
    console.log(getHeader(),"getHeader")
    console.log(endpoint,"endpoint")
    return axios({
        method: method,
        url: `https://social-network-api.azurewebsites.net/${endpoint}`,
        headers: getHeader(), 
        data: body
      })
}

const getHeader = ()=>{

    if(localStorage.getItem("user")!==null){
       const token = JSON.parse(localStorage.getItem("user")).accessToken;
       return {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
       }
    }
    return {'Content-Type': 'application/json'}
}
