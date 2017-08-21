import React from 'react';
import{ NavItem, Navbar } from 'react-materialize';
import '../style.css';
import Logo from '!!file!../images/logo.png';

export default class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {test: 'foo'};
  }
  render() {
    return (
      <Navbar options={{menuWidth: 200}} className="teal" brand={<img style={{height: '64px'}} src={Logo} />}  left>
        <NavItem href="/">Home</NavItem>
        <NavItem href="/portfolio">Portfolio</NavItem>
        <NavItem href="/resume">Resume</NavItem>
        <NavItem href="/contact">Contact</NavItem>
      </Navbar>
    );
  }
}
