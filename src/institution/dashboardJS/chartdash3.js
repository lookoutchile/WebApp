import React, { PureComponent } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
} from 'recharts';

const data = [
  {
    Día: '1°', A: 35, B:25,
  },
  {
    Día: '2°', A: 50, B:40,
  },
  {
    Día: '3°', A: 45, B:38,
  },
  {
    Día: '4°', A: 60, B:60,
  },
  {
    Día: '5°', A: 85, B:60,
  },
  {
    Día: '6°', A: 80, B:70,
  },
  {
    Día: '7°', A: 100, B:55,
  },
  {
    Día: '8°', A: 120, B:110,
  },
];

export default class ChartDash3 extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/xqjtetw0/';

  render() {
    return (
      <BarChart
        width={300}
        height={150}
        data={data}
        margin={{
          top: 15, right: 50, left: 0, bottom: 15,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="Día" tick={{ fill: 'white' }} axisLine={false} tickLine={false}/>
        <YAxis tick={{ fill: 'white' }} axisLine={false} tickLine={false}/>
        
        <Bar dataKey="A" fill="white"/>
        <Bar dataKey="B" fill="#777"/>
      </BarChart>
    );
  }
}
