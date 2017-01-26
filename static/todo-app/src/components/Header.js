import React, {Component} from 'react'
import {Navbar, NavItem} from 'react-materialize';
import { IndexLink } from 'react-router'

export default class Header extends Component {

    render(){
         //const divStyle = {
         //    transform: 'translateX(-100%)'
         //};


        return(
            <Navbar brand='logo' right>
                <NavItem><IndexLink to="about">About</IndexLink></NavItem>
                <NavItem><IndexLink to="login">Login</IndexLink></NavItem>
                <NavItem><IndexLink to="registration">Registration</IndexLink></NavItem>
                {/*<ul className="right hide-on-med-and-down">
                    <li><IndexLink to="about">About</IndexLink></li>
                    <li><IndexLink to="login">Login</IndexLink></li>
                    <li><IndexLink to="registration">Registration</IndexLink></li>
                </ul>
                <ul id="nav-mobile" className="side-nav">
                    <li><IndexLink to="about">About</IndexLink></li>
                    <li><IndexLink to="login">Login</IndexLink></li>
                    <li><IndexLink to="registration">Registration</IndexLink></li>
                </ul>
                <a className="button-collapse" href="#" data-activates="nav-mobile"><i className="material-icons">view_headline</i></a>*/}
            </Navbar>
        )
    }
}