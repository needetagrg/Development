import { UserRequest } from "../requestMethods";
import { loginFailure, loginStart, loginSuccess } from "./userRedux"

export const login = async (dispatchEvent, user) =>{
    dispatchEvent(loginStart());

    try{
        const res = await UserRequest.post("auth/login/", user);
        dispatchEvent(loginSuccess(res.data))
    }catch (error) {
        dispatchEvent(loginFailure())
        console.log(error)
    }
}
