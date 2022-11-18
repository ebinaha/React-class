
import './App.css';
import {Route, Routes} from 'react-router-dom';
import Header from './Header';
import MyCom1 from './MyCom1';
import MyCom2 from './MyCom2';

function App() {
  return (
    <div className="App">
      <Header/>
      {/* url에 따라 특정 컴포넌트 지정*/}
      <Routes>
        {/* Route : 특정 path(url)에 대해 component 연결, 매칭시켜주는 역할 */}
        {/* root path "/" 없으면 에러 발생, 반드시 필요 */}
        <Route exact path="/" element={<MyCom1/>}/>
        <Route exact path="/mycom2" element={<MyCom2/>}/>
        
      </Routes>
    </div>
  );
}

export default App;
