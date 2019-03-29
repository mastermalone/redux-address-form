import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import AddressFormReducer from "../components/addressForm/AddressFormReducer";

const RootReducer = combineReducers({
  AddressFormReducer,
  form: formReducer
});

export default RootReducer;
