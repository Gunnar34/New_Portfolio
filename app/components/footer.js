import React from 'react';
import{ Footer } from 'react-materialize';
import { SocialIcon } from 'react-social-icons';
import { Link } from 'react-router-dom';
import IconButton from 'material-ui/IconButton';
import Folder from 'material-ui/svg-icons/file/folder-open';
import Mail from 'material-ui/svg-icons/communication/mail-outline';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

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
        <p className="grey-text text-lighten-4">Full stack developer with a passion for problem solving</p>
        <div className="col l2 s3" style={{textAlign: 'center'}}>
          <SocialIcon url="https://www.linkedin.com/in/noah-rolf/" style={{ height: 50, width: 50}}/>
          <p>linkedin</p>
        </div>
        <div className="col l2 s3" style={{textAlign: 'center'}}>
          <SocialIcon url="https://github.com/Gunnar34" color="#000" style={{ height: 50, width: 50}}/>
          <p>Github</p>
        </div>
        <div className="col l2 s3" style={{textAlign: 'center'}}>
          <Link to="/resume" style={{ textDecoration: 'none'}}>
            <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
              <IconButton style={{height: 50, width: 50, padding: 0}} iconStyle={{height: 50, width: 50, margin: 0}}>
                <Folder iconStyle={{fill: '#007fb1'}} color="#007fb1" />
              </IconButton>
            </MuiThemeProvider>
          </Link>
          <p>Resume</p>
        </div>
        <div className="col l2 s3" style={{textAlign: 'center'}}>
          <Link to="/contact" style={{ textDecoration: 'none'}}>
            <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
              <IconButton style={{height: 50, width: 50, padding: 0}} iconStyle={{height: 50, width: 50, margin: 0}}>
                <Mail fill="#000" color="#000" />
              </IconButton>
            </MuiThemeProvider>
          </Link>
          <p>Contact</p>
        </div>
      </Footer>
    );
  }
}
