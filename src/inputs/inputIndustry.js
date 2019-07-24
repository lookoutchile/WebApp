import React, { Component } from 'react'

class InputIndustry extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: ''
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
                <option value="Minería"> Minería</option>
                <option value="Construcción"> Construcción</option>
                <option value="Retail"> Retail</option>
                <option value="Salud"> Salud</option>
                <option value="Comercio"> Comercio</option>
                <option value="Transporte"> Transporte</option>
                <option value="Manufacturas">Manufacturas</option>
                <option value="Banca">Banca</option>
                <option value="Rest. y H">Rest. y H</option>
                <option value="Empr. Púbicas">Empr. Púbicas</option>            
            </select>
          
        </div>
      </div>
    )
  }
}

export default InputIndustry