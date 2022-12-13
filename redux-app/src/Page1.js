import {useSelector, useDispatch} from 'react-redux';

import Page2 from './Page2';


function Page1(){
    // 함수의 매개변수로 useState를 넘겨줌 => data1을 리턴
    const data1 = useSelector(state=>state.data1);

    // useDispatch : reducer 함수 호출
    const dispatch = useDispatch();

    return (
        <div>
            <h1> {data1} </h1>
            {/* state는 빼고 action만 넘김 : type, value => 내가 만든 객체는 reducer의 action으로 감 */}
            <button onClick={()=>{dispatch({type:"STRING", data:"Hong"})}}> change string </button>
            <Page2/>
        </div>
    )
    
}

export default Page1;