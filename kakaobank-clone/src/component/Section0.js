import {Component} from 'react';
import {Table} from 'reactstrap';

class Section0 extends Component {
    render(){
        return(
            // 최종태그가 tr : tbody안에 들어가기 때문에
            <tr>
                {/* colSpan : column을 하나로 합침 */}
                <td className={"w-100"} colSpan='2'>
                    <div className='intro_main'>
                        {/* 절대경로 : absolute => 부모는 relative로 설정해줌(바닥에 깔림) */}
                        {/* block 태그 : 옆으로 배치가 아닌 자동으로 줄을 변경해줌 */}
                        <h3 className='title_main'> 
                            이미 모두의 은행 <br/> 지금은 토토 
                        </h3>

                        <p className='title_sub1'>
                            한 사람, 한 사람을 위해 시작한 은행이<br/>
                            더 많은 사람들이 찾는 모두의 은행이 되었습니다.
                        </p>

                        <p className='title_sub2'>
                            보내고, 받고, 모으고, 쓰는 <br/>
                            당신의 모든 일이 바뀌고 있습니다.
                        </p>
                        
                        {/* inline 태그 : 이미지, 옆으로 배치 */}
                        {/* src에 img를 가져올 때 : require, 상대경로 / public에 img를 가져올 때 : 절대경로*/}
                        <img src={require("../img/main-bg3.png")} width="100%"/>

                    </div>

                </td>
            </tr>
        )
    }
}

export default Section0;