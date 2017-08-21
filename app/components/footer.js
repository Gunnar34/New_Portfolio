import React from 'react';
import{ Footer } from 'react-materialize';

export default class BaseFooter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {test: 'foo'};
  }
  render() {
    return (
      <Footer style={{backgroundColor: '#1db7a9'}} copyrights="© 2017 || Noah Rolf || Phone: 651-788-3057 || Email: noahrolf1@gmail.com"
        links={
          <ul>
            <li><a className="grey-text text-lighten-3" href="/">Home</a></li>
            <li><a className="grey-text text-lighten-3" href="/portfolio">Portfolio</a></li>
            <li><a className="grey-text text-lighten-3" href="/resume">Resume</a></li>
            <li><a className="grey-text text-lighten-3" href="/contact">Contact Us</a></li>
          </ul>
        }
        className=""
      >
        <h5 className="white-text">Noah Rolf</h5>
        <p className="grey-text text-lighten-4">Full stack developer with a pssion for problem solving</p>
      </Footer>
    );
  }
}
