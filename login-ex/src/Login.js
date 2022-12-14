import {useRef} from 'react'; 
// 특정 태그를 가져다 쓸 때 사용
import {useCookies} from 'react-cookie';
import {useSelector, useDispatch} from 'react-redux'
import axios from 'axios';

function Login(){
    // 참조변수
    const formRef = useRef();
    // refreshToken 없어도 됨
    const [cookie, setCookie] = useCookies(['refreshToken']);
    const dispatch = useDispatch();

    const login = (e) => {
        e.preventDefault();
        // proxy에 넣어서 사용할 것
        axios.post('http://localhost:8080/login', null,
            { params : {
                id:formRef.current.id.value,
                password:formRef.current.password.value
            }
            }
        ).then(response => {
            // dispatch에 들어가야 하는 것 : action => type, 실제 data
            // accessToken : redux에 저장
            dispatch({type:"NEWTOKEN", data:response.data.accessToken});
            // userid : redux에 저장
            dispatch({type:"USERID", data:response.data.userid});

            console.log(response.data);

            // refreshToken : cookie에 저장
            // 쿠키 만료 기간 설정 : getDate의 단위에 따라 변화 => +1 (day)
            const expires = new Date();
            expires.setDate(expires.getDate()+1);
            // refreshToken 개발자가 지정
            setCookie('refreshToken', response.data.refreshToken, {
                url:'/', expires
            })
            document.location.href="/user"
        }).catch(err => {
            console.log(err);
        })
    }
    
    return(
        // 참조변수 초기화
        <form ref={formRef} onSubmit={login}>
            <input type='text' name='id' id='id' required/>
            <input type='password' name='password' required/>
            <input type='submit'></input>
        </form>
    )
}

export default Login;