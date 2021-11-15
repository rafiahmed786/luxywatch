import './App.css';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Header from './Pages/Shared/Header/Header';
import Authprovider from './Pages/Context/AuthProvider';
import Login from './Pages/LoginCredentials/Login/Login';
import Register from './Pages/LoginCredentials/Register/Register';
import DashBoard from './Pages/DashBoard/DashBoard/DashBoard';
import Explore from './Pages/Explore/Explore';
import WatchDetails from './Pages/Watch/WatchDetails/WatchDetails';
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import Footer from './Pages/Shared/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Authprovider>
        <BrowserRouter>
      <Header/>
      <Switch>
        <Route exact path='/'>
          <Home></Home>
        </Route>
        <Route path='/home'>
          <Home></Home>
        </Route>
        <Route path='/login'>
          <Login></Login>
        </Route>
        <Route path='/explore'>
          <Explore></Explore>
        </Route>
        <Route path='/register'>
          <Register></Register>
        </Route>
        <Route path='/dashboard'>
          <DashBoard></DashBoard>
        </Route>
        <Route path='/placeorder/:id'>
          <PlaceOrder></PlaceOrder>
        </Route>
        <PrivateRoute path='/watchdetails/:id'>
          <WatchDetails></WatchDetails>
        </PrivateRoute>
      </Switch>
      <Footer></Footer>
      </BrowserRouter>
      </Authprovider>
    </div>
  );
}

export default App;
