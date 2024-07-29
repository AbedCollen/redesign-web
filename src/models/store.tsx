import { Provider, useDispatch, useSelector } from 'react-redux';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { default as createDebounce } from 'redux-debounced';
import { default as thunk } from 'redux-thunk';

import { composeWithDevToolsDevelopmentOnly } from '@redux-devtools/extension';

import { AppCommand, AppDefault, AppReducer } from './app/reducers';
import { AuthCommand, AuthDefault, AuthReducer } from './auth/reducers';

import type { RootAction, RootModel, TDispatch } from './types';

// ** Init reducers
const reducers = combineReducers({
  app: AppReducer,
  auth: AuthReducer
});

// ** Init value
const rootValue: RootModel = {
  app: AppDefault,
  auth: AuthDefault
};

// ** Init middleware
const middlewares = [thunk, createDebounce()];

// ** Create store
const store = createStore(
  reducers,
  rootValue,
  composeWithDevToolsDevelopmentOnly(applyMiddleware(...middlewares))
);

const StoreCommand = {
  app: AppCommand,
  auth: AuthCommand
};

// @ts-expect-error: Children is required by Provider
const StoreProvider = (props: React.PropsWithChildren) => <Provider store={store} {...props} />;

function useStore<TState = RootModel, TSelected = unknown>(
  selector: (state: TState) => TSelected
): [TSelected | undefined, TDispatch<RootAction>] {
  return [
    useSelector(selector),
    useDispatch<TDispatch<RootAction>>()
  ];
}

StoreProvider.displayName = 'StoreProvider';
export { StoreCommand, StoreProvider, useStore };
