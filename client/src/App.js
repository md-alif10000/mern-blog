import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./containers/auth/Login";
import Register from "./containers/auth/Register";
import Home from "./containers/Home";
import { Provider } from "react-redux";
import "./main.scss";
import store from "./store";
import Dashboard from "./containers/Dashboard";
import PrivateRoute from "./private/PrivateRoute";
import RouteLink from "./private/RouteLink";

function App() {
	return (
		<Provider store={store}>
			<Router>
				<Navbar />
				<Switch>
					<RouteLink path='/login' component={Login} />
					<RouteLink path='/register' component={Register} />
					<PrivateRoute path='/dashboard' component={Dashboard} />

					<Route path='/' exact component={Home} />
				</Switch>
			</Router>
		</Provider>
	);
}

export default App;
