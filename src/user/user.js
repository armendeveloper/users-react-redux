import React, {Component} from 'react';
import {connect} from 'react-redux';

 class User extends Component{
    render() {
        return (
            <div>
               <div>{this.props.name}</div>
                <div>{this.props.email}</div>

            </div>
        )

    }

}
export default  connect((state) =>{
     return {
         name: state.get("name"),
         email: state.get("email")
     }
})(User);
