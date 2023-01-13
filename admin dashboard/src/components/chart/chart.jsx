import React from 'react'
import './chart.css'
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


const data = [
  {
    name: 'Initial',
    ActiveUser: 1890,
  },
  {
    name: 'Term 1',
    ActiveUser: 1000,
  },
  {
    name: 'Term 2',
    ActiveUser: 3000,
  },
  {
    name: 'Term 3',
    ActiveUser: 2000,
  },
  {
    name: 'Term 4',
    ActiveUser: 2780,
  },
];

export default function chart({title, dataKey, grid}) {
  return (
    <div className="chart">
        <h3 className="chartTitle">{title}</h3>
        <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#3b5998" />
          <Line type="monotone" dataKey={dataKey} stroke="#3b5998" />
          <Tooltip />
          {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />}
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
