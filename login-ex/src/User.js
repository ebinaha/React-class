import {useState, useEffect} from 'react';
import axios from 'axios';
import {useSelector, useDispatch} from 'react-redux';
import {useCookies} from 'react-cookie'
import { reqToken } from './requestToken';


function User(){

    const token = useSelector(state=>state.Authorization);
    const userid = useSelector(state=>state.UserId);

    const [user, setUser] = useState({});

    const [cookie, setCookie] = useCookies(['refreshToken']);
    const dispatch = useDispatch();
    
    // 처음 mount 시, token 변경시 렌더링
    useEffect (()=>{
        requestUser();
    }, [token]);

    const requestUser = async () => {
        try{
            const res = await axios.post('http://localhost:8080/userInfo', null, 
                {
                    headers : token,
                    params:{id:userid}
                })
            // 응답을 여기에 써도 됨 : res 데이터를 가져온 상태, login에서 then까지
            // 토큰 유효 : 유저 정보 화면 노출
            setUser(res.data);
        } catch(err) {
            // 에러 발생시 
            if(err.request.status == 401) {
                const rescode = err.response.data.rescode;
                // 100 : accesstoken 유효하지 않음 => 쿠키에 있는 refreshtoken 보냄
                if(rescode == 100) {
                    reqToken(token, dispatch, cookie, setCookie);
                }
            }
        }
    }

    return(
        <table style={{margin:'0 auto'}} border="1">
            <tbody>
                <tr>
                    <th> Id </th>
                    <th> Name </th>
                    <th> NickName </th>
                    <th> Email </th>
                </tr>

                <tr>
                    <td> {user.id} </td>
                    <td> {user.name} </td>
                    <td> {user.nickname} </td>
                    <td> {user.email} </td>
                </tr>
            </tbody>
        </table>
    )
}

export default User;