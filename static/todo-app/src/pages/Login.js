import React, {Component} from 'react'
import LoginForm from '../components/LoginForm';
import {Row} from 'react-materialize';


export default class Login extends Component{
    handleSubmit = (values) => {
        // Do something with the form values
        console.log(values);
      }
    render(){
        return (
            <Row>
                <div className='container'>
                    <LoginForm onSubmit={this.handleSubmit} />
                </div>
            </Row>
        )
    }
}