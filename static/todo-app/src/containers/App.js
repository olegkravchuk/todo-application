import React, {Component} from 'react'
//import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
//import User from '../components/User'
import Header from '../components/Header'
//import Home from '../components/Home'
import Footer from '../components/Footer'
//import Login from '../components/Login'
//import Registration from '../components/Registration'
//import About from '../components/About'
//import * as pageActions from '../actions/PageActions'
//import * as userActions from '../actions/UserActions'

class App extends Component {
    //constructor(props){
    //    super(props)
    //    this.state = {
    //        route: window.location.hash.substr(1)
    //    }
    //}
    //componentDidMount() {
    //    window.addEventListener('hashchange', () => {
    //        this.setState({
    //            route: window.location.hash.substr(1)
    //        })
    //    })
    //}
    render(){
        //let Child;
        //
        //switch (this.state.route) {
        //  case '/about': Child = About; break;
        //  case '/login': Child = Login; break;
        //  case '/registration': Child = Registration; break;
        //  default: Child = Home;
        //}

        return (
            <div className='row'>
                <Header/>
                {this.props.children}
                <Footer/>
                {/*<Page data={this.props.page} getPhotos={this.props.pageActions.getPhotos}/>
                <User data={this.props.user} handleLogin={this.props.userActions.handleLogin}/>*/}
            </div>
        )
    }
}

function mapStateToProps(){
    //console.log(state);
    return {
        //user: state.user,
        //page: state.page
    }
}

function mapDispatchToProps(){
    //console.log(dispatch);
    return {
        //pageActions: bindActionCreators(pageActions, dispatch),
        //userActions: bindActionCreators(userActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)