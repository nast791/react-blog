import {createStore, applyMiddleware, combineReducers} from "redux";
import thunk from 'redux-thunk';
import common from "./reducers/common";
import {composeWithDevTools} from 'redux-devtools-extension';
import {reducer as formReducer} from 'redux-form';
import auth from "./reducers/auth";

const reducers = {
  common,
  auth,
  form: formReducer
};

export const store = createStore(combineReducers(reducers), composeWithDevTools(applyMiddleware(thunk)));