// src/store/actions.js

// Action Types
export const LOAD_DATA = 'LOAD_DATA';
export const SELECT_DATE = 'SELECT_DATE';

// Action Creators
export const loadData = (data) => ({
  type: LOAD_DATA,
  payload: data
});

export const selectDate = (date) => ({
  type: SELECT_DATE,
  payload: date
});
