import React, {Component} from 'react'
import {Row, Col, Input, Icon, Button} from 'react-materialize';
import { Control, Form, Errors } from 'react-redux-form';
//import validator from 'validator';


const textField = (props) => <Input l={12} m={12} label="Comment" validate {...props}><Icon>mode_edit</Icon></Input>;

export default class CommentForm extends Component{
    handleSubmit(comment){
        this.props.createComment(comment);
    }

    render(){
        let { error } = this.props.comment;
        return (
            <Form  model="commentModel"
                   onSubmit={(comment) => {return this.handleSubmit({...comment, todo: this.props.todo})}}>
                {error.non_field_errors ? <h6 className='red-text center'>{error.non_field_errors.toString()}</h6>: ''}
                <Row>
                    <Col l={10} m={10} s={10}>
                        <Control model=".text"
                                 validators={{
                                        isRequired: (val) => val && !!val.length
                                     }}
                                 updateOn="blur"
                                 validateOn="blur"
                                 component={textField}
                            />
                    </Col>
                    <Col l={2} m={2} s={2} className="center">
                        <Button className="btn-floating" style={{'margin-top': '25px', 'margin-right': '25px'}}><Icon>add</Icon></Button>
                    </Col>
                    <Errors wrapper={(props) =><Col l={12} m={12} s={12}><div className="red-text center">{props.children}</div></Col>}
                            show={{ touched: true, focus: false }}
                            model=".text"
                            messages={{
                                        isRequired: 'Please provide a comment.'
                                    }}
                        />
                    <Col l={12} m={12} s={12}>
                        {error.text ? <div className='red-text center'>{error.text.toString()}</div>: ''}
                    </Col>
                </Row>
            </Form>
        )
    }

}