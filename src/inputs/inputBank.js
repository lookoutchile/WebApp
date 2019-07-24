import React, { Component } from 'react'

class InputBank extends Component {
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
               

              <option value="BANCO ESTADO">BANCO ESTADO</option>
              <option value="BANCO DE CHILE">BANCO DE CHILE</option>
              <option value="BANCO EDWARDS | CITI">BANCO EDWARDS</option>
              <option value="BANCO ATLAS">BANCO ATLAS</option>
              <option value="BANCO CREDICHILE">BANCO CREDICHILE</option>
              <option value="BANCO INTERNACIONAL">BANCO INTERNACIONAL </option>
              <option value="SCOTIABANK CHILE">SCOTIABANK CHILE</option>
              <option value="BANCO DE CREDITO E INVERSIONES">BANCO DE CREDITO E INVERSIONES </option>
              <option value="TBANC">TBANC</option>
              <option value="BANCO NOVA">BANCO NOVA</option>
              <option value="BANCO BICE">BANCO BICE</option>
              <option value="HSBC BANK (CHILE)">HSBC BANK (CHILE)</option>
              <option value="BANCO SANTANDER-CHILE">BANCO SANTANDER-CHILE</option>
              <option value="BANEFE">BANEFE</option>
              <option value="ITAÚ CORPBANCA">ITAÚ CORPBANCA</option>
              <option value="BANCO SECURITY">BANCO SECURITY</option>
              <option value="BANCO FALABELLA">BANCO FALABELLA</option>
              <option value="BANCO RIPLEY">BANCO RIPLEY</option>
              <option value="BANCO CONSORCIO">BANCO CONSORCIO</option>
              <option value="SCOTIABANK AZUL">SCOTIABANK AZUL</option>
              <option value="BANCO BTG PACTUAL CHILE">BANCO BTG PACTUAL CHILE</option>
                  
            </select>
          
        </div>
      </div>
    )
  }
}

export default InputBank