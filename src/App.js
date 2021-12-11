import './App.css';
import Header from './Header';
import Home from './Home';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Checkout from './Checkout';
import Login from './Login';
import {auth} from './firebaseFolder';
import {useEffect} from 'react';
import {useStatevalue} from './StateProvider';
import Payment from './Payment';
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';

const promise=loadStripe('pk_test_51K2wBiSFQlBuRmGbggSEBIqkVEDdxOPgce3IWxVBjntbaFA3IttNdoJUfBLi3DdAOf78ZaE0Vim9vgzWx2cFjbIP00Qq36Uo4v');

function App() {
  const [{},dispatch]=useStatevalue();
  useEffect(() => {
    auth.onAuthStateChanged(authUser =>{
        console.log('USER IS >>>',authUser);

        if(authUser){
          dispatch({
            type:'SET_USER',
            user:authUser
          })

        }else{
          dispatch({
            type:'SET_USER',
            user:null
          })

        }
    })
    
  }, [])
  return (
    <Router>
      <div className="app">

      <Switch>

        <Route path="/login">
          <Login/>
        </Route>

        <Route path="/payment">
          <Header/>
          <Elements stripe={promise}>
            <Payment/>
          </Elements>
        </Route>

        <Route path="/checkout">
          <Header/>
          <Checkout/>
        </Route>

        <Route path='/'>
          <Header/>
          <Home/>
        </Route> 

        
      </Switch>
      
    </div>

    </Router>
    
  );
}

export default App;
