import React from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import DisplayImages from '../DisplayImages/DisplayImages';
import Jumbotron from '../Jumbotron/Jumbotron'
import DisplayIncident from '../DisplayIncident/DisplayIncident'






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
    {/* {JSON.stringify(this.state)} */}
    <h1>Previously Recorded incident</h1>
    <DisplayIncident/>
  
{/* <br></br>
<br></br>
<h1>Record New Incident</h1>
    <div class="dropdown">
      <button class="btn btn-info dropdown-toggle" type="button" id="dropdownmenu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Dropdown Button
</button>
      <div class="dropdown-menu" aria-labelledby="dropdownmenu">
        <h6 class="dropdown-header">Accident Type</h6>
        <div class="dropdown-divider"></div>
        <a class="dropdown-item" href="http://localhost:3000/vehicles#/vehicle">Parking Lot</a>
        <div class="dropdown-divider"></div>
        <a class="dropdown-item" href="http://localhost:3000/vehicles#/witness">Intersection</a>
        <div class="dropdown-divider"></div>
        <a class="dropdown-item" href="#">Hit Pedestrian or Bicyclist</a>
        <div class="dropdown-divider"></div>
        <a class="dropdown-item" href="#">Hit Animal, Weather, etc</a>
      </div>
    </div> */}
   
    <a class="btn btn-primary btn-lg btn-spl" href={"http://localhost:3000/NewIncidentPage#/newIncident"} role="button">Create New Incident</a>
    
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
