import React, {Component} from 'react'
import {Card, Row, Col, Input, Icon, Button} from 'react-materialize';
import { Link } from 'react-router'
import { connect } from 'react-redux';
import { Field } from 'react-redux-form';


class LoginForm extends Component{
    handleSubmit(user) {
        console.log(user);
        let { dispatch } = this.props;
        console.log(dispatch);
        console.log(this.state);
        console.log(this.props);
        user.preventDefault();

        // Do whatever you like in here.
        // You can use actions such as:
        // dispatch(actions.submit('user', somePromise));
        // etc.
        //model="user"
    }
    render(){
        //const { handleSubmit } = this.props;
        //let { user } = this.props;
        return (
            <Card className=''>
                <form onSubmit={(user) => this.handleSubmit(user)}>
                    <h2 className="card-heading center">Login</h2>
                    <Row>
                        <Col l={12} m={12} s={12} offset="m2 l3">
                            <Field model="user.username">
                                <Input l={6} m={6} label="Username" validate><Icon>account_circle</Icon></Input>
                            </Field>
                        </Col>
                    </Row>
                    <Row>
                        <Col l={12} m={12} s={12} offset="m2 l3">
                            <Field model="user.password">
                                <Input l={6} m={6} label="Password" validate type="password"><Icon>vpn_key_circle</Icon></Input>
                            </Field>
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

function mapStateToProps(state) {
  return { user: state.user };
}

export default connect(mapStateToProps)(LoginForm);