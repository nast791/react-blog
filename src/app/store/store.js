import {createStore, applyMiddleware, combineReducers} from "redux";
import thunk from 'redux-thunk';
import authChoice from "./reducers/authChoice";
import {composeWithDevTools} from 'redux-devtools-extension';

const reducers = {
  authChoice
};

export const store = createStore(combineReducers(reducers), composeWithDevTools(applyMiddleware(thunk)));