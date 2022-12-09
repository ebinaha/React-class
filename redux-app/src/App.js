
import './App.css';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import Page1 from './Page1';

function reducer(state, action){
  // init state : 초기화하는 것을 따로 갖기도 함
  if(state == undefined) {
    return {
      // state는 다양한 데이터 타입이 올 수 있음 : 초기화
      data1:'NONE',
      data2:0
    }
  }

  const newState = {...state};
  switch(action.type) {
    // 개발자가 정의하는 부분
    // action의 데이터타입이 STRING일 때 실행 : action에 type=STRING, data='홍길동'으로 reducer에 호출해주면 실행
    case "STRING": newState.data1 = action.data;
    break;
    // action의 데이터타입이 INT일 때 실행
    case "INT": newState.data2 = action.data;
  } return newState;

}


const store = createStore(reducer);

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Page1/>
      </Provider>
    </div>
  );
}

export default App;
