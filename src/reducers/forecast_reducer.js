import React from 'react';
import {FETCH_WEATHER} from '../actions/index';

export default function (state = [], action){
  switch (action.type) {
    case FETCH_WEATHER:
      return [action.payload.data, ...state]; //ES6
  }
  return state;
}
