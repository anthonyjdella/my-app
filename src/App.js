import React, { Component, Suspense } from 'react'
import { Route, HashRouter, Switch } from 'react-router-dom'

import Launch from './components/launch-page/Launch'
import InputType from './components/property-input/InputType'
import InputName from './components/property-input/InputName'
import InputPrice from './components/property-input/InputPrice'

import './App.css'

const loading = () => <div>Loading...</div>;
const Login = React.lazy(() => import('./components/login/Login'));
const Register = React.lazy(() => import('./components/register/Register'));
const Page404 = React.lazy(() => import('./components/error/Page404'));
const Page500 = React.lazy(() => import('./components/error/Page500'));

class App extends Component {
  render() {
    return (
        <div className="react-desktop-app">
          <HashRouter>
            <Suspense fallback={loading()}>
              <Switch>
                <Route path="/" name="Launch Page" render={props => <Launch {...props}/>} /> 
                <Route exact path="/login" name="Login Page" render={props => <Login {...props}/>} />
                <Route exact path="/register" name="Register Page" render={props => <Register {...props}/>} />
                <Route exact path="/404" name="Page 404" render={props => <Page404 {...props}/>} />
                <Route exact path="/500" name="Page 500" render={props => <Page500 {...props}/>} />
  
                {/* <Route path="/start/0" component={InputType}/>    
                <Route path="/start/1" component={InputName}/>
                <Route path="/start/2" component={InputPrice}/> */}
              </Switch>
            </Suspense>       
          </HashRouter>
        </div>
    )
  }
}

export default App
