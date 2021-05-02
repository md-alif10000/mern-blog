import { authTypes } from "../types";
import jwt_decode from "jwt-decode";

const initState = {
	loading: false,
	registerErrors: [],
	loginErrors: [],
	token: "",
	user: "",
};

const verifyToken = (token) => {
	const decodedToken = jwt_decode(token);
	const expireIn = new Date(decodedToken.exp * 1000);

	if (new Date() > expireIn) {
		localStorage.removeItem("token");
		return null;
	} else {
		return decodedToken;
	}
};

const token = localStorage.getItem("token");
if (token) {
	const decoded = verifyToken(token);
	initState.token = token;
	const { user } = decoded;
	initState.user = user;
}

const AuthReducer = (state = initState, action) => {
	switch (action.type) {
		case authTypes.REGISTER_REQUEST:
			return (state = {
				...state,
				loading: true,
			});
		case authTypes.REGISTER_SUCCESS:
			return (state = {
				...state,
				loading: false,
			});
		case authTypes.REGISTER_FAILURE:
			return (state = {
				...state,
				loading: false,
				registerErrors: action.payload,
			});
		case authTypes.LOGIN_REQUEST:
			return (state = {
				...state,
				loading: true,
			});
		case authTypes.LOGIN_SUCCESS:
			return (state = {
				...state,
				loading: false,
			});
		case authTypes.LOGIN_FAILURE:
			return (state = {
				...state,
				loading: false,
				loginErrors: action.payload,
			});
		case "SET_TOKEN":
			const decoded = verifyToken(action.payload);
			const { user } = decoded;
			return (state = { ...state, token: action.payload, user });
		case authTypes.LOGOUT_SUCCESS:
			return (state = {
				...state,
				token: "",
				user: "",
			});

		default:
			return state;
	}
};

export default AuthReducer;
