import React from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';



const Jumbotron = (props) => (
    <div class="jumbotron">
        <h1 class="display-3">Ensure First</h1>
        <p class="lead">Wecome {props.user.username}</p>
        <p>Your ID is: {props.user.id}</p>
        <hr class="my-4"/>
            <p>Add your subtitle here to explain more about this page in detail.</p>
       
        <LogOutButton className="log-in" />
</div>

);

const mapStateToProps = state => ({
    user: state.user,
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(Jumbotron);
