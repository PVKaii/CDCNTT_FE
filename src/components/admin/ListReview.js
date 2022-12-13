import { Component } from "react";
import Pending from "./Pending";

class ListReview extends Component{
    render(){
        const list = this.props.listReview
        return(
        <div>   
            {list.map((item,index)=> {
                return <Pending 
                            key={index} 
                            pending={item} 
                            handleDeny={this.props.handleDeny}
                            handleApprove={this.props.handleApprove}
                        />
        })}
        </div>)
    }
}

export default ListReview