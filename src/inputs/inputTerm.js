import React, { Component } from 'react'

class InputTerm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: 15
    };
  }

  updateInputValue(evt) {
    this.setState({
      inputValue: evt.target.value
    });
    this.props.change(this.props.name, evt.target.value)
  }
  
  render() {
    return (
      <div className="form-group">
        <label className="control-label col-md-3 col-sm-3 col-xs-12">
          {this.props.name} <span className="required">*</span>
        </label>
        <div className="col-md-6 col-sm-6 col-xs-12">
            <select id={this.props.name}  value={this.state.inputValue} onChange={evt => this.updateInputValue(evt)} required="required" className="form-control col-md-7 col-xs-12" type="text">
                <option value="15"> 15 dias</option>
                <option value="30"> 30 dias</option>
                <option value="45"> 45 dias</option>
                <option value="60"> 60 dias</option>
                <option value="75"> 75 dias</option>
                <option value="90"> 90 dias</option>
                <option value="105">105 dias</option>
                <option value="120">120 dias</option>
            </select>
          
        </div>
      </div>
    )
  }
}

export default InputTerm