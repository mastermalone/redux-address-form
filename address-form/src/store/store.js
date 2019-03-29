import { createStore } from "redux";
import RootReducer from "../rootReducer/rootReducer";

const store = createStore(RootReducer);

export default store;
