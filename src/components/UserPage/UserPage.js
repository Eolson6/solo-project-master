import React from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import DisplayImages from '../DisplayImages/DisplayImages';
import Jumbotron from '../Jumbotron/Jumbotron'
import Cards from '../Cards/Cards';





// this could also be written with destructuring parameters as:
// const UserPage = ({ user }) => (
// and then instead of `props.user.username` you could use `user.username`
const UserPage = (props) => (


  <div>
    {/* <h1 id="welcome">
      Welcome, { props.user.username }!
    </h1>
    <p>Your ID is: {props.user.id}</p> */}
    {/* <LogOutButton className="log-in" /> */}
    <Jumbotron />
    <a class="btn btn-primary btn-lg btn-spl" href={"http://localhost:3000/NewIncidentPage#/newIncident"} role="button">Create New Incident</a>
    
    <Cards />
  </div>
);
  


// Instead of taking everything from state, we just want the user info.
// if you wanted you could write this code like this:
// const mapStateToProps = ({user}) => ({ user });
const mapStateToProps = state => ({
  user: state.user,
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(UserPage);
