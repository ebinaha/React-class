
import {useState} from 'react';

function FuncReactState({reactString}){
    // 각각의 데이터에 따른 set 함수를 생성 : [변수명, 변수에 따른 setter 함수명]
    // class - constructor : this.state = {} 의 역할    => useState 이용 
    // const [StateString, setStateString] = useState(reactString);
    // const [StateNumber, setStateNumber] = useState(200);

    // 객체로 선언하기
    const [StateCombine, setStateCombine] = useState({StateString:reactString, StateNumber:200});


    return (
        <>
                <div>
                    {/* 변수 이름만 */}
                    {/* {StateString}
                    {StateNumber} */}

                    {/* 객체로 선언한 변수 가져오기 */}
                    {StateCombine.StateString}
                    {StateCombine.StateNumber}
                </div>
                {/* <button onClick={(e)=> setStateString("리액트")}>리액트</button>
                <button onClick={(e) => setStateNumber(300)}>300</button> */}

                {/* 객체로 선언하고 변경하기 */}
                <button onClick={(e) => setStateCombine({...StateCombine, StateString:"Combine"})}>ReactString 변경</button>
                <button onClick={(e) => setStateCombine({...StateCombine, StateNumber:400})}>ReactNumber 변경</button>
        </>
    );

}
export default FuncReactState;