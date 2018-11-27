import { createStore } from 'redux';

import gameReducer from './Game/reducer';

export default createStore(gameReducer);
