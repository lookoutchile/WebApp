import React , {PureComponent} from 'react';
import I_icon from '../img/I_icon.png';

class IButton extends PureComponent { 
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
            <img src={I_icon} alt="Logo" align="left" style={{height: "30px", width: "30px"}}/>
          </div>  
            : <div >
            <img src={I_icon} alt="Logo" align="left" style={{height: "30px", width: "30px"}}/>
          </div> 
          }
        </a>
      );
    }
  
  }

  export default IButton;