export const REGISTER_USER_SUCCESS = "REGISTER_USER_SUCCESS";
export const REGISTER_USER_FAIL = "REGISTER_USER_FAIL";
export const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS";
export const LOGIN_USER_FAIL = "LOGIN_USER_FAIL";

const BASE_URL = "192.168.0.235:3000";

export const registerUser = (authData) => {
	const { fullName, email, password } = authData;

	// logic to make a post request to REGISTER the user
	fetch(`${BASE_URL}/api/users/register`);
	return async (dispatch) => {
		dispatch({ type: REGISTER_USER_SUCCESS, payload: 1 });
	};
};

export const loginUser = (authData) => {
	const { email, password } = authData;

	// logic to make a post request to LOGIN the user
	return async (dispatch) => {
		dispatch({ type: LOGIN_USER_SUCCESS, payload: 1 });
	};
};
