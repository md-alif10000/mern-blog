import { authTypes, postTypes } from "../types";

const initState = {
	loading: false,
	createErrors: [],
	redirect:false,
	message:''
};

const AuthReducer = (state = initState, action) => {
	const { payload } = action;
	console.log(payload);
	switch (action.type) {
		case postTypes.CREATE_POST_REQUEST:
			return (state = {
				...state,
				loading: true,
			});

		case postTypes.CREATE_POST_SUCCESS:
			return (state = { ...state, loading: false ,createErrors:[]});
		case postTypes.CREATE_POST_FAILURE:
			return (state = { ...state, loading: false, createErrors: payload });
		case postTypes.REDIRECT_TRUE:
			return (state = { ...state, redirect: true });

		case postTypes.REDIRECT_FALSE:
			return (state = { ...state, redirect: false });
		default:
			return state;
	}
};

export default AuthReducer;
