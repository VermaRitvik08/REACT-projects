import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './widget.css'

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
];

export default function Widget() {
  return (
    <div className="widget">

        <ResponsiveContainer className='barchart' width="100%" aspect={2 / 1}>
            <BarChart data={data}>
            <CartesianGrid strokeDasharray="5 5" />
          <XAxis dataKey="name" />
          <YAxis/>
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" stackId="a" fill="#8884d8" />
          <Bar dataKey="amt" stackId="a" fill="#82ca9d" />
          <Bar dataKey="uv" fill="#ffc658" />
            </BarChart>
        </ResponsiveContainer>
    </div>
  )
}
