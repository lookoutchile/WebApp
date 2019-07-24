import React , {PureComponent} from 'react';
import E_icon from '../img/E_icon.png';

class EButton extends PureComponent { 
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
            <img src={E_icon} alt="Logo" align="left" style={{height: "30px", width: "30px"}}/>
          </div>  
            : <div >
            <img src={E_icon} alt="Logo" align="left" style={{height: "30px", width: "30px"}}/>
          </div> 
          }
        </a>
      );
    }
  
  }

  export default EButton;