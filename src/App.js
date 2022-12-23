
import './App.css';
import {Switch,Route} from "react-router-dom"
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Clientsignup from './components/Signup/Clientsignup';
import Choosesignup from './components/Signup/Choosesignup';
import Search from './components/Search/Search';
import Userprofile from './components/userprofile/UserProfile';
import Premiumprofile from './components/userprofile/Premiumprofile';
import Recent from './components/userprofile/Recent';
import app from './firebase';
import ClientLogin from './components/Login/Clientlogin';
import Openprofile from './components/userprofile/Openprofile';
import Admin from './components/Admin/Admin';
function App() {
  
  return (
    <>
    <Header />

  <Switch>
    
    <Route exact path="/" component={Profile} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/admin" component={Admin} />
    <Route exact path="/client-login" component={ClientLogin} />
    <Route exact path="/signup" component={Signup} />
    <Route exact path="/client-signup" component={Clientsignup} />
    <Route exact path="/select-plan" component={Choosesignup} />
    <Route exact path="/search" component={Search} />
    <Route exact path="/premium-profile" component={Premiumprofile} />
    <Route exact path="/profile/:id" component={Openprofile} />
    <Route exact path="/profile" component={Userprofile} />
    <Route exact path="/recent-activity" component={Recent} />


    </Switch>
 
    
    

    </>
  );
}

export default App;
