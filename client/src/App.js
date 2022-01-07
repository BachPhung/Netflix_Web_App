
import './App.css';
import './app.scss'
import { Home } from './pages/home/home';
import { Watch } from './pages/watch/Watch'
import {Register} from './pages/register/Register'
import {Login} from'./pages/login/Login'
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
function App() {
  const user = true;
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' >
            {user? <Home/> : <Redirect to='register'/>}
          </Route>
          <Route exact path='/movies'>
            {user? <Home type='movies'/> : <Redirect to='register'/>}
          </Route>
          <Route exact path='/series'>
            {user? <Home type='series'/> : <Redirect to='register'/>}
          </Route>
          <Route exact path='/watch'>
            {user? <Watch/> : <Redirect to='register'/>}
          </Route>
          <Route exact path='/register'>
            {!user? <Register/> : <Redirect to='/'/>}
          </Route>
          <Route exact path='/login'>
            {!user? <Login/> : <Redirect to='/'/>}
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
