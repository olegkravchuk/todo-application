import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {Row, Col, Preloader, Button, } from 'react-materialize';
import * as todoActions from '../actions/TodoActions'
import * as statusActions from '../actions/StatusActions'
import * as modalActions from '../actions/modalActions'
import * as commentActions from '../actions/commentActions'
import Status from '../components/Status'
import TodoForm from '../components/TodoForm'
import StatusForm from '../components/StatusForm'
import Todo from '../components/Todo'
import Modal from 'react-modal';
import {customStyles} from '../constants/Modal'
import {
    actions
} from 'react-redux-form';


class Home extends Component {

    componentDidMount() {
        this.props.todoActions.getTodos();
        this.props.statusActions.getStatuses()
    }

    openModal(name){
        this.props.modalActions.show(name)
    }

    closeModal(){
        this.props.modalActions.hide();
        this.props.dispatch(actions.reset('todoModel'));
        this.props.dispatch(actions.reset('statusModel'));
    }

    selectedStatus(statusCode){
        let filter = {
            status: statusCode
        };
        this.props.todoActions.getTodos(filter)
    }

    updateTodo(todo){
        this.props.dispatch(actions.change('todoModel', todo));
        this.props.modalActions.show('todo')
    }

    render(){
        const {results, loading} = this.props.todo;
        if(this.props.todo.created){
            this.props.modalActions.hide('todo');
            this.props.dispatch(actions.reset('todoModel'));
            this.props.todoActions.changeStatusCreatedTodo();
        }

        if(this.props.status.created){
            this.props.modalActions.hide('status');
            this.props.dispatch(actions.reset('statusModel'));
            this.props.statusActions.changeStatusCreatedStatus();
        }

        return (
            <Row className='container'>
                <h1 className='center'>ToDos</h1>
                <div className='center'><Preloader size='small' active={loading}/></div>
                <Row>
                    <Button floating fab='vertical' icon='add' className='red' large style={{bottom: '45px', right: '24px'}}>
                        <Button floating large className='blue' onClick={this.openModal.bind(this, 'status')}>Status</Button>
                        <Button floating large className='green' onClick={this.openModal.bind(this, 'todo')}>Todo</Button>
                    </Button>
                    <Col l={11} m={11} s={10}>
                        <Status data={this.props.status} selectedStatus={::this.selectedStatus} delete={(status) => {
                            this.props.statusActions.deleteStatus(status).then(() => {
                                this.props.statusActions.getStatuses()
                            })
                        }}/>
                    </Col>
                    <Col l={1} m={1} s={2}>
                        <Modal isOpen={this.props.modal.show && this.props.modal.name=='todo'}
                               style={customStyles}
                               shouldCloseOnOverlayClick={true}
                               contentLabel="Create Todo">
                            <TodoForm todo={this.props.todo} status={this.props.status.results} create={this.props.todoActions.cteateTodo} update={this.props.todoActions.updateTodo} todoModel={this.props.todoModel} />
                            <h6 className='center'><Button onClick={::this.closeModal} waves='light'>Close</Button></h6>
                        </Modal>
                    </Col>
                    <Col l={1} m={1} s={2}>
                        <Modal isOpen={this.props.modal.show && this.props.modal.name=='status'}
                               style={customStyles}
                               shouldCloseOnOverlayClick={true}
                               contentLabel="Create Status">
                            <StatusForm status={this.props.status} create={this.props.statusActions.cteateStatus} />
                            <h6 className='center'><Button onClick={::this.closeModal} waves='light'>Close</Button></h6>
                        </Modal>
                    </Col>
                </Row>
                <Row>
                <Col l={12} m={12} s={12}>
                    <Todo todos={results}
                          update={(todo)=>this.updateTodo(todo)}
                          createComment={this.props.commentActions.createComment}
                          createComment={(comment) => {
                            this.props.commentActions.createComment(comment).then(() => {
                                this.props.dispatch(actions.reset('commentModel'));
                            })
                          }}
                          comment={this.props.comment}
                          dispatch={this.props.dispatch}
                        />
                </Col>
                </Row>
            </Row>
        )
    }
}

function mapStateToProps(state){
    return {
        todo: state.todo,
        status: state.status,
        modal: state.modal,
        comment: state.comment,
        todoModel: state.todoModel
    }
}

function mapDispatchToProps(dispatch){
    return {
        todoActions: bindActionCreators(todoActions, dispatch),
        statusActions: bindActionCreators(statusActions, dispatch),
        modalActions: bindActionCreators(modalActions, dispatch),
        commentActions: bindActionCreators(commentActions, dispatch),
        dispatch: dispatch
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)