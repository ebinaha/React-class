import {useState, createContext, useContext} from 'react';
import ContextEx2 from './ContextEx2';

// react 기능 createContext을 변수 UserContext에 담아서 외부에서 사용하기 위한 export
export const UserContext = createContext()

function ContextEx1() {
    const [user, setUser] = useState('hong');
    const context = {
        user:user,
        // bind(this) 반드시 필요
        setUser:setUser.bind(this)
    }
    return(
        // Provider : 공유를 제공하는 자가 사용하는 방법 
        <UserContext.Provider value={context}>
            <h1>{`Hello ${user}`}</h1>
            <ContextEx2/>
        </UserContext.Provider>
    )
}

export default ContextEx1;