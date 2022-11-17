import { Component } from "react";
import Swal from 'sweetalert2';

class SweetAlert2BasicEx extends Component{

    componentDidMount(){
        // fire('1.SweetAlert') : 객체 타입으로 포지션, 아이콘, 타이틀을 추가적으로 구현해서 지정 가능 
        // then(result : 그에 대한 응답 처리, ok click => result값이 true
        Swal.fire('1.SweetAlert').then(result => {alert('2.result.value: '+result.value)})
    }

    render(){
        return(
            <h1> sweetalert2 test </h1>
        )
    }
}

export default SweetAlert2BasicEx;