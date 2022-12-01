import {useState} from 'react';
import axios from 'axios';
import {Button, Table} from 'reactstrap';
import SubwaySheet from './SubwaySheet';
import SubwayLineChart from './SubwayLineChart';

function SubwayApi(){

    const [row, setRow] = useState([]);

    const apiRequest = () => {
        axios.get("http://openapi.seoul.go.kr:8088/79415655796265613130364b44784474/json/CardSubwayStatsNew/1/100/20221019")
        .then((response) => {
            console.log(response.data)
            // 사용할 배열만 가져오기
            console.log(response.data.CardSubwayStatsNew.row)

            setRow(response.data.CardSubwayStatsNew.row);
        }).catch((err)=>{
            console.log(err)
        })
    }

    return (
        <div>
            <br/>
            <Button color="success" outline onClick={apiRequest}> 데이터 가져오기 </Button>
            <br/><br/>
            <SubwaySheet row={row}/>
            <SubwayLineChart row={row}/>
        </div>
        
    )
}

export default SubwayApi;
