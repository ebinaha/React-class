import {useState} from 'react';
import axios from 'axios';
import {Button, Table} from 'reactstrap';
import SubwaySheet from './SubwaySheet';
import SubwayLineChart from './SubwayLineChart';
import SubwayAreaChart from './SubwayAreaChart';
import SubwayBarChart from './SubwayBarChart';
import SubwayComposedChart from './SubwayComposedChart';


function SubwayApi(){
    const [viewChart, setViewChart] = useState(false);
    const [row, setRow] = useState([]);

    const apiRequest = () => {
        axios.get("http://openapi.seoul.go.kr:8088/79415655796265613130364b44784474/json/CardSubwayStatsNew/1/20/20221019")
        .then((response) => {
            console.log(response.data)
            // 사용할 배열만 가져오기
            console.log(response.data.CardSubwayStatsNew.row)

            setRow(response.data.CardSubwayStatsNew.row);
            setViewChart(true);

        }).catch((err)=>{
            console.log(err)
        })
    }

    return (
        <div>
            <br/>
            <Button color="success" outline onClick={apiRequest}> 데이터 가져오기 </Button>
            <br/><br/>
            
            {/* viewchart : 빈 차트는 보이지 않고 true일 때(데이터를 가져왔을 때)만 차트 보이도록 함 */}
            {viewChart && (
                <>
                    <SubwaySheet row={row}/><br/>
                    <SubwayLineChart row={row}/>
                    <SubwayAreaChart row={row}/>
                    {/* <SubwayAreaChart2 row={row}/> */}
                    <SubwayBarChart row={row}/>
                    <SubwayComposedChart row={row}/>
                </>
            )}
            
        </div>
        
    )
}

export default SubwayApi;
