import React,{Component} from 'react';
import '../Stylesheets/Water.css';
import water from '../Assets/Water Drop Icon.png'

class Water extends Component{
    render(){
        var stack = new Array(30).fill(null);
        let passedWater = this.props.waterCurrent;
          if(passedWater > 30){
              passedWater = 30;
              }
        for (var i = 0; i < passedWater; i++) {
          stack.push(<img className="Water-Img" key={i} src={water} alt='water icon' />);
        }
        return <div className="Water">
        {stack}
      </div>
    }
}
export default Water;