import React, {useState} from 'react';
import {Button, Form, Grid, Header, Segment} from 'semantic-ui-react'





const Registration = () => {


  // const dispatch=useDispatch()
  // const name = useSelector(state => state)
  // console.log(name)

  const [user, setUser] = useState([{id:1, firstName:"", lastName:"", email:"",password:"" }])

  const addUser = ()=>{
    setUser([...user, {
      id: Date.now(),
      firstName:firstName,
      lastName:lastName,
      email:email,
      password:password,
    }])
}

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")

  const emailHendler = (e: any): void => {
    setEmail(e.target.value)
  }
  const firstNameHandler = (e: any): void => {
    setFirstName(e.target.value)
  }
  const lastNameHandler = (e: any): void => {
    setLastName(e.target.value)
  }
  const passwordHendler = (e: any): void => {
    setPassword(e.target.value)
  }


  return (
    <Grid textAlign='center' style={{height: '100vh'}} verticalAlign='middle'>
      <Grid.Column style={{maxWidth: 450}}>
        <Header as='h2' color='black' textAlign='center'>
          Sig-in
        </Header>
        <Form size='large'>
          <Segment stacked>
            <h3>First name</h3>
            <Form.Input
              onChange={(e:any)=>firstNameHandler(e)}
              value={firstName}
              type="text"
              fluid icon='user'
              iconPosition='left'
              placeholder='First name'/>
            <h3>Last name</h3>
            <Form.Input
              onChange={(e:any)=>lastNameHandler(e)}
              value={lastName}
              fluid
              icon='user'
              iconPosition='left'
              placeholder='Second name'
              type='text'
            />
            <h3>Email</h3>
            <Form.Input
              onChange={(e:any)=>emailHendler(e)}
              value={email}
              name="mail"
              type="text"
              fluid icon='mail'
              iconPosition='left'
              placeholder='E-mail address'/>
            <h3>Password</h3>
            <Form.Input
              onChange={(e:any)=>passwordHendler(e)}
              value={password}
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Password'
              type='password'
            />
            <Button onClick={()=>{addUser()}} color='teal' fluid size='large'>
              Sig in
            </Button>
          </Segment>
        </Form>
      </Grid.Column>
    </Grid>
  )
};

export default Registration;