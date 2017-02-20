import React, {Component} from 'react'
import {Col, Row} from 'react-materialize';
import moment from 'moment';
import CommentForm from '../components/CommentForm';
import {
    actions
} from 'react-redux-form';

export default class Todo extends Component{
    updateTodo(todo){
        this.props.update(todo)
    }
    formatDate(date){
        return moment(date).format('DD MMM YY HH:mm')
    }
    resetCommentForm(){
        this.props.dispatch(actions.reset('commentModel'));
    }
    deleteTodo(todo){
        var r = confirm('Are you sure you want to delete the item?');
        if (r == true) {
            this.props.delete(todo);
        }
    }

    render(){
        return (<ul className="collapsible" data-collapsible="accordion">
            {this.props.todos.map((todo) =>{
                    return <li key={todo.id}>
                        <div className="collapsible-header" onClick={::this.resetCommentForm}><span className="new badge" onClick={this.updateTodo.bind(this, todo)}>update</span><span className="new badge" onClick={this.deleteTodo.bind(this, todo)}>delete</span><i className="material-icons">label_outline</i>{todo.name}</div>
                        <div className="collapsible-body">
                            <Row>
                                <Col l={6} m={6} s={12}>
                                    <div className="card blue-grey darken-1">
                                        <div className="card-content white-text">
                                            <span className="card-title">{todo.name}</span>
                                            <p>{todo.description}</p>
                                            Status: {todo.status.name}
                                        </div>
                                        <div className="card-action">
                                            <a>{this.formatDate(todo.created)}</a>
                                        </div>
                                    </div>
                                </Col>
                                <Col l={6} m={6} s={12}>
                                    <ul className="collection with-header">
                                        <li className="collection-header"><h4>Comments</h4></li>
                                        <CommentForm createComment={this.props.createComment} comment={this.props.comment} todo={todo.id} />

                                        {this.props.comment.results.map((comment)=>{
                                            if(comment.todo == todo.id){
                                                return <li key={comment.id} className="collection-item"><div>{comment.text}<a className="secondary-content">{this.formatDate(comment.created)}</a></div></li>
                                            }
                                        })}

                                        {todo.comments.map((comment)=>{
                                            return <li key={comment.id} className="collection-item"><div>{comment.text}<a className="secondary-content">{this.formatDate(comment.created)}</a></div></li>
                                        })}
                                    </ul>
                                </Col>
                            </Row>

                        </div>
                    </li>}
            )}
        </ul>)
    }
}