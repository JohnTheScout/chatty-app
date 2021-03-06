import React, {Component} from 'react';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <a href="/" className="navbar-brand">Chatty</a>
        <span id="user-num">{this.props.userNum} users online</span>
      </nav>
    );
  }
}
export default Navbar;
