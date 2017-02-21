import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as userActions from '../actions/UserActions'
import { browserHistory } from 'react-router'


class LogOut extends Component {
    componentWillMount () {
        this.props.userActions.logout();
    }

    render(){
        if(!this.props.user.jwt){
            browserHistory.push('/');
        }
        return <div></div>
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

export default connect(mapStateToProps, mapDispatchToProps)(LogOut)