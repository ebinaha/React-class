import {Component} from "react";
import {Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button} from 'reactstrap';

class ReactstrapCard extends Component{
    render(){
        return(

            // const imgUrl = "dog.jpg" => local로 이미지 가져오는 경우 거의 없음 public폴더에 img 넣어서 가져옴 => src={imgUrl}
            <Card>
                <CardImg top height="250px" src="http://asq.kr//4KkfRxZfR" alt="Card img cap"/>
                <CardBody>
                    <CardTitle> Card 제목 </CardTitle>
                    <CardSubtitle> Card 부제목 </CardSubtitle>
                    <CardText> Card 내용 Lorem Ipsum is simply dummy text. </CardText>
                    <Button>  버튼 </Button>
                </CardBody>
            </Card>
        )
    }
}

export default ReactstrapCard;