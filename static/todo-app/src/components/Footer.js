import React, {Component} from 'react'
import {Footer as MaterializeFooter} from 'react-materialize';

export default class Footer extends Component {

    render(){
        return(
            <MaterializeFooter copyrights="&copy; 2017 Copyright O. Kravchuk"></MaterializeFooter>
        )
    }
}