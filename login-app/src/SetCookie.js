import {useState} from 'react';
import {useCookies} from 'react-cookie';

function SetCookie() {
    const [data, setData] = useState("");
    const [cookies, setCookie] = useCookies(['data']);

    const expires = new Date();
    expires.setMinutes(expires.getMinutes()+2);

    const registCookie = () => {
        // 사용자 입력값 등록 : 쿠키 정보는 문자열
        // 다른 키로 여러개 넣을 수 있음, 키가 같을 경우 덮어씌움
        setCookie('data', data, {
            url : '/',
            // 키=value 일때 생략 가능 : expires : expires
            expires
        });
    }

    const loadCookie = () => {
        console.log(cookies);
    }

    return(
        <>
            <input type='text' value={data} onChange={(e)=>setData(e.target.value)}/>
            <button onClick={registCookie}> add cookie </button>
            <button onClick={loadCookie}> load cookie </button>
        </>
    )
}

export default SetCookie;