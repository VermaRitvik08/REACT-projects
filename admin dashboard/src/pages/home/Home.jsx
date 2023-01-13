import React from 'react'
import Stats from '../../components/stats/Stats'
import Chart from '../../components/chart/chart'
import Todo from '../../components/todo/Todo'
import Widget from '../../components/lastwidget/Widget'
import './home.css'


export default function Home() {
  return (
    <div className="home">
        <Stats/>
        <Chart title="Profit Margin" grid dataKey="ActiveUser"/>
        <div className="widget">
            <Todo/>
            <Widget/>
        </div>
    </div>
  )
}
