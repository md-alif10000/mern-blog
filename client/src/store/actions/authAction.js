import { authTypes } from "../types";
import { useDispatch } from "react-redux";
import axios from "axios";
import toast from "react-hot-toast";

export const register = (state) => {
	return async (dispatch) => {
		const config = {
			headers: {
				"Content-Type": "application/json",
			},
		};

		dispatch({ type: authTypes.REGISTER_REQUEST });

		try {
			const res = await axios.post("/register", state, config);
			  console.log(res);
              console.log('alif')
			if (res.status == 201) {
				dispatch({
					type: authTypes.REGISTER_SUCCESS,
                   
				});
                toast.success("Successfully Registered...!");
			}

	
		} catch (error) {
			console.log(error.response.data.errors);
            	
			dispatch({
				type: authTypes.REGISTER_FAILURE,
				payload: error.response.data.errors,
			});
		}
	};
};



export const login = (state) => {
	return async (dispatch) => {
		const config = {
			headers: {
				"Content-Type": "application/json",
			},
		};

		dispatch({ type: authTypes.LOGIN_REQUEST });

		try {
			const res = await axios.post("/login", state, config);
			console.log(res);
			console.log("alif");
			if (res.status == 200) {
				dispatch({
					type: authTypes.LOGIN_SUCCESS,
				});
				toast.success("Login successful..!");
			}
		} catch (error) {
			console.log(error.response.data.errors);

			dispatch({
				type: authTypes.LOGIN_FAILURE,
				payload: error.response.data.errors,
			});
		}
	};
};
