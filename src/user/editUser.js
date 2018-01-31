import React, {Component} from 'react';
import {connect} from 'react-redux';
import changeEmail from '../actions/changeEmail';
import changeName from '../actions/changeName';

class EditUser extends Component{
    editName = (event) => {
        const name  = event.target.value;
        this.props.changeName(name);

    };
    editMail = (event) => {
        const email  = event.target.value;
        this.props.changeEmail(email);

    }
    render() {
        return (
            <div>

                <div>
                    <label htmlFor="name">Name</label>
                    <input id="name"type="text" value={this.props.name} onChange={this.editName} />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input id="email"type="text" value={this.props.email} onChange={this.editMail} />
                </div>

            </div>
        )

    }

}
export default  connect((state) =>{
    return {
        name: state.get("name"),
        email: state.get("email")
    }
}, {changeName, changeEmail} )(EditUser);
