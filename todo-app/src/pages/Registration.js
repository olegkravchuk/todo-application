import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import SignUpForm from '../components/SignUpForm';
import {Row} from 'react-materialize';
import * as userActions from '../actions/UserActions'
import { browserHistory } from 'react-router'


class Registration extends Component{

    render(){
        if(this.props.user.jwt){
            browserHistory.push('/');
        }
        return (
            <Row>
                <div className='container'>
                    <SignUpForm user={this.props.user} register={this.props.userActions.register}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(Registration)