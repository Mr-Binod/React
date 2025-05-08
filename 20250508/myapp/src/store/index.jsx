// 저장소 생성

import {createStore} from 'redux';
import { reducer } from '../reducer';

// redux toolkit => atomic 전역샅태 
// jotai library

// reducer 전달
export const store = createStore(reducer);
