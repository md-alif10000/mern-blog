import { authTypes } from "../types";
import jwt_decode from 'jwt-decode'

const initState = {
	loading: false,
	registerErrors: [],
	loginErrors: [],
	token:'',
	user:{}
};
const token=localStorage.getItem('token')
if(token){
	const decodedToken = jwt_decode(token);
	const expireIn=new Date(decodedToken.exp * 1000)
	console.log(expireIn);
	if(new Date() > expireIn){
		localStorage.removeItem('token')
	}else{
		const { user } = decodedToken;
		initState.token=token
		initState.user=user
	}

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

		default:
			return state;
	}
};

export default AuthReducer;
