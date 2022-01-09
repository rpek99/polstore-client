import './App.css';
import UserSignupPage from './pages/UserSignupPage';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import UserCart from './pages/UserCart';
import HomePage from './pages/HomePage';
import MyProductsPage from './pages/MyProductsPage'; 
import ProfileUpdatePage from './pages/ProfileUpdatePage'; 
import AddProductPage from './pages/AddProductPage'; 
import MailBoxPage from './pages/MailBoxPage';


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
          <Route path="/my-products" component={MyProductsPage} />
          <Route path="/profile-update" component={ProfileUpdatePage} />
          <Route path="/add-product" component={AddProductPage} />
          <Route path="/mail-box" component={MailBoxPage} />
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
