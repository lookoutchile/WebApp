import React , {PureComponent} from 'react';

class SadnessButton extends PureComponent { 
    constructor(props) {
      super(props);
      this.state = {
        isCardView: false,
      }
    } 
  
    render() {
      return (
      <div className="col-sm-6" onClick={()=>this.setState({ isCardView: !this.state.isCardView })}>
      { this.state.isCardView
        ? 
            <button type="button" className="btn btn-light" style={{width:"85px", height:"30px", fontSize: "12px" }}>Tristeza</button>

        :
           <button type="button" className="btn btn-secondary" style={{width:"85px", height:"30px", fontSize: "12px", background:"#243854"}}>Tristeza</button>
            
      }
    </div>
      );
    }
  
  }

  export default SadnessButton;