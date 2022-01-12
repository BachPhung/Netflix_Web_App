
import './App.css';
import './app.scss'
import { Home } from './pages/home/home';
import { Watch } from './pages/watch/Watch'
import {Register} from './pages/register/Register'
import {Login} from'./pages/login/Login'
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import {useState, useEffect, useContext} from 'react'
import { AuthContext } from './context/AuthContext';
function App() {
  const {user,dispatch} = useContext(AuthContext)
  const [auth,setAuth] = useState(false)
  console.log(user);
  useEffect(()=>{
    user ===null ? setAuth(false) : setAuth(true)
  },[user,auth])
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' >
            {auth? <Home/> : <Redirect to='register'/>}
          </Route>
          <Route exact path='/movies'>
            {auth? <Home type='movies'/> : <Redirect to='register'/>}
          </Route>
          <Route exact path='/series'>
            {auth? <Home type='series'/> : <Redirect to='register'/>}
          </Route>
          <Route exact path='/watch'>
            {auth? <Watch/> : <Redirect to='register'/>}
          </Route>
          <Route exact path='/register'>
            {!auth? <Register/> : <Redirect to='/'/>}
          </Route>
          <Route exact path='/login'>
            {!auth? <Login/> : <Redirect to='/'/>}
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
