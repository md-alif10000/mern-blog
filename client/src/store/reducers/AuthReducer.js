import { authTypes } from "../types";

const initState = {
	loading: false,
	registerErrors: [],
	loginErrors: [],
};

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

		default:
			return state;
	}
};

export default AuthReducer;
