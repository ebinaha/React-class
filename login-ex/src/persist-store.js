import {configureStore} from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage/session'
import {persistReducer} from 'redux-persist';

// 객체 : key, storage 필수 값
const persistConfig = {
    key : 'root',
    // session stroage
    storage,
};

function myreducer(currentState, action){
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

  // reducer : 내가 만든 리듀서
  const persistedReducer = persistReducer(persistConfig, myreducer);

  const store = configureStore({
    // reducer : 약속된 이름 
    reducer:persistedReducer,
  })

  export default store;