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



export const editPost = (form) => {
	return async (dispatch) => {
		dispatch({ type: postTypes.EDIT_POST_REQUEST });

		try {
			const res = await Api.put("/edit-post", form);

			if (res.status == 201) {
				toast.success("Your post have updated successfully.....!");
				dispatch({
					type: postTypes.EDIT_POST_SUCCESS,
				});
				dispatch({ type: postTypes.REDIRECT_TRUE });
			}
		} catch (error) {
			const errors = error.response.data.errors;

			dispatch({
				type: postTypes.EDIT_POST_FAILURE,
				payload: errors,
			});
		}
	};
};









export const getUserPosts = (pageNo) => {
	return async (dispatch) => {
		dispatch({ type: postTypes.GET_USER_POST_REQUEST });
		try {
					const res =await Api.get(`/user/posts/${pageNo}`);
					console.log(res.data);
					dispatch({type:postTypes.GET_USER_POST_SUCCESS,
					payload:res.data})
			
		} catch (error) {
			console.log(error)
			
		}

	};
};


export const getSinglePost = (_id) => {
	return async (dispatch) => {
		dispatch({ type: postTypes.GET_SINGLE_POST_REQUEST });
		try {
			const res = await Api.get(`/post/${_id}`);
			console.log(res.data);
			dispatch({ type: postTypes.GET_SINGLE_POST_SUCCESS, payload: res.data });
		} catch (error) {
			dispatch({type:postTypes.GET_SINGLE_POST_FAILURE,
			payload:error.response.data.errors})
			console.log(error);
		}
	};
};
