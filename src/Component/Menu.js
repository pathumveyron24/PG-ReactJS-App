import React, { Component } from 'react';
import './Menu.css'

class Menu extends Component{
    render(){
        return(
            <div className={"Menu "+(this.props.selected?"Menu-selected":"")}>
                <span> { this.props.text } </span>
                <span className={"badge Menu-notification "+(this.props.notifications?"badge-danger":"")}> { this.props.notifications } </span>
            </div>
        );
    }

  
}
export default Menu;