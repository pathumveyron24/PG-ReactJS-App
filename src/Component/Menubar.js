import React, { Component } from 'react';
import './Menubar.css';
import Menu from './Menu';

class Menubar extends Component{
    render(){
        return(
            <div className="Menubar-bar">
              <div className="container">
              <Menu text="Page" notifications=""  selected="true"/>
              <Menu text="Inbox" notifications="3" />
              <Menu text="Events" notifications="" />
              <Menu text="Notifications" notifications="25"/>
              <Menu text="Insights" notifications=""  />
            
              </div>
            </div>
        );
    }

  
}
export default Menubar;