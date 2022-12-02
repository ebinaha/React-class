import {useState, useEffect} from 'react';
import {Button} from 'reactstrap';
import DaumPostCode from 'react-daum-postcode';

function PostCodeApp(){
    const [address, setAddress] = useState('');
    const [openPostcode, setOpenPostcode] = useState(false);
    // 함수 2개를 handle로 묶음 : const selectAddress
    const handle = {
        // 버튼 클릭 이벤트
        clickButton: () => {
            // setOpenPostcode(current => !current);
            setOpenPostcode(!openPostcode);
        },
        // 주소 선택 이벤트 
        selectAddress: (data) => {
            setAddress(`주소 : ${data.address}, 우편번호: ${data.zonecode}`);
            setOpenPostcode(false);
        },
    }

    return (
        <div style={{margin:"0 auto"}}>
            <div style={{width:"100%", height:"30px"}}>
                {address}
            </div>
            {/* 클릭시 true/false 전환 */}
            <Button color='info' outline onClick={handle.clickButton}> 주소 입력 </Button>

            {/* true일때만 보이게 하는 방법 : &연산 이용 */}
            {openPostcode &&
                // 값을 선택할 경우 실행되는 이벤트
                <DaumPostCode onComplete={handle.selectAddress}
                              //값을 선택할 경우 사용되는 DOM을 제거하여 자동 닫힘 설정
                              autoClose={false}
                              // 팝업을 열때 기본적으로 입력되는 검색어
                              defaultQuery=''/>
            }
        </div>
    )
}

export default PostCodeApp;