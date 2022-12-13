import ListReview from "../components/admin/ListReview"
import styles from '../asset/styles/listreview.module.css'
import { useState } from "react"
import { useEffect } from "react"
import { getUserPost } from "../Service/Admin"
import { ApiCaller } from "../Service/ApiCaller"
const AdminList = ()=>{

    const [listReview,setListReview] = useState([])

    useEffect(()=>{
        ApiCaller("GET",'',"api/admin/post")
        .then(res=> setListReview(res.data))
        .catch(error => {
            console.log(error)
        })
    },[])

    const handleDeny =(id)=>{
        ApiCaller("POST",'deny',"api/admin/post/"+id)
        .then(res=> {console.log(res.data)})
        .catch(error => {
            console.log(error)
        })

    }
    const handleApprove = (id)=>{
        ApiCaller("POST",'approve',"api/admin/post/"+id)
        .then(res=> {console.log(res.data)})
        .catch(error => {
            console.log(error)
        })
    }
    console.log(listReview,"asdfa")

    return(<div className={styles["list-review"]}>
        <ListReview 
            listReview={listReview} 
            handleDeny={handleDeny}
            handleApprove={handleApprove}    
        />
    </div>)
}

export default AdminList