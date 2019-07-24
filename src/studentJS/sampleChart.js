import React from "react";
import {
  BarChart,
  Tooltip,
  Bar,
  XAxis,
  CartesianGrid,
  Legend,
  YAxis,
  ResponsiveContainer,
  Surface, 
  Symbols, 
} from "recharts";
import _ from "lodash";


class SampleChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      disabled: [],
      chartColors: {
        Tristeza: "#243853",
        Miedo: "#fe8339",
        Rabia: "#5faab2",
        Felicidad: "#ffbe28",      
        Sorpresa: "#3f7277",
        Disgusto: "#9acc27",
      },
      chartData: [
        {
          name: 'Ene', Tristeza: 0, Miedo: 0 , Rabia: 15, Felicidad: 85, Sorpresa: 0, Disgusto: 0,  
        },
        {
          name: 'Feb', Tristeza: 10, Miedo: 5, Rabia: 35, Felicidad: 50, Sorpresa: 0, Disgusto: 0, 
        },
        {
          name: 'Mar', Tristeza: 30, Miedo: 20, Rabia: 30, Felicidad: 20, Sorpresa: 0, Disgusto: 0, 
        },
        {
          name: 'Abr', Tristeza: 45, Miedo: 25, Rabia: 20, Felicidad: 10, Sorpresa: 0, Disgusto: 0, 
        },
        {
          name: 'May', Tristeza: 55, Miedo: 20, Rabia: 20, Felicidad: 5, Sorpresa: 0, Disgusto: 0,
        },
        {
          name: 'Jun', Tristeza: 65, Miedo: 27, Rabia: 8, Felicidad: 0, Sorpresa: 0, Disgusto: 0,
        },
        {
          name: 'Jul', Tristeza: 70, Miedo: 15, Rabia: 15, Felicidad: 0, Sorpresa: 0, Disgusto: 0, 
        },
        {
          name: 'Ago', Tristeza: 72, Miedo: 28, Rabia: 0, Felicidad: 0, Sorpresa: 0, Disgusto: 0, 
        },
        {
          name: 'Sep', Tristeza: 70, Miedo: 20, Rabia: 10, Felicidad: 0, Sorpresa: 0, Disgusto: 0, 
        },
        {
          name: 'Oct', Tristeza: 70, Miedo: 5, Rabia: 0, Felicidad: 0, Sorpresa: 20, Disgusto: 5, 
        },
        {
          name: 'Nov', Tristeza: 75, Miedo: 0, Rabia: 0, Felicidad: 0, Sorpresa: 15, Disgusto: 10, 
        },
        {
          name: 'Dic', Tristeza: 80, Miedo: 0, Rabia: 0, Felicidad: 0, Sorpresa: 5, Disgusto: 15, 
        },
      ]
    };
  }

  handleClick = dataKey => {
    if (_.includes(this.state.disabled, dataKey)) {
      this.setState({
        disabled: this.state.disabled.filter(obj => obj !== dataKey)
      });
    } else {
      this.setState({ disabled: this.state.disabled.concat(dataKey) });
    }
  };

  renderCusomizedLegend = ({ payload }) => {
    return (
      <div className="customized-legend">
        
        {payload.map(entry => {
          const { dataKey, color } = entry;
          const active = _.includes(this.state.disabled, dataKey);
          const style = {
            marginRight: 15,
            color: active ? "#AAA" : "#000"
                      };

          return (
            <span
              className="legend-item"
              onClick={() => this.handleClick(dataKey)}
              style={style}
            >
              <Surface width={50} height={40} viewBox="0 0 30 30">
                <Symbols cx={20} cy={20} type="square" size={150} fill={color} />
                {active && (
                  <Symbols
                    cx={20}
                    cy={20}
                    type="square"
                    size={150}
                    fill={"#FFF"}
                  />
                )}
              </Surface>
              <span style={{fontSize: "14px", padding: "4px",
                       backgroundColor:"#E8F5FB",width:"55%",height:"35px",
                      borderTopRightRadius:"1em", borderBottomRightRadius:"1em",
                      color:"black",textAlign:"left"}}
                      >{dataKey}</span>
            </span>
          );
        })}
      </div>
    );
  };

  render() {
    return (
      <div>
        <ResponsiveContainer height={400} width={550}>
          <BarChart layout="horizontal" data={this.state.chartData}>
          <Tooltip/>
            {_.toPairs(this.state.chartColors)
              .filter(pair => !_.includes(this.state.disabled, pair[0]))
              .map(pair => (
                <Bar
                yAxisId="left"
                  stackId="a"
                  key={pair[0]}
                  dataKey={pair[0]}
                  fill={pair[1]}
                  barSize={17}
                />
              ))}
            <YAxis
              domain={[1, 100]}
              interval="preserveStartEnd"
              padding={{ top: 20, bottom: 20 }}
              tickCount={15}
              orientation="left"
              yAxisId="left"
              label={{ value: "%", angle: -90, position: "Left"}}
            />
            <YAxis
              domain={[1, 31]}
              interval="preserveStartEnd"
              padding={{ top: 20, bottom: 20 }}
              tickCount={20}
              orientation="right"
              yAxisId="right"
              label={{ value: "Días", angle: 90, position: "Right"}}
            />
            <XAxis
              dataKey={"name"} />
            <Legend
              layout= "vertical"
              verticalAlign="middle"
              width={30}
              align="right"
              payload={_.toPairs(this.state.chartColors).map(pair => ({
                dataKey: pair[0],
                color: pair[1]
              }))}
              content={this.renderCusomizedLegend}
            />
            
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }
}

export default SampleChart;
