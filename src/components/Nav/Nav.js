import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';

const Nav = (props) => (
  <div className="nav">
    <Link to="/home">
      <h2 className="nav-title">Ensure First</h2>
    </Link>
    <div className="nav-right">
      <Link className="nav-link" to="/home">
        {/* Show this link if they are logged in or not,
        but call this link 'Home' if they are logged in,
        and call this link 'Login / Register' if they are not */}
        {props.user.id ? 'Home' : 'Login / Register'}
      </Link>
      {/* Show the link to the info page and the logout button if the user is logged in */}
      {props.user.id && (
        <>
          {/* <Link className="nav-link" to="/info">
            Info Page
          </Link>
          <Link className="nav-link" to="/vehicle">
            Vehicle Page
          </Link>
          <Link className="nav-link" to="/witness">
            Witness Page
          </Link>
          <Link className="nav-link" to="/cardvehicle">
            Vehicle Card
          </Link>
          <Link className="nav-link" to="/newIncident">
            New Incident  Page
          </Link> */}
          {/* <Link className="nav-link" to="/image">
            Image Page
          </Link> */}
          {/* <Link className="nav-link" to="/incident">
            incident Page
          </Link> */}
          {/* <Link className="nav-link" to="/review">
            Review Page
          </Link> */}
          <Link className="nav-link" to="/scene">
            Scene
          </Link>
          {/* <Link className="nav-link" to="/displayVehicle">
            Display Vehicle
          </Link> */}
          <LogOutButton className="nav-link"/>
        </>
      )}
      {/* Always show this link since the about page is not protected */}
      <Link className="nav-link" to="/about">
        About
      </Link>
    </div>
  </div>
);

// Instead of taking everything from state, we just want the user
// object to determine if they are logged in
// if they are logged in, we show them a few more links 
// if you wanted you could write this code like this:
// const mapStateToProps = ({ user }) => ({ user });
const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps)(Nav);
