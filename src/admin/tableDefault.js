import React from 'react';
import { Row,} from 'react-bootstrap'
import {BootstrapTable,TableHeaderColumn} from 'react-bootstrap-table-next';

const defaultSorted = [ /*{
    dataField: 'time', // if dataField is not match to any column you defined, it will be ignored.
    order: 'desc', // desc or asc
   
},*/{
    dataField: 'date', // if dataField is not match to any column you defined, it will be ignored.
        order: 'desc', // desc or asc,
        sortFunc: (a, b, order, dataField, rowA, rowB) => {
            console.log(rowA,rowB,a,b)
            if (order === 'asc') {
                return rowB.date2 - rowA.date2;
            }
            return rowA.date2 - rowB.date2 // desc
        }
}];

const Title = ({title}) =>  {
  return (
      <Row >
          <h3>{title}</h3>
      </Row>
  )
  
}

const DefaultTable = ({title, products, columns}) => {
  return (
      <div>
          <Title title={title} />
          <hr/>
          <div>
            <BootstrapTable
            keyField='id'
            data={products}
            columns={columns}
            defaultSorted={defaultSorted}
    
            />
          </div>
      </div>
  )
}

export default DefaultTable