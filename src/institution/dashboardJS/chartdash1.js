import React, { PureComponent } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const data = [
  {
    Día: 'L', I: 40,
  },
  {
    Día: 'M', I: 10,
  },
  {
    Día: 'W', I: 5,
  },
  {
    Día: 'J', I: 15,
  },
  {
    Día: 'V', I: 35,
  },
];

export default class ChartDash1 extends PureComponent {
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
        
        <Line type="monotone" dataKey="I" stroke="white" strokeWidth={3} />
      </LineChart>
    );
  }
}
