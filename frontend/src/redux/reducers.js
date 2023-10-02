import { combineReducers } from "redux";
import userSlice from "./features/userSlice";
import formSlice from "./features/formSlice";
import authSlice from "./features/authSlice";

const rootReducer = combineReducers({
    login : authSlice,
    formulaire : formSlice,
    userInfo : userSlice,
})

export default rootReducer;