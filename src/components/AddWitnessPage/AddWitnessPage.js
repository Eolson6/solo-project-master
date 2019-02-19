import React, { Component } from 'react';
import { connect } from 'react-redux';
import NewIncidentPage from '../NewIncidentPage/NewIncidentPage';

class AddWitnessPage extends Component {

    componentDidMount() {
        this.getCurrentId();
    }

    getCurrentId = () => {
        const action = { type: 'GET_CURRENT_ID_SAGA' };
        this.props.dispatch(action);
        console.log('get id', action);


    }

    addNewWitness = (event) => {
        
        const action = { type: 'ADD_NEW_WITNESS', payload: this.state };
        this.props.dispatch(action);
        this.props.history.push('newIncident')
    }


    state = {
        name: '',
        phone: '',
        street: '',
        unit: '',
        city: '',
        state: '',
        zip: ''

    };

    handleNameChange = event => {
        console.log('name', this.state);

        this.setState({
            name: event.target.value
        });
    };

    handlePhoneChange = event => {
        // console.log('phone', this.state);

        this.setState({
            phone: event.target.value
        });
    };

    handleStreetChange = event => {
        console.log('street', this.state);

        this.setState({
            street: event.target.value
        });
    };

    handleUnitChange = event => {
        // console.log('unit', this.state);

        this.setState({
            unit: event.target.value
        });
    };

    handleCityChange = event => {
        // console.log('city', this.state);

        this.setState({
            city: event.target.value
        });
    };
    handleStateChange = event => {
        // console.log('state', this.state);

        this.setState({
            state: event.target.value
        });
    };

    handleZipChange = event => {
        // console.log('zip', this.state);

        this.setState({
            zip: event.target.value
        });
    };


    render() {
        return (
                
            <form action="/newIncident">
                <p>Gather contact information from any avaiable witnesses and enter it here.</p>
                <br/>
                <input type="text" id="name" value={this.state.value} onChange={this.handleNameChange} placeholder="name"/>
                        <br/>
                           
                                <input type="text" id="phone" value={this.state.value} onChange={this.handlePhoneChange} placeholder="Phone Number"/>
                                    <br/>
                <input type="text" id="street" value={this.state.value} onChange={this.handleStreetChange} placeholder="Street" />
                <br />

                <input type="text" id="unit" value={this.state.value} onChange={this.handleUnitChange} placeholder="Unit" />
                <br />
                <input type="text" id="city" value={this.state.value} onChange={this.handleCityChange} placeholder="City" />
                <br />

                <input type="text" id="state" value={this.state.value} onChange={this.handleStateChange} placeholder="State" />
                <br />
                <input type="text" id="zip" value={this.state.value} onChange={this.handleZipChange} placeholder="Zip Code" />
                <br />

        
                   <button class="button-complete" onClick={this.addNewWitness} Link to="/newIncident">
                         Submit
                     </button>
                
                {JSON.stringify(this.props.reduxState)}
            </form> 

      

        );
       
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
});

export default connect(mapReduxStateToProps)(AddWitnessPage );