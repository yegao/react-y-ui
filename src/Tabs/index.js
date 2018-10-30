import React from 'react';

function click(e){
  console.log('事件当前被绑定的元素','触发的元素')
  console.log(e.currentTarget,e.target)
}

function tabClick(e){
  console.log('事件当前被绑定的元素','触发的元素')
  console.log(e.currentTarget,e.target)
}

function Tab(props){
  if(!props){
    return
  }
  let items = [],index = 0,len = props.tabs.length;
  for(;index<len;index++){
    items.push(<li key={index} onClick={tabClick} style={{width:100,backgroundColor:'#0000ff'}}>{props.tabs[index].title}</li>)
  }
  return items
}

class Tabs extends React.Component{
  render(){
    let {tabs} = this.props;
    return (
      <div style={{backgroundColor:'#ff0000',width:1000}} onClick={click}>
        <Tab tabs={tabs}/>
      </div>
    )
  }
}

export default Tabs