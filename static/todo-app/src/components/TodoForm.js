import React, {Component} from 'react'
import {Row, Col, Input, Icon, Button} from 'react-materialize';
import { Control, Form, Errors } from 'react-redux-form';
//import validator from 'validator';


const nameField = (props) => <Input l={12} m={12} label="Name" validate {...props}><Icon>receipt_circle</Icon></Input>;
const descriptionField = (props) => <Input l={12} m={12} label="Description" validate type="textarea" {...props}><Icon>mode_edit_circle</Icon></Input>;
const statusField = (props) => <Input l={12} m={12} label="Status" validate type="select" {...props}>
                                    <option value=''>--------</option>
                                   {props.status.map((status) => <option key={status.id} value={JSON.stringify(status)}>{status.name}</option>)}
                               </Input>;


export default class TodoForm extends Component{
    handleSubmit(todo){
        if(todo.id){
            this.props.update(todo);
        }else{
            this.props.create(todo);
        }
    }
    render(){
        let { error } = this.props.todo;
        return (
                <Form  model="todoModel"
                       onSubmit={(todo) => this.handleSubmit(todo)}>
                    <h2 className="card-heading center">{this.props.todoModel.id ? 'Update Todo' : 'Create ToDo'}</h2>
                    {error.non_field_errors ? <h6 className='red-text center'>{error.non_field_errors.toString()}</h6>: ''}
                    <Row>
                        <Col l={12} m={12} s={12}>
                            <Control model=".name"
                                     validators={{
                                        isRequired: (val) => val && !!val.length
                                     }}
                                     updateOn="blur"
                                     validateOn="blur"
                                     component={nameField}
                                />
                        </Col>
                        <Errors wrapper={(props) =><Col l={12} m={12} s={12}><div className="red-text center">{props.children}</div></Col>}
                                show={{ touched: true, focus: false }}
                                model=".name"
                                messages={{
                                        isRequired: 'Please provide a name.'
                                    }}
                            />
                        <Col l={12} m={12} s={12}>
                            {error.name ? <div className='red-text center'>{error.name.toString()}</div>: ''}
                        </Col>
                    </Row>
                    <Row>
                        <Col l={12} m={12} s={12} >
                            <Control model=".description"
                                     updateOn="blur"
                                     component={descriptionField}
                                />
                        </Col>
                        <Col l={12} m={12} s={12}>
                            {error.description ? <div className='red-text center'>{error.description.toString()}</div>: ''}
                        </Col>
                    </Row>
                    <Row>
                        <Col l={12} m={12} s={12} >
                            <Control model=".status"
                                     validators={{
                                        isRequired: (val) => val && !!val.length
                                     }}
                                     validateOn="change"
                                     status={this.props.status}
                                     component={statusField} />
                        </Col>
                        <Errors wrapper={(props) =><Col l={12} m={12} s={12}><div className="red-text center">{props.children}</div></Col>}
                                show={{ touched: true, focus: false }}
                                model=".status"
                                messages={{
                                        isRequired: 'Please provide a status.'
                                    }}
                            />
                        <Col l={12} m={12} s={12}>
                            {error.status ? <div className='red-text center'>{error.status.toString()}</div>: ''}
                        </Col>
                    </Row>
                    <Row>
                        <Col l={12} m={12} s={12} className="center">
                            <Button waves='light'>{this.props.todoModel.id ? 'Update' : 'Create'}</Button>
                        </Col>
                    </Row>
                </Form>
        )
    }

}