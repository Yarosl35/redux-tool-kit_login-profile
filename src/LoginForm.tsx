import React, {useState} from 'react'
import {Button, Form, Grid, Header, Segment} from 'semantic-ui-react'

const LoginForm = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const emailHendler = (e: any): void => {
    setEmail(e.target.value)
  }
  const passwordHendler = (e: any): void => {
    setPassword(e.target.value)
  }


  return (
    <Grid textAlign='center' style={{height: '100vh'}} verticalAlign='middle'>
      <Grid.Column style={{maxWidth: 450}}>
        <Header as='h2' color='black' textAlign='center'>
          Log-in
        </Header>
        <Form size='large'>
          <Segment stacked>
            <Form.Input value={email} onChange={(e) => emailHendler(e)}
                        name="email"
                        type="text" fluid icon='user'
                        iconPosition='left'
                        placeholder='E-mail address'/>

            <Form.Input onChange={(e) => passwordHendler(e)} value={password} name="password"
                        fluid
                        icon='lock'
                        iconPosition='left'
                        placeholder='Password'
                        type='password'
            />
            <Button type="submit" color='teal' fluid size='large'>
              Login
            </Button>
          </Segment>
        </Form>

      </Grid.Column>
    </Grid>
  )
}

export default LoginForm