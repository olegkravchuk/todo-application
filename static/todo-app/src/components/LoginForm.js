import React, {Component} from 'react'
import {Card, Row, Col, Input, Icon, Button} from 'react-materialize';
import { Link } from 'react-router'
import { Control, Form, Errors } from 'react-redux-form';


const usernameField = (props) => {console.log(props);
    return <Input error={props.model} l={6} m={6} label="Username" validate {...props}><Icon>account_circle</Icon></Input>};
const passwordField = (props) => <Input l={6} m={6} label="Password" validate type="password" {...props}><Icon>vpn_key_circle</Icon></Input>;

export default class LoginForm extends Component{
    handleSubmit(user){
        this.props.login(user);

    }
    render(){
        let { error } = this.props.user;
        return (
            <Card className=''>
                <Form  model="auth.user" onSubmit={(user) => this.handleSubmit(user)}>
                    <h2 className="card-heading center">Login</h2>
                    {error.non_field_errors ? <h6 className='red-text center'>{error.non_field_errors.toString()}</h6>: ''}
                    <Row>
                        <Col l={12} m={12} s={12} offset="m2 l3">
                            <Control model=".username"
                                     validators={{
                                        isRequired: (val) => !!val.length
                                     }}
                                     validateOn="blur"
                                     component={usernameField}
                            />
                        </Col>
                        <Errors wrapper={(props) =><Col l={12} m={12} s={12}><div className="red-text center">{props.children}</div></Col>}
                                show={{ touched: true, focus: false }}
                                model=".username"
                                messages={{
                                        isRequired: 'Please provide a username.'
                                    }}
                            />
                        <Col l={12} m={12} s={12}>
                            {error.username ? <div className='red-text center'>{error.username.toString()}</div>: ''}
                        </Col>
                    </Row>
                    <Row>
                        <Col l={12} m={12} s={12} offset="m2 l3">
                            <Control model=".password"
                                     validators={{
                                        isRequired: (val) => !!val.length
                                     }}
                                     validateOn="blur"
                                     component={passwordField} />
                        </Col>
                        <Errors wrapper={(props) =><Col l={12} m={12} s={12}><div className="red-text center">{props.children}</div></Col>}
                                show={{ touched: true, focus: false }}
                                model=".password"
                                messages={{
                                        isRequired: 'Please provide a password.'
                                    }}
                            />
                        <Col l={12} m={12} s={12}>
                            {error.password ? <div className='red-text center'>{error.password.toString()}</div>: ''}
                        </Col>
                    </Row>
                    <Row>
                        <Col l={12} m={12} s={12} className="center">
                          <Button waves='light'>Login</Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col l={12} m={12} s={12} className="center">
                            Don't have an account? <Link to={'/registration'}>Create one</Link>.
                        </Col>
                    </Row>
                </Form>
            </Card>
        )
    }
}