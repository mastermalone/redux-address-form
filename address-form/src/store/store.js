import { createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import RootReducer from "../rootReducer/rootReducer";

const store = createStore(
  RootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

export default store;
