import { authTypes, postTypes } from "../types";

const initState = {
	loading: false,
	createErrors: [],
	redirect: false,
	posts: [],
	perPage: 0,
	count: 0,
	message: "",
};

const PostReducer = (state = initState, action) => {
	const { payload } = action;
	console.log(payload);
	switch (action.type) {
		case postTypes.CREATE_POST_REQUEST:
			return (state = {
				...state,
				loading: true,
			});

		case postTypes.CREATE_POST_SUCCESS:
			return (state = { ...state, loading: false, createErrors: [] });
		case postTypes.CREATE_POST_FAILURE:
			return (state = { ...state, loading: false, createErrors: payload });
		case postTypes.REDIRECT_TRUE:
			return (state = { ...state, redirect: true });

		case postTypes.REDIRECT_FALSE:
			return (state = { ...state, redirect: false });
		case postTypes.GET_USER_POST_REQUEST:
			return (state = { ...state, loading: true });
		case postTypes.GET_USER_POST_SUCCESS:
			return (state = {
				...state,
				loading: false,
				posts: action.payload.posts,
				count: action.payload.count,
				perPage: action.payload.perPage,
			});
		default:
			return state;
	}
};

export default PostReducer;
