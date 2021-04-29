import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Login from './containers/auth/Login';
import Register from './containers/auth/Register';
import Home from './containers/Home';
import './main.scss'


function App() {
  return (
		<Router>
			<Switch>
				<Route to='/' exact component={Home} />
				<Route to='/login' component={Login} />
				<Route to='/register' component={Register} />
			</Switch>
		</Router>
	);
}

export default App;
