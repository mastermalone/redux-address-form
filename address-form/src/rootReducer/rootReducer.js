import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import GetStatesReducer from "../components/addressForm/GetStatesReducer";

const RootReducer = combineReducers({
  GetStatesReducer,
  form: formReducer
});

export default RootReducer;
