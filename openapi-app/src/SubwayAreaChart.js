import {useState, useEffect} from 'react';
import {XAxis, YAxis, CartesianGrid, Tooltip, Legend, AreaChart, Area} from 'recharts'

function SubwayAreaChart({row}){
    const [data, setData] = useState([]);

    useEffect(()=>{
        // 새로운 객체를 만들어 data 배열을 생성
        setData(
            // 화살표 함수 뒤에 괄호(), 중괄호{}는 return과 함께 사용
            // 괄호 안 {}는 객체
            row.map((item) => ({
                역이름: item.SUB_STA_NM,
                유동인구수: item.RIDE_PASGR_NUM + item.ALIGHT_PASGR_NUM,
            }))
        );
    }, []);

    return(
        <>
            {/* 객체 AreaChart에 props를 넣어줌 : 컴포넌트의 매개변수(props)로 넣어주는 것*/}
            <AreaChart width={1300} height={500} data={data} margin={{top:5, right:30, left:20, bottom:5}} style={{margin:"0 auto"}}>
                {/* 표의 그리드 : 시작과 끝 사이에 3개씩 그림 */}
                <CartesianGrid strokeDasharray="3 3"/>
                {/* // 승차인원 하차인원수 / x축은 00, 역이름 */}
                <XAxis dataKey={"역이름"}/>
                <YAxis/>
                {/* 가져다놓았을 때 보여주는 것 */}
                <Tooltip/>
                {/* 색 별로 보여주는 것 */}
                <Legend/>

                <Area type="monotone" dataKey={"유동인구수"} stroke="#8884d8" activeDot={{r:8}}/> 
            
            </AreaChart>
        </>
    )


}

export default SubwayAreaChart;