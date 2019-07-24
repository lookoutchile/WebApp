import React, { Component } from 'react'

class InputClient extends Component {
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
                    <select id={this.props.name} value={this.state.inputValue} onChange={evt => this.updateInputValue(evt)} required="required" className="form-control col-md-7 col-xs-12" type="text">
                        <option value='True'> Cliente</option>
                        <option value='false'> Administrador</option>
                    </select>

                </div>
            </div>
        )
    }
}

export default InputClient