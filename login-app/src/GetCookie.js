import {useState} from 'react';
import {useCookies} from 'react-cookie';

function GetCookie(){
    // 3번째가 remove : 순서 중요
    const [cookies, setCookie, removeCookie] = useCookies(['data']);
     

    const deleteCookie = () => {
        removeCookie('data');
    }

    return(
        <>
        
            <button onClick={deleteCookie}> remove cookie </button>

            <h1> cookie : {cookies.data} </h1>
        </>
    )
}

export default GetCookie;