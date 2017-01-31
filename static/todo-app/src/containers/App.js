import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import Header from '../components/Header'
import Footer from '../components/Footer'
import * as userActions from '../actions/UserActions'

class App extends Component {
    render(){
        return (
            <div className='row'>
                <Header user={this.props.user} logout={this.props.userActions.logout}/>
                {this.props.children}
                <Footer/>
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(App)