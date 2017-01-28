import React, {Component} from 'react'
import {Card, Row, Col, Input, Icon, Button} from 'react-materialize';
import { Link } from 'react-router'
import { Field, Form, actions } from 'react-redux-form';


export default class LoginForm extends Component{
    handleSubmit(user){
        this.props.login(user)
    }
    render(){
        let { dispatch } = this.props;
        let { error } = this.props.user;
        return (
            <Card className=''>
                <Form  model="user" onSubmit={(user) => this.handleSubmit(user)}>
                    <h2 className="card-heading center">Login</h2>
                    <Row>
                        <Col l={12} m={12} s={12} offset="m2 l3">
                            <Field model="user.username" dynamic={false}>
                                <Input l={6} m={6} label="Username" validate onChange={e => dispatch(actions.change('user.username', e))}><Icon>account_circle</Icon></Input>
                            </Field>
                        </Col>
                        <Col l={12} m={12} s={12} offset="m3 l3">
                            {error.username ? <span className='red-text'>{error.username.toString()}</span>: ''}
                        </Col>
                    </Row>
                    <Row>
                        <Col l={12} m={12} s={12} offset="m2 l3">
                            <Field model="user.password" dynamic={false}>
                                <Input l={6} m={6} label="Password" validate type="password" onChange={e => dispatch(actions.change('user.password', e))}><Icon>vpn_key_circle</Icon></Input>
                            </Field>
                        </Col>
                        <Col l={12} m={12} s={12} offset="m3 l3">
                            {error.password ? <span className='red-text'>{error.password.toString()}</span>: ''}
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