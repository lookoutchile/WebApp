import React, { Component } from 'react'
import formatPercent from '../functions/formatPercent'

class InputPercent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: ''
    };
  }

  updateInputValue(evt) {
    this.setState({
      inputValue: formatPercent(evt.target.value)
    });
    this.props.change(this.props.name, formatPercent(evt.target.value))
    
  }
  
  render() {
    return (
      <div className="form-group" >
        <label className="control-label col-md-3 col-sm-3 col-xs-12">
          {this.props.name} <span className="required">*</span>
        </label>
        <div className="col-md-6 col-sm-6 col-xs-12">
          <input id={this.props.name} min="0" value={this.state.inputValue}
           onChange={evt => this.updateInputValue(evt)} required="required"
            className="form-control col-md-7 col-xs-12" type="text" placeholder="2,75%"/>
            <div style={{color:"red"}}> {this.props.error} </div>
        </div>
      </div>
    )
  }
}

export default InputPercent