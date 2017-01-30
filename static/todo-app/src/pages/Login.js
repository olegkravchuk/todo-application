import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import LoginForm from '../components/LoginForm';
import {Row} from 'react-materialize';
import * as userActions from '../actions/UserActions'
import { browserHistory } from 'react-router'


class Login extends Component{

    render(){
        if(this.props.user.jwt){
           browserHistory.push('/');
        }
        return (
            <Row>
                <div className='container'>
                    <LoginForm user={this.props.user} login={this.props.userActions.login}/>
                </div>
            </Row>
        )
    }
}


function mapStateToProps(state){
    return {
        user: state.user
    }
}

function mapDispatchToProps(dispatch){
    return {
        userActions: bindActionCreators(userActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)