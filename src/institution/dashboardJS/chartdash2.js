import React, { PureComponent } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const data = [
  {
    Día: '1°', A: 35,
  },
  {
    Día: '2°', A: 50,
  },
  {
    Día: '3°', A: 45,
  },
  {
    Día: '4°', A: 60,
  },
  {
    Día: '5°', A: 85,
  },
  {
    Día: '6°', A: 80,
  },
  {
    Día: '7°', A: 100,
  },
  {
    Día: '8°', A: 120,
  },
];

export default class ChartDash2 extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/xqjtetw0/';

  render() {
    return (
      <LineChart
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
       
        <Line type="monotone" dataKey="A" stroke="white" strokeWidth={3} />
      </LineChart>
    );
  }
}
