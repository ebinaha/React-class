import { Component } from "react";
import Swal from 'sweetalert2';

class SweetAlert2ConfirmEx extends Component{
    // then이 반드시 필요 : 응답에 따라 다른 처리가 들어가야 하기 때문에, 응답에 따른 결과값
    // then : 내가 만든 함수 
    deleteAlert = (e) => {
        // 객체를 매개변수로 가지고 감
        Swal.fire({
            title:'정말 삭제하시겠습니까?',
            icon:'question',
            showConfirmButton : true,   //주지 않아도 들어가 있음
            confirmButtonColor:'#4B088A',
            showCancelButton:true,
            cancelButtonColor:'#01DF01',
            confirmButtonText:'예',
            cancelButtonText:'아니오'
        }).then((result)=>{
            // 응답이 yes (true)이면 : deleteId가 id인 h1태그 내용 삭제
            if(result.value){
                document.getElementById('deleteId').remove();
                // alert의 타이틀, 내용, ok 버튼
                Swal.fire('Deleted', 'sweetalert2 삭제 완료', 'success');
            }
        })
    }

    render(){
        return(
            <>
                <h1 id='deleteId'> sweetalert2 </h1>
                <button onClick={e=> this.deleteAlert()}> 삭제 </button>
            </>
        )
    }

}

export default SweetAlert2ConfirmEx;