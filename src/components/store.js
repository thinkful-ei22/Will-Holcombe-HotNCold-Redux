import { createStore } from 'redux';

//no destructuring here
import  counterReducer  from '../reducers';
//need counterReducer in the createStore()
export default createStore(counterReducer);


