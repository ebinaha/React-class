import { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';

class ModalEx extends Component{
// toggle 사용 변수 필요 : 모달을 띄웠다 안 띄웠다 => 보였다 안 보였다 하는 형태, true/false
    constructor(props){
        super(props);
        this.state = {modal:false} // 안 보임
    }

    // 토글 함수 (사용자 생성 함수, 이름 변경 가능)
    toggle = (e) => {
        this.setState({modal:!this.state.modal})
    }

    render(){
        return(
            <>
                <Button color="warning" onClick={this.toggle}> Modal 버튼 </Button>
                {/* modal 밖을 눌렀을 때 modal off => toggle 넣기 */}
                <Modal isOpen={this.state.modal} fade={true} toggle={this.toggle}>
                    {/* x버튼과 연결될 함수 */}
                    <ModalHeader toggle={this.toggle}> Modal Header </ModalHeader>

                    {/* modal로 사용할 내용 전체 */}
                    <ModalBody> 
                        The generated Lorem Upsum is therefore always free from repetition. 
                    </ModalBody>

                    <ModalFooter>
                        <Button> 버튼 </Button>
                    </ModalFooter>

                </Modal>
            </>
        )
    }
}

export default ModalEx;