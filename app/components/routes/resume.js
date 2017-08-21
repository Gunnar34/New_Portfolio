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
            <embed title="Resume" src={PDF} width="100%" style={{height: 'calc(100vh - 64px)'}}/>
          </div>
        </div>
      </div>
    );
  }
}
