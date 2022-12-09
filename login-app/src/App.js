import './App.css';
import {Route, Routes} from 'react-router-dom';
import GetCookie from './GetCookie';
import SetCookie from './SetCookie';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<SetCookie/>}/> 
        <Route exact path="/cookie" element={<GetCookie/>}/> 
      </Routes>
    </div>
  );
}

export default App;
