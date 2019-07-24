import React, { Component } from 'react';
import Dashboard from './institution/dashboardJS';
import FormUser from './admin/formUser';
import TableAdminUser from './admin/adminUsers';


class Content extends Component { 

    changeClicked(link_togo){
        this.props.goto(link_togo)
    }

    delUser(uid){
        this.props.deleteUser(uid)
    }

    render() {
        this.links = {
            "Dashboard": (<Dashboard  />),
            "Registrar Usuarios": (<FormUser user={this.props.user} title="Crear usuario" showEdit={false} goto={(this_link)=>this.changeClicked(this_link)} store={this.props.store} createUser={this.props.createUser} />),
            "Administrar Usuarios": (<TableAdminUser user={this.props.user}  deleteUser={(e)=>this.delUser(e)} store={this.props.store} createUser={this.props.createUser} />),
                 }
        return (
            <div>
                {this.links[this.props.link]}
            </div>
        )
    }
}
export default Content;