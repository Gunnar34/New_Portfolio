import React from 'react';
import '../../style.css';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {test: 'foo'};
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col s12">
            <h2 className="post-title hide-on-med-and-down">I am <em>Noah Rolf</em>.</h2>
            <h3 className="post-title hide-on-large-only">I am <em>Noah Rolf</em>.</h3>
          </div>
          <div className="col s12">
            <h3 className="post-title">I build <em>responsive</em>, <em>maintainable</em> and <em>interactive</em> web applications</h3>
            <h5>that run across<em>devices</em>, <em>platforms</em>, and <em>browsers</em>.</h5>
          </div>
          <div className="col s12">
            <h3 className="center-align">Technologies I build with</h3>
            <div className="row">
              <div className="col l3 s6 skill-item">
                <h4>Client Side</h4>
                <ul className="">
                  <li><em><b>*</b>Javascript</em></li>
                  <ul>
                    <li><em><b>*</b>ES6 / ES5</em></li>
                  </ul>
                  <li><em>Angular.js</em></li>
                  <li><em><b>*</b>React.js</em>
                    <ul>
                      <li><em>Redux</em></li>
                    </ul>
                  </li>
                  <li><em>jQuery</em></li>
                </ul>
              </div>
              <div className="col l3 s6 skill-item">
                <h4>Front End</h4>
                <ul className="">
                  <li><em><b>*</b>HTML5</em></li>
                  <li><em><b>*</b>CSS3</em>
                    <ul>
                      <li><em><b>*</b>Materialize</em></li>
                      <li><em>Bootstrap</em></li>
                    </ul>
                  </li>
                  <li><em>SASS</em></li>
                  <ul>
                    <li><em>SCSS</em></li>
                  </ul>
                </ul>
              </div>

              <div className="col l3 s6 skill-item">
                <h4>Server Side</h4>
                <ul>
                  <li><em>MongoDB</em></li>
                  <li><em>postgreSQL</em></li>
                  <li><em><b>*</b>Node.js</em>
                    <ul>
                      <li><em><b>*</b>Express</em></li>
                    </ul>
                  </li>
                </ul>
              </div>

              <div className="col l3 s6 skill-item">
                <h4>Deployment</h4>
                <ul className="">
                  <li><em><b>*</b>Heroku</em></li>
                  <li><em><b>*</b>Webpack</em></li>
                  <li><em>Gulp</em></li>
                  <li><em>Grunt</em></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col s12">
            <em><b>*</b> This site is built with these technologies</em><br/>
            <em>Find the source code on <a href="https://github.com/Gunnar34/New_Portfolio">My Github</a></em>
          </div>
          <div className="col s12">
            <div className="contact-banner">
              <p>Contact me at <em>noahrolf1@gmail.com</em> or call <em>651-788-3057</em> or <a href="/contact">click here</a> to email me now!</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
