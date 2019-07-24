import React , {PureComponent} from 'react';
import R_icon from '../img/R_icon.png';

class RMiniButton extends PureComponent { 
    constructor(props) {
      super(props);
      this.state = {
        isCardView: false,
      }
    } 
  
    render() {
      return (
        <div className="btn" onClick={()=>this.setState({ isCardView: !this.state.isCardView })}>
          { this.state.isCardView
            ? <div >
            <img src={R_icon} alt="Logo" align="left" style={{height: "15px", width: "15px"}}/>
          </div>  
            : <div >
            <img src={R_icon} alt="Logo" align="left" style={{height: "15px", width: "15px"}}/>
          </div> 
          }
        </div>
      );
    }
  
  }

  export default RMiniButton;