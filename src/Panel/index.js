import React from 'react';
import './index.css';


export class PanelHead extends React.Component {

  // constructor(props){
  //   super(props)
  // }

  render(){
    return (
      <div className="panel-head">
      </div>
    )
  }
}


export class PanelMain extends React.Component {

  // constructor(props){
  //   super(props)
  // }

  render(){
    return (
      <div>
        
      </div>
    )
  }

}


export class PanelFoot extends React.Component {

  // constructor(props){
  //   super(props)
  // }

  render(){
    return (
      <div>
        
      </div>
    )
  }

}


export class PanelToggle extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      active:true,
      a:'a',
      e:null
    }
  }

  render(){
    return (
      <div onClick={
        (e)=>{
          console.log(e,this)
          console.log(e.type)
          setTimeout(function(){
            console.log(e.type)

          })
          this.setState({
            a:e.type,
            e:e
          })
        }
      } className="panel-toggle">
      <i className={["iconfont",this.state.active ? 'icon-right-circle' : 'icon-left-circle'].join(" ")}></i>
      </div>
    )
  }

}


export class Panel extends React.Component {

  constructor(props){
    console.log("constructor.....")
    super(props)
    this.state = {
      active:true,
      a:'a'
    }
  }

  panelToggleHandler(){
    console.log(this)
    // this.setState({active});
  }

  render(){
    return (
      <div className={["panel",this.state.active ? 'active' : ''].join(" ")}>
        <PanelToggle active={this.state.active} panelToggleHandler={this.panelToggleHandler} />
        {this.props.children}
      </div>
    )
  }

}
/**
var lis = document.querySelectorAll('.icon-cover>span:first-child');
lis.forEach(function(v){
	v.click()
})
 */

// export default Panel