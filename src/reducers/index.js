import { combineReducers } from 'redux';
import SettingsReducer from './settings-reducer';

const reducers = {
  settingsStore: SettingsReducer,
};

const rootReducer = combineReducers(reducers);

export default rootReducer;
