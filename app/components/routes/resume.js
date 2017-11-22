import React from 'react';
import PDF from '!!file!../../images/Resume.pdf';

export default class Program extends React.Component {
  constructor(props) {
    super(props);
    this.state = {test: 'foo'};
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col s12">
            <embed className="hide-on-med-and-down" title="Resume" src={PDF} width="100%" style={{height: 'calc(100vh - 64px)'}}/>
            <object className="hide-on-large-only" width="100%" style={{height: 'calc(100vh - 64px)'}} data="https://docs.google.com/document/d/1mNDmiknaLevrNO-qqiz77i9ewUaQEKQCbLqQ7Gzo4eU/edit?usp=sharing"></object>
          </div>
        </div>
      </div>
    );
  }
}
