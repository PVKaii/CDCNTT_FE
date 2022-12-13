import axios from 'axios';

//http://localhost:5000
//https://backendpbl6.herokuapp.com
export const ApiCaller = (method,body,endpoint)=>{
   //  console.log(getHeader())
    return axios({
        method: method,
        url: `https://social-network-api.azurewebsites.net/api/${endpoint}`,
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