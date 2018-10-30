import React from 'react';

const containerStyle = {
  position:'absolute',
  display:'block',
  top:0,
  left:0,
  right:0,
  width:'100%',
  height:'100%',
  backgroundColor:'#00ffff'
}

const barStyle = {
  position:'absolute',
  display:'block',
  top:0,
  right:0,
  width:10,
  height:100,
  backgroundColor:'#0000ff'
}

class Scroll extends React.Component {
  // constructor(props){
  //   super(props)
  // }

  render(){
    return (
      <div className="scroll-container" style={containerStyle}>
        {this.props.children}
        <span className="scroll-bar" style={barStyle}></span>
      </div>
    )
  }
}

export default Scroll