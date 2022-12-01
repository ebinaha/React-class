import {useState} from 'react';
import axios from 'axios';
import {Button, Table} from 'reactstrap';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts'

function RechartsLine () {
    const data = [
        {군구 : '광진구', 유동인구수:32760, 비유동인구수:34000},
        {군구 : '동대문구', 유동인구수:30480, 비유동인구수:56000},
        {군구 : '마포구', 유동인구수:27250, 비유동인구수:23000},
        {군구 : '구로구', 유동인구수:49870, 비유동인구수:67000},
        {군구 : '강남구', 유동인구수:51420, 비유동인구수:55000},
    ]

    return (
        <LineChart width={1000} height={300} data={data} margin={{top:5, right:30, left:20, bottom:5}}>
            <CartesianGrid strokeDasharray="3 3"/>
            <XAxis dataKey={"군구"}/>
            <YAxis/>
            <Tooltip/>
            <Legend/>
            <Line type="monotone" dataKey={"유동인구수"} stroke="#8884d8" activeDot={{r:8}}/>
            <Line type="monotone" dataKey={"비유동인구수"} stroke="#82ca9d" /> 

        </LineChart>
    )
}

export default RechartsLine;