import React, {Component} from 'react'
import {Navbar, NavItem} from 'react-materialize';

export default class Header extends Component {

    render(){
        return(
            <Navbar brand='logo' right>
                <NavItem href='#'>About</NavItem>
                <NavItem href='#'>Registration</NavItem>
                <NavItem href='#'>Login</NavItem>
            </Navbar>
        )
    }
}