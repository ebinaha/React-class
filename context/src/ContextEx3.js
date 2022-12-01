import {useState, createContext, useContext} from 'react';
import { UserContext } from './ContextEx1';

function ContextEx3() {
    const [myuser, setMyuser] = useState('');
    const context = useContext(UserContext);
    return(
        <>
            <h1>ContextEx3</h1>
            {/* Context1에서 제공한 값 (hong) */}
            <h2>{`Hello ${context.user} again!`}</h2>
            {/* input과 변수 연결을 통해 데이터 변경 */}
            <input type='text' value={myuser} onChange={(e)=>{setMyuser(e.target.value)}}/>
            {/* 1에서 제공한 함수 setUser를 통해 1의 user값 변경 */}
            <button onClick={()=>{context.setUser(myuser)}}>변경</button>
        </>
    )
}

export default ContextEx3;