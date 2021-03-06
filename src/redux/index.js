import { applyMiddleware, combineReducers, createStore, } from "redux";

import * as reducers from "./reducers";
import { renewRecuring, actionSaver, } from "./middleware";
import readSavedActions from "./readSavedActions";

const reducer = combineReducers(reducers);

const store = createStore(reducer, applyMiddleware(renewRecuring, actionSaver));

export default store;

export const storeIsReady = () =>
	readSavedActions(store)
		.then(() => store)
		.catch(console.error);
