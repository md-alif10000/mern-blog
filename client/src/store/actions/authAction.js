import { authTypes } from "../types";
import axios from "axios";
import toast from "react-hot-toast";
import { Redirect } from "react-router";

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
			console.log(res.data);
			console.log("alif");
			const { token } = res.data;
			if (res.status == 201) {
				dispatch({
					type: authTypes.REGISTER_SUCCESS,
				});
				localStorage.setItem("token", token);
				dispatch({ type: "SET_TOKEN", payload: token });
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
			const { token } = res.data;
			if (res.status == 200) {
				dispatch({
					type: authTypes.LOGIN_SUCCESS,
				});
				localStorage.setItem("token", token);
				dispatch({ type: "SET_TOKEN", payload: token });
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

export const logout = () => {
	return async (dispatch) => {
		console.log('Logging out........')
		try {
			dispatch({ type: authTypes.LOGOUT_REQUEST });

			localStorage.removeItem("token");
	
			dispatch({ type: authTypes.LOGOUT_SUCCESS });
			
		} catch (error) {
			console.log(error);
		}
	};
};
