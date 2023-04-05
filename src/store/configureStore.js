import { configureStore } from '@reduxjs/toolkit';
import employeeReducer from './employees';
import taskReducer from './tasksReduxToolkit';

const store = configureStore({reducer:{
    tasks:taskReducer,
    employees:employeeReducer
}})

export default store;