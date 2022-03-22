import { publicRequest } from "../requestMethods";
import { loginFailure, loginStart, loginSuccess ,logOut} from "./userReducer"

export const login = async (dispatch, user) =>{
    
    dispatch(loginStart());
    try {
        const res = await publicRequest.post("/auth/login",user)
        dispatch(loginSuccess(res.data));
        return res;
    } catch (err) {
        console.log("not found");
        dispatch(loginFailure());
    }
}

export const logProcess = (dispatch) => {
  dispatch(logOut());
};

