import React, {Component} from 'react'
//import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
//import User from '../components/User'
import Header from '../components/Header'
import Layout from '../components/Layout'
import Footer from '../components/Footer'
//import * as pageActions from '../actions/PageActions'
//import * as userActions from '../actions/UserActions'

class App extends Component {
    render(){
        return (
            <div className='row'>
                <Header/>
                <Layout></Layout>
                <Footer/>
                {/*<Page data={this.props.page} getPhotos={this.props.pageActions.getPhotos}/>
                <User data={this.props.user} handleLogin={this.props.userActions.handleLogin}/>*/}
            </div>
        )
    }
}

function mapStateToProps(state){
    console.log(state);
    return {
        //user: state.user,
        //page: state.page
    }
}

function mapDispatchToProps(dispatch){
    console.log(dispatch);
    return {
        //pageActions: bindActionCreators(pageActions, dispatch),
        //userActions: bindActionCreators(userActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)