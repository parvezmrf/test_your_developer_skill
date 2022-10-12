import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';
import { useLoaderData } from 'react-router-dom';
import './Chart.css'
const Chart = () => {
    const quizData = useLoaderData();
    console.log(quizData.data);

    return (
        <div className='chart'>

            <LineChart width={500} height={400} data={quizData.data} >
                <Line type="monotone" dataKey="total" stroke="#82ca9d" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
            </LineChart>



        </div>
    );
};

export default Chart;