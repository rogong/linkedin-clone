
import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom'
import Home from './components/Home';
import Login from './components/Login';
import  { getUserGoogleAuth } from './actions';
import { connect } from 'react-redux';

function App(props) {
  useEffect(() => {
    props.getUserGoogleAuth();
  }, []);

  return (
  <div className='App'>
    <Router>
      <Switch>
        <Route exact path='/'>
          <Login />
        </Route>
        <Route path='/home'>
       
          <Home />
        </Route>
      </Switch>
    </Router>
  </div>
  );
}

const mapStateToProps = (state) => {
  return {};
}

const mapDispatchToProps = (dispatch) => ({
  getUserGoogleAuth: () => dispatch(getUserGoogleAuth())
})
export default connect(mapStateToProps, mapDispatchToProps)(App);
