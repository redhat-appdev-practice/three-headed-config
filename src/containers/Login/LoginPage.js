import React, { Component } from "react";
import { Grid, Header, Image, Form, Segment } from "semantic-ui-react";

class LoginPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    };

    render() {
        return (
            <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                <Grid.Column style={{ maxWidth: 450 }}>
                    <Header as='h2' color='black' textAlign='center'>
                        <Image src='/Logo-RedHat-D-Color-RGB.png' /> Log-in to your account
                    </Header>
                    <Form size='large'>
                        <Segment stacked>
                            <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address'/>
                        </Segment>
                    </Form>
                </Grid.Column>
            </Grid>
        )
    }
}

export default LoginPage;