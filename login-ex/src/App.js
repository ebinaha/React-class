
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import {createStore} from 'redux';
import {Provider} from 'react-redux';
import Header from './Header';
import Login from './Login';
import User from './User';

// 컴포넌트 분리 가능
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

const store = createStore(reducer);


function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
        {/* 네비게이션 */}
        <Header/>
          <Routes>
            <Route exact path='/' element={<Login/>}/>
            <Route exact path='/user' element={<User/>}/>
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
