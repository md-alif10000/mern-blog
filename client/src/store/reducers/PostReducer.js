import { authTypes, postTypes } from "../types";

const initState = {
	loading: false,
	createErrors: [],
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
			return (state = { ...state, loading: false });
		case postTypes.CREATE_POST_FAILURE:
			return (state = { ...state, loading: false, createErrors: payload });
		default:
			return state;
	}
};

export default AuthReducer;
