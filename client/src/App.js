import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Navbar from './components/Navbar';
import Login from './containers/auth/Login';
import Register from './containers/auth/Register';
import Home from './containers/Home';
import {Provider} from "react-redux";
import './main.scss'
import store from './store';


function App() {
  return (
		<Provider store={store}>
			<Router>
				<Navbar />
				<Switch>
					<Route path='/login' component={Login} />
					<Route path='/register' component={Register} />
					<Route path='/' exact component={Home} />
				</Switch>
			</Router>
		</Provider>
	);
}

export default App;
