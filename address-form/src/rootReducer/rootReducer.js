import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import GetStatesReducer from "../components/addressForm/GetStatesReducer";
import ValidateAddressFormReducer from "../components/addressForm/ValidateAddressFormReducer";

const RootReducer = combineReducers({
  GetStatesReducer,
  ValidateAddressFormReducer,
  form: formReducer
});

export default RootReducer;
