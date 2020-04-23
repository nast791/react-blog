import {createStore, applyMiddleware, combineReducers} from "redux";
import thunk from 'redux-thunk';
import authChoice from "./reducers/authChoice";
import {composeWithDevTools} from 'redux-devtools-extension';
import {reducer as formReducer} from 'redux-form';

const reducers = {
  authChoice,
  form: formReducer
};

export const store = createStore(combineReducers(reducers), composeWithDevTools(applyMiddleware(thunk)));