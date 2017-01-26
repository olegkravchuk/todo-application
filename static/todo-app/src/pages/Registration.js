import React, {Component} from 'react'
import SignUpForm from '../components/SignUpForm';
import {Row} from 'react-materialize';


export default class Registration extends Component{
    render(){
        return (
            <Row>
                <div className='container'>
                     <SignUpForm />
                </div>
            </Row>
        )
    }
}