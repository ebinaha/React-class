import {configureStore} from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage/session'
import {persistReducer} from 'redux-persist';

// 객체 : key, storage 필수 값
const persistConfig = {
    key : 'root',
    // session stroage
    storage,
};

function reducer(currentState, action){
    if(currentState == undefined){
      return({
        // 토큰
        Authorization:'',
        UserId:''
      })
    }
    const newState = {...currentState};
    switch(action.type) {
      case "NEWTOKEN" : newState.Authorization = action.data;
      break;
      case "USERID" : newState.UserId = action.data;
    }
    return newState;
  }

  const persistReducer = persistReducer(persistConfig, reducer);

  const store = configureStore({
    reducer:persistReducer,
  })

  export default store;