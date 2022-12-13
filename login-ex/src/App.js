
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      {/* 네비게이션 */}
      <Header/>
        <Routes>
          <Route exact path='/' element={<Login/>}/>
          <Route exact path='/user' element={<User/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
