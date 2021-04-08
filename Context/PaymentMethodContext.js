import React from 'react';
import {useReducer} from 'react';
import createDataContext from './createDataContext';

//Step 1
const paymentMethodReducer = (state, action) => {
  switch (action.type) {
    case 'addPM':
      return [
        ...state,
        {
          name: action.payload.name,
          details: action.payload.details,
          id: Math.floor(Math.random() * 99999),
        },
      ];
    case 'deletePM':
      return state.filter(pMethod => {
        return pMethod.id !== action.payload.id;
      });

    case 'updatePM':
      console.log('Update');
      return state.map(pMethod => {
        return pMethod.id === action.payload.id ? action.payload : pMethod;
      });
    default:
      return state;
  }
};

//Step 2
const addPaymentMethod = dispatch => {
  return (name, details, callback) => {
    dispatch({type: 'addPM', payload: {name, details}});
    callback();
  };
};

const deletePaymentMethod = dispatch => {
  return id => {
    dispatch({type: 'deletePM', payload: {id}});
  };
};

const updatePaymentMethod = dispatch => {
  return (id, name, details, callback) => {
    dispatch({type: 'updatePM', payload: {id, name, details}});
    callback();
  };
};

//Step 3
export const {Context, Provider} = createDataContext(
  paymentMethodReducer,
  {addPaymentMethod, deletePaymentMethod, updatePaymentMethod},
  [{id: 1, name: 'Visa', details: '4444 5555 3331 2222'}],
);
