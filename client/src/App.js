import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Navbar from './components/Navbar';
import Login from './containers/auth/Login';
import Register from './containers/auth/Register';
import Home from './containers/Home';
import './main.scss'


function App() {
  return (
		<Router>
			<Navbar />
			<Switch>
				<Route path='/login' component={Login} />
				<Route path='/register' component={Register} />
				<Route path='/' exact component={Home} />
			</Switch>
		</Router>
	);
}

export default App;
