import { Component } from "react";
import Swal from 'sweetalert2';

class SweetAlert2PositionEx extends Component{
    // 버튼을 누르자마자 alert 뜨게
    // Alert : 사용자의 응답을 받는 것이 아니라 더블체크, 확인시켜주는 개념 : 떴다가 사라짐, 버튼이 하나거나 생략
    // Confirm : 사용자의 yes/no 확인 받음, 버튼이 두개이상

    saveAlert = (flag, positionflag, e)=> {
        Swal.fire({
            position:positionflag,
            icon:'success', // 체크박스 같은 형태
            title:flag+'되었습니다.',
            showConfirmButton: false,   // 기본이 true 
            timer:1500
        })
    }

    render(){
        return(
            <>
                <h1> sweetalert2 </h1>
                <button onClick={e=>this.saveAlert('저장', 'center')}> 저장 </button>
                <button onClick={e=>this.saveAlert('수정', 'bottom-end')}> 수정 </button>
            </>
        )
    }

}

export default SweetAlert2PositionEx;