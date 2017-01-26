import React, {Component} from 'react'
import {Card, Row, Col, Input, Icon, Button} from 'react-materialize';
import { Link } from 'react-router'
//import { reduxForm } from 'redux-form';


class LoginForm extends Component{
    render(){
        const { handleSubmit } = this.props;
        return (
            <Card className=''>
                <form onSubmit={handleSubmit}>
                    <h2 className="card-heading center">Login</h2>
                    <Row>
                        <Col l={12} m={12} s={12} offset="m2 l3">
                          <Input l={6} m={6} label="Username" validate><Icon>account_circle</Icon></Input>
                        </Col>
                    </Row>
                    <Row>
                        <Col l={12} m={12} s={12} offset="m2 l3">
                          <Input l={6} m={6} label="Password" validate type="password"><Icon>vpn_key_circle</Icon></Input>
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
                </form>
            </Card>
        )
    }
}

// Decorate the form component
//LoginForm = reduxForm({
//  form: 'login' // a unique name for this form
//})(LoginForm);

export default LoginForm;