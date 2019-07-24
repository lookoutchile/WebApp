import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
class InputPass extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: '',
    };
  }

  updateInputValue(evt) {
    this.setState({
      inputValue: evt.target.value
          });
    this.props.change(this.props.name, evt.target.value)
  }

  generatePassword() {
    var length = 8,
        charset = "ABCDEFGHJKLMNPQRSTUVWXYZ0123456789",
        retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    this.setState({inputValue:retVal});
}
  
  render() {
    return (
      <div className="form-group" >
        
        
        <label className="control-label col-md-3 col-sm-6 col-xs-12">
          {this.props.name} <span className="required">*</span>
        </label>


        <div className="col-md-4 col-sm-6 col-xs-12">

           
            <input id={this.props.name} min="0"  value={this.state.inputValue} 
               onChange={evt => this.updateInputValue(evt)} required="required" 
                className="form-control col-md-7 col-xs-12" type="text" placeholder={this.props.placeholder}/>
      
                    
          <div style={{color:"red"}}> {this.props.error} </div>
        </div>

        <div className="col-md-3 col-sm-6 col-xs-12"> 
        <Button onClick={() => { this.generatePassword() }}  >Generar</Button>
        </div>


      </div>
    )
  }
}

export default InputPass