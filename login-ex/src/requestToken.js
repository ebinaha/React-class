import axios from 'axios';

// 컴포넌트가 아닌 함수(function)
// hook은 컴포넌트에서만 사용 가능, 컴포넌트에서 생성 후 가져와야 함 : 함수에서 생성할 수 없음 (useDispatch, setCookie 등)
export const reqToken = async (token, dispatch, cookie, setCookie) => {
    
    console.log(token+","+cookie.refreshToken);
    try {
        // interceptor 까지만 가는 url : 아무거나 지정 가능
        const res = await axios.post('http://localhost:8080/loginCheck', null,
            {
                headers : {Authorization : token+","+cookie.refreshToken}
            });
    } catch (err){
        if(err.request.status == 401){
            const rescode = err.response.data.rescode;
            if(rescode == 101){ // refreshToken 유효 : 2개의 토큰 재발급
                // accessToken : redux 갱신
                dispatch({type:"NEWTOKEN", data:err.response.data.accessToken});

                // refreshToken : cookie 저장
                const expires = new Date();
                expires.setDate(expires.getDate()+1);
                // refreshToken 개발자가 지정
                setCookie('refreshToken', err.response.data.refreshToken, {
                    url:'/', expires
                })
            } else if (rescode == 102) { // refreshToken 유효하지 않음 : 로그인 페이지로 이동, 토큰&유저아이디 clear
                dispatch({type:"NEWTOKEN", data:''});
                dispatch({type:"USERID", data:''});
                document.location.href="/";
            }
        }
    }
}