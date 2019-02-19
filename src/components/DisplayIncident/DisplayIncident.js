import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class DisplayIncident extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
        }
    }


    componentDidMount() {
        this.getIncident();

    }

    getIncident = () => {
        const action = { type: 'GET_INCIDENT' };
        this.props.dispatch(action);
        console.log('action', action);


    }

    deleteIncident = (event) => {
        console.log('in delete', this.props.incident);
        this.setState({
            id: event.target.value

        });
        const action = { type: 'DELETE_INCIDENT', payload: event.target.value }
        this.props.dispatch(action)   
    };

    goToAddNewFact = () => {
        this.props.history.push('/incident');
    }




    render() {
        // const { classes } = props;
        return (
            <div>
                <table>
                <thead>
                    <tr>
                        <th>Incident Type</th>
                        <th>Location Type</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>

                
                {this.props.reduxStore.incidentReducer.incidentReducer.map((incident, i) => {
                    return (<tr key={i}>
                            <td>Incident Type: {incident.incident_type}</td>
                            <td>Location Type: {incident.location_type}</td>
                            
                            <td>{incident.street}</td>
                            <td>{incident.city},{incident.state}</td>
                            <td>Notes:{incident.notes}</td>
                   
                        <td><button className="button-delete" onClick={this.deleteIncident} value={incident.id}>
                            Delete incident
                                        </button></td>
                        <td><button className="button-delete" onClick={this.openIncident} value={incident.id}>
                            Open incident
                                        </button></td>
                    </tr>
                    )
                })}
                    </tbody>
                </table>
                {/* <button class="button-add" onClick={this.goToAddNewFact} Link to="/incident">
                    Add incident
      </button> */}
            </div>

        );
    }
}

const mapStateToProps = (reduxStore) => ({
    reduxStore
});
export default connect(mapStateToProps)(DisplayIncident);