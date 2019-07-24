import React, { PureComponent } from 'react';
import ReactTable from "react-table";
import "../react-table.css"


const customFilter = ({ fieldName, filter, onChange }) => {

  return (
    <select
      onChange={event => onChange(event.target.value)}
      style={{ width: "100%" }}
      value={filter ? filter.value : "all"}
    > 
      <option value="all">Mostrar todos</option>
      {testData
        .map(item => item[fieldName])

        .filter((item, i, s) => s.lastIndexOf(item) == i)
        .map(function (value) {
          return (
            <option key={value} value={value}>
              {value}
            </option>
          );
        })}
    </select>
  );
};

const testData= [
  {
    mes: 'Ene', Tristeza: 0, Miedo: 0 , Rabia: 15, Felicidad: 85, Sorpresa: 0, Disgusto: 0, I:0, R:0, N:0, Ca:0, Ci:0, E:0, 
  },
  {
    mes: 'Feb', Tristeza: 10, Miedo: 5, Rabia: 35, Felicidad: 50, Sorpresa: 0, Disgusto: 0, I:0, R:0, N:0, Ca:0, Ci:0, E:0
  },
  {
    mes: 'Mar', Tristeza: 30, Miedo: 20, Rabia: 30, Felicidad: 20, Sorpresa: 0, Disgusto: 0, I:0, R:1, N:0, Ca:0, Ci:0, E:0  
  },
  {
    mes: 'Abr', Tristeza: 45, Miedo: 25, Rabia: 20, Felicidad: 10, Sorpresa: 0, Disgusto: 0, I:0, R:0, N:0, Ca:0, Ci:0, E:0  
  },
  {
    mes: 'May', Tristeza: 55, Miedo: 20, Rabia: 20, Felicidad: 5, Sorpresa: 0, Disgusto: 0, I:3, R:0, N:0, Ca:0, Ci:0, E:0  
  },
  {
    mes: 'Jun', Tristeza: 65, Miedo: 27, Rabia: 8, Felicidad: 0, Sorpresa: 0, Disgusto: 0, I:0, R:2, N:0, Ca:0, Ci:0, E:0,
  },
  {
    mes: 'Jul', Tristeza: 70, Miedo: 15, Rabia: 15, Felicidad: 0, Sorpresa: 0, Disgusto: 0, I:0, R:0, N:0, Ca:0, Ci:0, E:0
  },
  {
    mes: 'Ago', Tristeza: 72, Miedo: 28, Rabia: 0, Felicidad: 0, Sorpresa: 0, Disgusto: 0, I:0, R:0, N:0, Ca:0, Ci:0, E:0  
  },
  {
    mes: 'Sep', Tristeza: 70, Miedo: 20, Rabia: 10, Felicidad: 0, Sorpresa: 0, Disgusto: 0, I:0, R:1, N:0, Ca:0, Ci:0, E:0
  },
  {
    mes: 'Oct', Tristeza: 70, Miedo: 5, Rabia: 0, Felicidad: 0, Sorpresa: 20, Disgusto: 5, I:0, R:0, N:0, Ca:0, Ci:0, E:0  
  },
  {
    mes: 'Nov', Tristeza: 75, Miedo: 0, Rabia: 0, Felicidad: 0, Sorpresa: 15, Disgusto: 10, I:0, R:0, N:0, Ca:1, Ci:0, E:0
  },
  {
    mes: 'Dic', Tristeza: 80, Miedo: 0, Rabia: 0, Felicidad: 0, Sorpresa: 5, Disgusto: 15, I:0, R:0, N:0, Ca:0, Ci:0, E:0  
  }]


const columns = [
  {
    Header: "Mes",
    id: "mes",
    accessor: d => d.mes,
    filterMethod: (filter, row) => {
      return row[filter.id] === filter.value;
    },
    Filter: ({ filter, onChange }) =>
      customFilter({ fieldName:'mes', filter, onChange })
  },{
    Header: "Enero",
    accessor: "Ene", 
    filterMethod: (filter, row) =>
      row[filter.id].startsWith(filter.value) &&
      row[filter.id].endsWith(filter.value)
  },{
    Header: "Evaluaciones Rojas",
    accessor: "R", 
    filterMethod: (filter, row) =>
      row[filter.id].startsWith(filter.value) &&
      row[filter.id].endsWith(filter.value)
  },{
    Header: "Citaciones a apoderado",
    accessor: "Ca", 
    filterMethod: (filter, row) =>
      row[filter.id].startsWith(filter.value) &&
      row[filter.id].endsWith(filter.value)
  },{
    Header: "Citaciones a inspectoría",
    accessor: "Ci", 
    filterMethod: (filter, row) =>
      row[filter.id].startsWith(filter.value) &&
      row[filter.id].endsWith(filter.value)
  },{
    Header: "Anotaciones negativas",
    accessor: "N", 
    filterMethod: (filter, row) =>
      row[filter.id].startsWith(filter.value) &&
      row[filter.id].endsWith(filter.value)
  },{
    Header: "Idas a enfermería",
    accessor: "E", 
    filterMethod: (filter, row) =>
      row[filter.id].startsWith(filter.value) &&
      row[filter.id].endsWith(filter.value)
  }

]

export default class FilterForm extends PureComponent {
  render(){
  return (
    <div>
    <ReactTable
      data={testData}
      filterable
      defaultFilterMethod={(filter, row) =>
        String(row[filter.id]) === filter.value}
      columns={columns}
      defaultPageSize={12}
      className="-striped -highlight"
    />
      <br />
    </div>
  );
      }
    }
