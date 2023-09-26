import { combineReducers } from 'redux';
import paginationReducer from '@/store/UsersPagination/reducers/paginationReducer';

export const allReducers = combineReducers({
  paginationReducer: paginationReducer,
});
