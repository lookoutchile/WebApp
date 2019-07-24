import React , {PureComponent} from 'react';
import Ci_icon from '../img/Ci_icon.png';

class CiButton extends PureComponent { 
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
            <img src={Ci_icon} alt="Logo" align="left" style={{height: "30px", width: "30px"}}/>
          </div>  
            : <div >
            <img src={Ci_icon} alt="Logo" align="left" style={{height: "30px", width: "30px"}}/>
          </div> 
          }
        </a>
      );
    }
  
  }

  export default CiButton;