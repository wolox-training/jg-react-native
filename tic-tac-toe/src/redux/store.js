import { createStore } from 'redux';

import gameReducer from './game/reducer';

export default createStore(gameReducer);
