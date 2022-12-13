import {useSelector, useDispatch} from 'react-redux';
import './Page1.css'

function Page2(){
    const data1 = useSelector(state=>state.data1);
    const data2 = useSelector(state=>state.data2);

    const dispatch = useDispatch();

    const click = () => {
        dispatch({type:"INT", data:100});
    }

    return(
        <div className='redux-2'>
            <h2> {data1} </h2>
            <h2> {data2} </h2>
            <button onClick={click}> change number </button>
        </div>
    )
}

export default Page2;