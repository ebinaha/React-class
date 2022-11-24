import './App.css';
import WriteBoard from './component/WriteBoard';
import DetailBoard from './component/DetailBoard';
import ListBoard from './component/ListBoard';
import DetailBoardFunc from './component/DetailBoardFunc';
import {Route, Routes} from 'react-router-dom'

function App() {
  return (
    <div>
      <Routes>
        {/* 연결해줄 url */}
        <Route exact path='/' element={ <ListBoard/>}/>
        <Route exact path='/write' element={<WriteBoard/>}/>
        <Route exact path='/detail' element={<DetailBoard/>}/>
        <Route exact path='/detail2/:id' element={<DetailBoardFunc/>}/>
      </Routes>
    </div>
  );
}

export default App;
