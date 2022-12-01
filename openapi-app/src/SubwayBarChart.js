import {useState, useEffect} from 'react';
import {XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar} from 'recharts'

function SubwayBarChart({row}){
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
   
            <BarChart width={1300} height={500} data={data} margin={{top:5, right:30, left:20, bottom:5}}>        
                <CartesianGrid strokeDasharray="3 3"/>            
                <XAxis dataKey={"역이름"}/>
                <YAxis/>
                <Tooltip/>
                <Legend/>
                <Bar type="monotone" dataKey={"유동인구수"} fill="#8884d8"/>             
            </BarChart>  
        </>
    )


}

export default SubwayBarChart;