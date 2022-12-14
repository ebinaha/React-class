
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/es/integration/react';
import {persistStore} from 'redux-persist';
import Header from './Header';
import Login from './Login';
import User from './User';
import store from './persist-store';


// const store = createStore(reducer);
let persistor = persistStore(store);

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <BrowserRouter>
          {/* 네비게이션 */}
          <Header/>
            <Routes>
              <Route exact path='/' element={<Login/>}/>
              <Route exact path='/user' element={<User/>}/>
            </Routes>
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
