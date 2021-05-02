import { postTypes } from "../types";
import toast, { dispatch } from "react-hot-toast";
import Api from "../Api";

export const createPost = (form) => {
	return async (dispatch) => {
		dispatch({ type: postTypes.CREATE_POST_REQUEST });

		try {
			const res = await Api.post("/create-post", form);

			if (res.status == 201) {
				toast.success("Your post have  created successfully.....!");
				dispatch({
					type: postTypes.CREATE_POST_SUCCESS,
				});
				dispatch({ type: postTypes.REDIRECT_TRUE });
			}
		} catch (error) {
			const errors = error.response.data.errors;

			dispatch({
				type: postTypes.CREATE_POST_FAILURE,
				payload: errors,
			});
		}
	};
};

export const getUserPosts = () => {
	return async (dispatch) => {
		dispatch({ type: postTypes.GET_USER_POST_REQUEST });
		try {
					const res =await Api.get("/user/posts");
					console.log(res.data);
					dispatch({type:postTypes.GET_USER_POST_SUCCESS,
					payload:res.data.posts})
			
		} catch (error) {
			console.log(error)
			
		}

	};
};
