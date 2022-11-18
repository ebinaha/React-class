
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Route, Routes} from 'react-router-dom';
import Header from './Header';
import Main from './Main';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route exact path='/' element={<Main/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
