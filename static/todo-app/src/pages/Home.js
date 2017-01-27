import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {Row, Col, Preloader, Button} from 'react-materialize';
import * as todoActions from '../actions/TodoActions'
import * as statusActions from '../actions/StatusActions'
import Status from '../components/Status'


class Home extends Component {
    componentDidMount() {
        this.props.todoActions.getTodos();
        this.props.statusActions.getStatuses()
    }

    render(){
        const {results, loading} = this.props.todo;

        return (
            <Row className='container'>
                <h1 className='center'>ToDos</h1>
                <div className='center'><Preloader size='small' active={loading}/></div>
                <Row>
                    <Col l={11} m={11} s={10}>
                        <Status data={this.props.status}/>
                    </Col>
                    <Col l={1} m={1} s={2}>
                        <Button floating large className='red right' waves='light' icon='add' />
                    </Col>
                </Row>
                <Row>
                <Col l={12} m={12} s={12}>
                    <ul className="collapsible" data-collapsible="accordion">
                        {results.map((todo) =>
                                <li key={todo.id}>
                                    <div className="collapsible-header"><span className="new badge">update</span><i className="material-icons">label_outline</i>{todo.name}</div>
                                    <div className="collapsible-body">
                                        <p>Status: {todo.status.name}</p>
                                        <p>Description: {todo.description}</p>
                                        <p>Created: {todo.created}</p>
                                    </div>
                                </li>
                        )
                        }
                    </ul>
                </Col>
                </Row>
            </Row>
        )
    }
}

function mapStateToProps(state){
    return {
        todo: state.todo,
        status: state.status
    }
}

function mapDispatchToProps(dispatch){
    return {
        todoActions: bindActionCreators(todoActions, dispatch),
        statusActions: bindActionCreators(statusActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)