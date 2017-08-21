import React from 'react';
import { Container } from 'react-materialize';
import Buffalo from '!!file!../../images/buffalo.png';
import BuffaloMobile from '!!file!../../images/buffaloMobile.png';
import DateWeb from '!!file!../../images/dateNite.png';
import DateMobile from '!!file!../../images/dateMobile.png';
import Abamath from '!!file!../../images/abamath.png';
import AbamathMobile from '!!file!../../images/abaMobile.png';

export default class Team extends React.Component {
  constructor(props) {
    super(props);
    this.state = {test: 'foo'};
  }
  render() {
    return (
      <Container>
        <div className="row">
          <div style={{marginTop: '20px'}} className="col s12 l8 portfolio_item">
            <img style={{width: '100%', marginTop: '10px'}} src={DateWeb} />
            <h2><a href="https://date-nite.herokuapp.com/" target="_blank">(visit site)</a> DateNite</h2>
            <div className="role_wrapper clearfix">
              <p className="role">Role</p>
              <p className="role_title">Author - Front End<br />
                <span className="role_skills">Angular.js, HTML5, CSS3, Materialize</span>
              </p>
            </div>
            <div className="role_wrapper clearfix">
              <p className="role">Role</p>
              <p className="role_title">Author - Back End<br />
                <span className="role_skills">Node.js, Express, MongoDB, Heroku</span>
              </p>
            </div>
          </div>
          <div style={{marginTop: '20px'}} className="col l4 s12 portfolio_item">
            <img src={DateMobile} style={{width: '100%'}} />
          </div>
        </div>
        <div className="row">
          <div style={{marginTop: '20px'}} className="col l8 s12 portfolio_item">
            <img style={{width: '100%', marginTop: '10px'}} src={Buffalo} />
            <h2><a href="" target="_blank">(visit site)</a> Buffalo House Website</h2>
            <div className="role_wrapper clearfix">
              <p className="role">Role</p>
              <p className="role_title">Author - Front End<br />
                <span className="role_skills">React.js, Materialize, HTML5, CSS3</span>
              </p>
            </div>
            <div className="role_wrapper clearfix">
              <p className="role">Role</p>
              <p className="role_title">Author - Back End<br />
                <span className="role_skills">Node.js, Express, MongoDB</span>
              </p>
            </div>
          </div>
          <div style={{marginTop: '20px'}} className="col l4 s12 portfolio_item">
            <img src={BuffaloMobile} style={{width: '100%'}} />
          </div>
        </div>
        <div className="row">
          <div style={{marginTop: '20px'}} className="col l8 s12 portfolio_item">
            <img style={{width: '100%', marginTop: '10px'}} src={Abamath} />
            <h2><span style={{color: 'grey', fontSize: '14px'}} target="_blank">(visit site)</span > Abamath - Check-In</h2>
              <div className="role_wrapper clearfix">
                <p className="role">Role</p>
                <p className="role_title">Software Dev - Front End<br />
                  <span className="role_skills">Angular.js, Materialize, HTML5, CSS3, SCSS</span>
                </p>
              </div>
              <div className="role_wrapper clearfix">
                <p className="role">Role</p>
                <p className="role_title">Software Dev - Back End<br />
                  <span className="role_skills">Node.js, Express, MongoDB, Passport, Oauth 2.0</span>
                </p>
              </div>
            </div>
            <div style={{marginTop: '20px'}} className="col l4 s12 portfolio_item">
              <img src={AbamathMobile} style={{width: '100%'}} />
          </div>
        </div>
      </Container>
    );
  }
}
