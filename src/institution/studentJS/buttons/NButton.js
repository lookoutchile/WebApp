import React , {PureComponent} from 'react';
import N_icon from '../img/N_icon.png';

class NButton extends PureComponent { 
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
            <img src={N_icon} alt="Logo" align="left" style={{height: "30px", width: "30px"}}/>
          </div>  
            : <div >
            <img src={N_icon} alt="Logo" align="left" style={{height: "30px", width: "30px"}}/>
          </div> 
          }
        </a>
      );
    }
  
  }

  export default NButton;