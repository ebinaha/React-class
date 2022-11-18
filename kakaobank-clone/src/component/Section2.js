import { Component } from "react";
import {Button} from 'reactstrap';

class Section2 extends Component {
    render(){
        return(
            <tr>
                {/* className={} : 특정 변수의 값이나 함수 호출시 */}
                {/* w-70 : 만든 게 아닌 Table(reactstrap)에 속성으로 넣어주는 class, 약속된 값, 전체 Row의 Column의 비율*/}
                {/* style에 design을 입히기 위해서 className 사용 */}
                {/* column 비율 : 7:3 */}
                <td className={"w-70"}>
                    <div className="textBox"  style={{paddingLeft:'200px'}}>
                        <span className='L-text'>
                            우대조건 없이 <br/>
                            합리적인 예금과 적금 <br/>
                        </span><br/>

                        <span className='S-text'>
                            기대했던 금리와 다르게 복잡한 우대조건에 실망한 적이 있었나요? <br/>
                            토토뱅크의 예금, 적금은 숨겨진 우대조건 없이 누구에게나 편리하고 합리적입니다.
                        </span> <br/>

                        <Button color='light' size='sm'> 정기예금 &gt; </Button> &nbsp; &nbsp;
                        <Button color='light' size='sm'> 자유적금 &gt; </Button> <br/><br/>
                        <img src={require('../img/main-savings-money.png')} height="124px" width="522px" alt=""/>
                    </div>
                </td>

                <td className={"w-30"}>
                    <div className="imgBox">
                        <img src={require('../img/main-savings.png')} height="900px" width="500px" alt=""/>
                    </div>
                </td>
            </tr>
        )
    }
}

export default Section2;