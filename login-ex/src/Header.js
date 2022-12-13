import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';

function Header(){
    // redux에서 값을 가져올 때 쓰는 훅
    // 값 변경시에는 dispatch 
    const token = useSelector(state=>state.Authorization);
    const userid = useSelector(state=>state.UserId);

    // 로그아웃시 다시 로그인 페이지 노출
    const logout = () => {
        document.location.href='/';
    }

    return(
        <div style={{backgroundColor:'white', width:'100%'}}>
            <ul className="nav-items">
                <li className="nav-item">
                    {token == '' && <Link to={'/'}> 로그인 </Link>}
                    {userid} {userid != '' && <Link onClick={logout}> 로그아웃 </Link>}
                </li>

                {/* 로그인 된 상태에서만 보여주는 페이지 : 마이페이지 */}
                {userid != '' && (
                    <li className="nav-item">
                        <Link to={'/user'}> 회원조회 </Link>                    
                    </li>
                )}
            </ul>
        </div>
    )
}

export default Header;