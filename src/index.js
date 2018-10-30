import React from 'react';
import ReactDOM from 'react-dom';
// import Scroll from './Scroll';
// import Tab from './Tabs';
import {Panel,PanelHead,PanelMain,PanelFoot} from './Panel'

ReactDOM.render(
  // <Scroll>
  //   <Tab
  //     tabs = {[
  //       {title:'张三'},
  //       {title:'李四'}
  //     ]}
  //   />
  // </Scroll>,
  <Panel>
    <PanelHead />
  </Panel>,
  document.getElementById('root')
)