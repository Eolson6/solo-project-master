import React, { Component } from 'react';
import { connect } from 'react-redux';


class IncidentInput extends Component {

    createIncident = () => {
        // const newFacts = {
        //     location: this.state.location,
        //     type: this.state.type,
        //     time: this.state.time,
        //     date: this.state.date,
        //     notes: this.state.notes
            
        // }
        const action = { type: 'ADD_NEW_INCIDENT', payload: this.state };
        this.props.dispatch(action);
        this.props.history.push('newIncident')
        // const action = { type: 'ADD_NEW_FACT', payload: newFacts };
        // console.log('in add incident page', newFacts);

        // this.props.dispatch(action);
        // this.props.history.push('newFacts')
}


    state = {
        street: '',
        city:'',
        state:'',
        location_type: '',
        time: '',
        date: '',
        notes: '',
        incident_type:'',

    };

  

    handleStreetChange = event => {
        // console.log('make', this.state);

        this.setState({
            street: event.target.value
        });
    };

    handleCityChange = event => {
        // console.log('make', this.state);

        this.setState({
            city: event.target.value
        });
    };

    handleTypeChange = event => {
        // console.log('make', this.state);

        this.setState({
            location_type: event.target.value
        });
    };

    handleStateChange = event => {
        // console.log('year', this.state);

        this.setState({
            State: event.target.value
        });
    };

    handleTimeChange = event => {
        // console.log('model', this.state);

        this.setState({
            time: event.target.value
        });
    };

    handleDateChange = event => {
        // console.log('license', this.state);

        this.setState({
            date: event.target.value
        });
    };

    handleNotesChange = event => {
        // console.log('vin', this.state);

        this.setState({
            notes: event.target.value
        });
    };

    handleIncidentChange = event => {
        // console.log('vin', this.state);

        this.setState({
            incident_type: event.target.value
        });
    };
 
    render() {
        
        return (

            <form action="/newIncident">
                <input type="text" id="incident_type" value={this.state.value} onChange={this.handleIncidentChange} placeholder="Incident Type" />
                <br />
                <input type="text" id="location_type" value={this.state.value} onChange={this.handleTypeChange} placeholder="Location Type" />
                <br />
                <input type="text" id="street" value={this.state.value} onChange={this.handleStreetChange} placeholder="Street" />
                <br />
                <input type="text" id="city" value={this.state.value} onChange={this.handleCityChange} placeholder="City" />
                <br />

                <input type="text" id="state" value={this.state.value} onChange={this.handleStateChange} placeholder="State" />
                <br />
                <input type="text" id="time" value={this.state.value} onChange={this.handleTimeChange} placeholder="Time" />
                <br />

                <input type="text" id="Date" value={this.state.value} onChange={this.handleDateChange} placeholder="Date" />
                <br />
                <input type="text" id="Notes" value={this.state.value} onChange={this.handleNotesChange} placeholder="Notes" />
                <br />


                <button class="button-complete" onClick={this.addNewFacts} Link to="/newIncident">
                    Submit
                     </button>


            </form> 



        );
    }
}

const mapStateToProps = state => ({

});

export default connect(mapStateToProps)(IncidentInput);