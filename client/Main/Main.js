import React from 'react';
import NavBar from './NavBar/Navbar';

class Main extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        {this.props.children}
      </div>
    );
  }
}

export default Main;
