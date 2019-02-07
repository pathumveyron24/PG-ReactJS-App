import React, { Component } from 'react';
import './Sidebar.css';


class Sidebar extends Component{
    render(){
        return(
            
            <div className="Navbar-bar">
              <nav class="navbar navbar-light bg-light">
              <span class="navbar-brand mb-0 h1">CoderDojo Sri Lanka</span>
              </nav>
              <nav class="navbar navbar-light bg-light">
              <a class="navbar-brand" href="#">@coderdojoLK</a>
              </nav>
              <div class="list-group">
              <a href="#" class="list-group-item list-group-item-action active">Home</a>
              <a href="#" class="list-group-item list-group-item-action">Posts</a>
              <a href="#" class="list-group-item list-group-item-action">Reviews</a>
              <a href="#" class="list-group-item list-group-item-action">Videos</a>
              <a href="#" class="list-group-item list-group-item-action">Photos</a>
              <a href="#" class="list-group-item list-group-item-action">About</a>
              <a href="#" class="list-group-item list-group-item-action">Community</a>
              <a href="#" class="list-group-item list-group-item-action">Group</a>
              </div>
            </div>
        );
    }

  
}
export default Sidebar;

