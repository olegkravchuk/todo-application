import React, {Component} from 'react'
import {Row, Col, Input, Icon, Button} from 'react-materialize';
import { Control, Form, Errors } from 'react-redux-form';


const nameField = (props) => <Input l={12} m={12} label="Name" validate {...props}><Icon>receipt_circle</Icon></Input>;
const codeField = (props) => <Input l={12} m={12} label="Code" validate {...props}><Icon>mode_edit_circle</Icon></Input>;

export default class StatusForm extends Component{
    handleSubmit(status){
        this.props.create(status);
    }
    render(){
        let { error } = this.props.status;
        return (
            <Form  model="statusModel"
                   onSubmit={(status) => this.handleSubmit(status)}>
                <h2 className="card-heading center">Create Status</h2>
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
                        <Control model=".code"
                                 validators={{
                                        isRequired: (val) => val && !!val.length
                                     }}
                                 updateOn="blur"
                                 validateOn="blur"
                                 component={codeField} />
                    </Col>
                    <Errors wrapper={(props) =><Col l={12} m={12} s={12}><div className="red-text center">{props.children}</div></Col>}
                            show={{ touched: true, focus: false }}
                            model=".code"
                            messages={{
                                        isRequired: 'Please provide a code.'
                                    }}
                        />
                    <Col l={12} m={12} s={12}>
                        {error.code ? <div className='red-text center'>{error.code.toString()}</div>: ''}
                    </Col>
                </Row>
                <Row>
                    <Col l={12} m={12} s={12} className="center">
                        <Button waves='light'>Create</Button>
                    </Col>
                </Row>
            </Form>
        )
    }

}