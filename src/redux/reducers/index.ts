import { combineReducers } from 'redux';

import {loginreducer } from './loginreducer';
import {errorreducer} from'./errorreducer';
import { workdetailreducer } from './workdetailreducer';

const reducers = combineReducers({
    loginreducer,
    errorreducer,
    workdetailreducer
});

export{reducers};

