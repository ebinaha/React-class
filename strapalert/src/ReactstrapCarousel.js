import {Component} from 'react';
import {UncontrolledCarousel} from 'reactstrap';

const pics = [
    {
        src : 'img.jpg', 
        altText :'배경1 이미지 대체 문구',
        caption : '배경1 설명',
        header : '배경1 제목',
    },
    {
        src : 'img2.jfif', 
        altText :'배경2 이미지 대체 문구',
        caption : '배경2 설명',
        header : '배경2 제목',
    },
    {
        src : 'img3.jfif', 
        altText :'배경3 이미지 대체 문구',
        caption : '배경3 설명',
        header : '배경3 제목',
    },
];
class ReactstrapCarousel extends Component {
    render(){
        return(
            <div >
                {/* inline-block : 슬라이더 위치 고정 */}
                <UncontrolledCarousel items={pics} style={{display:'inline-block', width:'500px', height:'300px'}}/>
            </div>
        )
    }

}

export default ReactstrapCarousel;