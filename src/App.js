import './App.css';
import UserSignupPage from './pages/UserSignupPage';
import LoginPage from './pages/LoginPage';
import ForgetPassword from './pages/ForgetPasswordPage';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';


function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component = {LoginPage} />
          <Route path="/sign-up" component = {UserSignupPage} />
          <Route path="/forget-password" component = {ForgetPassword} />
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
