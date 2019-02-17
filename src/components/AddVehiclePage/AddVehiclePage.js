import React, { Component } from 'react';
import { connect } from 'react-redux';



class AddVehiclePage extends Component {

    addNewVehicle = () =>{
        const newVehicle = {
            make: this.state.make,
            year: this.state.year,
            model: this.state.model,
            license: this.state.license,
            vin: this.state.vin,
            owner: this.state.owner
        }
        const action = { type: 'ADD_NEW_VEHICLE', payload: newVehicle};
        console.log('in add vehicle page', newVehicle);
        
        this.props.dispatch(action);
        this.props.history.push('newIncident')

    }

    state = {
        make: '',
        year: '',
        model: '',
        license: '',
        vin: '',
        owner: ''

    };

    handleMakeChange = event => {
        // console.log('make', this.state);
        
        this.setState({ 
            make: event.target.value
         });
    };

    handleYearChange = event => {
        // console.log('year', this.state);

        this.setState({
            year: event.target.value
        });
    };

    handleModelChange = event => {
        // console.log('model', this.state);

        this.setState({
            model: event.target.value
        });
    };

    handleLicenseChange = event => {
        // console.log('license', this.state);

        this.setState({
            license: event.target.value
        });
    };

    handleVinChange = event => {
        // console.log('vin', this.state);

        this.setState({
            vin: event.target.value
        });
    };
    handleOwnerChange = event => {
        // console.log('owner', this.state);

        this.setState({
            owner: event.target.value
        });
    };
    render() {
        
        return (

            <form action="/newIncident">
                <input type="text" id="owner" value={this.state.value} onChange={this.handleOwnerChange} placeholder="Owner"/>
                <br />
                <input type="text" id="driver" value={this.state.value} onChange={this.handleDriveChange} placeholder="Driver" />
                <br />
                <input type="text" id="year" value={this.state.value} onChange={this.handleYearChange} placeholder="Year" />
                <br />

                <input type="text" id="make" value={this.state.value} onChange={this.handleMakeChange} placeholder="Make" />
                <br />
                <input type="text" id="model" value={this.state.value} onChange={this.handleModelChange} placeholder="Model" />
                <br />
                <input type="text" id="license" value={this.state.value} onChange={this.handleLicenseChange} placeholder="License Plate" />
                <br />
                <input type="text" id="Insurance Company" value={this.state.value} onChange={this.handleInsurancehange} placeholder="Insurance Company" />
                <br />
                <input type="text" id="Policy Number" value={this.state.value} onChange={this.handlePolicyChange} placeholder="Policy Number" />
                {/* <br />
                <input type="text" id="notes" value={this.state.value} onChange={this.handleNotesChange} placeholder="Notes" /> */}
                <br />
                <textarea rows="4" cols="40" id="notes" value={this.state.value} onChange={this.handleNotesChange} placeholder="Notes"></textarea>
                
                <br />

                <button class="button-complete" onClick={this.addNewVehicle} Link to="/newIncident">
                    Submit
                     </button>


            </form> 


         
        );
    }
}



const mapStateToProps = state => ({
  
});

export default connect(mapStateToProps)(AddVehiclePage);