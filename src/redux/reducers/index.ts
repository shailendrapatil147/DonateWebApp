import { combineReducers } from 'redux';

import {loginreducer } from './loginreducer';
import {errorreducer} from'./errorreducer';

const reducers = combineReducers({
    loginreducer,
    errorreducer
});

export{reducers};

