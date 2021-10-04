import React from 'react'
import {
  Grid,
  Icon,
  Menu,
  Segment,
  Sidebar,
} from 'semantic-ui-react'
import LoginForm from "./LoginForm";
import {BrowserRouter, Link, Route, Switch} from "react-router-dom";
import Registration from "./Registration";
import Home from "./Home";


const App = () => {
  const [visible, setVisible] = React.useState(true)

  return (
    <BrowserRouter>

      <Switch>
        <Grid columns={1}>
          <Grid.Column>
            <Sidebar.Pushable>
              <Sidebar
                as={Menu}
                animation='overlay'
                icon='labeled'
                inverted
                onHide={() => setVisible(true)}
                vertical
                visible={visible}
                width='thin'
              >
                <Link to="/home">
                  <Menu.Item as='a'>
                    <Icon to="/home" name='home'/>
                    Home
                  </Menu.Item>
                </Link>
                <Link to="/login">
                  <Menu.Item as='a'>
                    <Icon name='user'/>
                    Login
                  </Menu.Item>
                </Link>
                <Link to="/registration">
                  <Menu.Item as='a'>
                    <Icon name='registered outline'/>
                    Sig In
                  </Menu.Item>
                </Link>
              </Sidebar>

              <Sidebar.Pusher>
                <Segment basic>

                  <Route path="/home" component={Home}/>
                  <Route path="/login" component={LoginForm}/>
                  <Route path="/registration" component={Registration}/>

                </Segment>
              </Sidebar.Pusher>
            </Sidebar.Pushable>
          </Grid.Column>
        </Grid>
      </Switch>
    </BrowserRouter>
  )
}

export default App

