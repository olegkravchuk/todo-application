import React, {Component} from 'react'
import {Card, Row, Col, Input, Icon, Button} from 'react-materialize';
import { Link } from 'react-router'
import { Control, Form, Errors } from 'react-redux-form';
import validator from 'validator';


const usernameField = (props) => <Input l={6} m={6} label="Username" validate {...props}><Icon>account_circle</Icon></Input>;
const emailField = (props) => <Input l={6} m={6} label="Email" validate {...props}><Icon>email_circle</Icon></Input>;
const passwordField = (props) => <Input l={6} m={6} label="Password" validate type="password" {...props}><Icon>vpn_key_circle</Icon></Input>;
const passwordConfirmField = (props) => <Input l={6} m={6} label="Password Confirm" validate type="password" {...props}><Icon>vpn_key_circle</Icon></Input>;


export default class SignUpForm extends Component{
    handleSubmit(user){
        this.props.register(user);

    }
    render(){
        console.log(this.props);
        let { error } = this.props.user;
        return (
            <Card className=''>
                <Form  model="auth.userRegister"
                       onSubmit={(user) => this.handleSubmit(user)}
                       validators={{
                                    '': {
                                        passwordsMatch: (vals) => {console.log(vals.password, vals.passwordConfirm); return vals.password === vals.passwordConfirm}
                                        }
                                   }}>
                    <h2 className="card-heading center">Sign Up</h2>
                    {error.non_field_errors ? <h6 className='red-text center'>{error.non_field_errors.toString()}</h6>: ''}
                    <Row>
                        <Col l={12} m={12} s={12} offset="m2 l3">
                            <Control model=".username"
                                     validators={{
                                        isRequired: (val) => val && !!val.length
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
                            <Control model=".email"
                                     validators={{
                                        isRequired: (val) => val && !!val.length,
                                        isEmail: validator.isEmail
                                     }}
                                     validateOn="blur"
                                     component={emailField}
                                />
                        </Col>
                        <Errors wrapper={(props) =><Col l={12} m={12} s={12}><div className="red-text center">{props.children}</div></Col>}
                                show={{ touched: true, focus: false }}
                                model=".email"
                                messages={{
                                        isRequired: 'Please provide an email.',
                                        isEmail: 'Please provide a correct email.'
                                    }}
                            />
                        <Col l={12} m={12} s={12}>
                            {error.email ? <div className='red-text center'>{error.email.toString()}</div>: ''}
                        </Col>
                    </Row>
                    <Row>
                        <Col l={12} m={12} s={12} offset="m2 l3">
                            <Control model=".password"
                                     validators={{
                                        isRequired: (val) => val && !!val.length
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
                        <Col l={12} m={12} s={12} offset="m2 l3">
                            <Control model=".passwordConfirm"
                                     validators={{
                                        isRequired: (val) => val && !!val.length
                                     }}
                                     validateOn="blur"
                                     component={passwordConfirmField} />
                        </Col>
                        <Errors wrapper={(props) =><Col l={12} m={12} s={12}><div className="red-text center">{props.children}</div></Col>}
                                show={{ touched: true, focus: false }}
                                model="auth.userRegister"
                                messages={{
                                        passwordsMatch: 'Password not equal confirm password'
                                    }}
                        />
                    </Row>
                    <Row>
                        <Col l={12} m={12} s={12} className="center">
                          <Button waves='light'>Sign Up</Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col l={12} m={12} s={12} className="center">
                            Already have an account? <Link to={'/login'}>Log in</Link>
                        </Col>
                    </Row>
                </Form>
            </Card>
        )
    }

}