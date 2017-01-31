import React, {Component} from 'react'
import {Navbar, NavItem} from 'react-materialize';
import { Link } from 'react-router'
//import { browserHistory } from 'react-router'

export default class Header extends Component {
    render(){
        if(!this.props.user.jwt){
            return(
                <Navbar brand='logo' right>
                    <NavItem><Link to="about" activeClassName="active">About</Link></NavItem>
                    <NavItem><Link to="login" activeClassName="active">Login</Link></NavItem>
                    <NavItem><Link to="registration" activeClassName="active">Registration</Link></NavItem>
                </Navbar>
            )
        }else{
            return(
                <Navbar brand='logo' right>
                    <NavItem><Link to="about" activeClassName="active">About</Link></NavItem>
                    <NavItem><Link to="logout"  activeClassName="active">log out({this.props.user.username})</Link></NavItem>
                </Navbar>
            )
        }
    }
}