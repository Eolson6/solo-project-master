import React, { Component } from 'react';
import { connect } from 'react-redux';


class AddFactsPage extends Component {

    addNewFacts = () => {
        // const newFacts = {
        //     location: this.state.location,
        //     type: this.state.type,
        //     time: this.state.time,
        //     date: this.state.date,
        //     notes: this.state.notes
            
        // }
        const action = { type: 'ADD_NEW_FACT', payload: this.state };
        this.props.dispatch(action);
        this.props.history.push('newIncident')
        // const action = { type: 'ADD_NEW_FACT', payload: newFacts };
        // console.log('in add facts page', newFacts);

        // this.props.dispatch(action);
        // this.props.history.push('newFacts')

    }


    state = {
        location: '',
        type: '',
        time: '',
        date: '',
        notes: '',

    };

    handleLocationChange = event => {
        // console.log('make', this.state);

        this.setState({
            location: event.target.value
        });
    };

    handleTypeChange = event => {
        // console.log('year', this.state);

        this.setState({
            type: event.target.value
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
 
    render() {
        
        return (

            <form action="/newIncident">

                <br />
                <input type="text" id="location" value={this.state.value} onChange={this.handleLocationChange} placeholder="Location" />
                <br />

                <input type="text" id="type" value={this.state.value} onChange={this.handleTypeChange} placeholder="Type" />
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

export default connect(mapStateToProps)(AddFactsPage);