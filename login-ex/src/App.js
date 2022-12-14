
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import {createStore} from 'redux';
import {Provider} from 'react-redux';
import Header from './Header';
import Login from './Login';
import User from './User';


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
