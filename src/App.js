import './App.css';
import UserSignupPage from './pages/UserSignupPage';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import UserCart from './pages/UserCart';
import HomePage from './pages/HomePage';


function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component = {LoginPage} />
          <Route path="/sign-up" component = {UserSignupPage} />
          <Route path="/profile" component = {ProfilePage} />
          <Route path="/user-cart" component = {UserCart} />
          <Route path="/home" component = {HomePage} />
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
