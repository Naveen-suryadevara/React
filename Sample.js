import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Profile = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Myname</Link>
        </li>
        <li>
          <Link to="/livingin">LivingIn</Link>
        </li>
        <li>
          <Link to="/preesentlyworking">Presentlyworking</Link>
        </li>
      </ul>
      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/livingin" component={About} />
      <Route path="/preesentlyworking" component={Topics} />
    </div>
  </Router>
);

const Home = () => (
  <div>
    <h2>Naveen</h2>
  </div>
);

const About = () => (
  <div>
    <h2>Houston</h2>
  </div>
);

const Topics = ({ match }) => (
  <div>
    <h2>UIdeveloper</h2>
    <ul>
      <li>
        <Link to={`${match.url}/I am working at`}>I am working at</Link>
      </li>
      <li>
        <Link to={`${match.url}/Century21`}>21 Staff</Link>
      </li>
      <li>
        <Link to={`${match.url}/ As a UI Developer`}>As a UI Developer</Link>
      </li>

      <li>
        <Link to={`${match.url}/  In Woodlands,Texas`}>In Woodlands,Texas</Link>
      </li>
    </ul>

    <Route path={`${match.url}/:  topicId`} component={Topic} />
    <Route exact path={match.url} render={() => <h3> Thank you.</h3>} />
  </div>
);

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
);

export default Profile;
