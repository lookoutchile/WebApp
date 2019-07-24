import React , {PureComponent} from 'react';
import Ca_icon from '../img/Ca_icon.png';

class CaMiniButton extends PureComponent { 
    constructor(props) {
      super(props);
      this.state = {
        isCardView: false,
      }
    } 
  
    render() {
      return (
        <a className="btn" onClick={()=>this.setState({ isCardView: !this.state.isCardView })}>
          { this.state.isCardView
            ? <div >
            <img src={Ca_icon} alt="Logo" align="left" style={{height: "15px", width: "15px"}}/>
          </div>  
            : <div >
            <img src={Ca_icon} alt="Logo" align="left" style={{height: "15px", width: "15px"}}/>
          </div> 
          }
        </a>
      );
    }
  
  }

  export default CaMiniButton;