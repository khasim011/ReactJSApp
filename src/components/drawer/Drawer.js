import React from 'react';
import './Drawer.css';
import ReactDrawer from 'react-drawer';
import 'react-drawer/lib/react-drawer.css';

class Drawer extends React.Component {
  constructor() {
    super();
    this.state = {
      open: false,
      position: 'left',
      noOverlay: false
    };
    this.toggleDrawer = this.toggleDrawer.bind(this);
    this.closeDrawer = this.closeDrawer.bind(this);
    this.onDrawerClose = this.onDrawerClose.bind(this);
    this.setPosition = this.setPosition.bind(this);
    this.setNoOverlay = this.setNoOverlay.bind(this);
  }
  setPosition(e) {
    this.setState({position: e.target.value});
  }
  setNoOverlay(e) {
    this.setState({noOverlay: e.target.checked});
  }
  toggleDrawer() {
    this.setState({open: !this.state.open});
  }
  closeDrawer() {
    this.setState({open: false});
  }
  onDrawerClose() {
    this.setState({open: false});
  }
  render() {
    return (
      <div className="drawerMain">
        <div className="drawerIcon" onClick={this.toggleDrawer}> 
        	<div className="drawerIconDiv" ></div>
			<div className="drawerIconDiv" ></div>
			<div className="drawerIconDiv" ></div>
        </div>
        <ReactDrawer
          open={this.state.open}
          position={this.state.position}
          onClose={this.onDrawerClose}
          noOverlay={this.state.noOverlay}>
          <i onClick={this.closeDrawer} className="icono-cross"></i>
          <h2>What a nice drawer !</h2>
          <a href="/plp">PLP</a>
        </ReactDrawer>
      </div>
    );
  }
}

export default Drawer;
