import React, {Component} from 'react'
import {Card, Row, Col, Input, Icon, Button} from 'react-materialize';
import { Link } from 'react-router'


export default class SignUpForm extends Component{
    render(){
        function onBtnClickHandler(e){
            e.preventDefault();
            console.log(e);
        }
        return (
            <Card className=''>
                <form onSubmit={onBtnClickHandler}>
                    <h2 className="card-heading center">Sign Up</h2>
                    <Row>
                        <Col l={12} m={12} s={12} offset="m2 l3">
                          <Input l={6} m={6} label="Username" validate><Icon>account_circle</Icon></Input>
                        </Col>
                    </Row>
                    <Row>
                        <Col l={12} m={12} s={12} offset="m2 l3">
                          <Input l={6} m={6} label="Email" validate type="email"><Icon>email_circle</Icon></Input>
                        </Col>
                    </Row>
                    <Row>
                        <Col l={12} m={12} s={12} offset="m2 l3">
                          <Input l={6} m={6} label="Password" validate type="password"><Icon>vpn_key_circle</Icon></Input>
                        </Col>
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
                </form>
            </Card>
        )
    }

}