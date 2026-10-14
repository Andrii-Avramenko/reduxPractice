import { legacy_createStore as createStore } from "redux";
import counterReducer from "./reducer";
import { devToolsEnhancer } from "@redux-devtools/extension";

const enhancer = devToolsEnhancer();

const store = createStore(counterReducer, enhancer);

export default store;
