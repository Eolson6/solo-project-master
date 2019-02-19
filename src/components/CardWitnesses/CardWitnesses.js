import React, { Component } from 'react';
import { connect } from 'react-redux';
import IncidentInput from '../IncidentInput/IncidentInput';
import AddImagePage from '../AddImagePage/AddImagePage';
import AddVehiclePage from '../AddVehiclePage/AddVehiclePage';
import AddWitnessPage from '../AddWitnessPage/AddWitnessPage';


class CardWitnesses extends Component {

    // display = () => {
    //     const action = { type: 'GET_WITNESSES' };
    //     this.props.dispatch(action);
    //     console.log('action', action);
    // }
    display = () => {
        this.setState({

            display: ""
        })
    }

    goToAddNewWitness = () => {
        this.props.history.push('/witness');
    }

    goToAddNewWitness = () => {
        this.props.history.push('/witness');
    }
    //     // let displayAccidentGuide = '';
    //     console.log('handle change', this.state);

    //     if (this.state.display = "image") {
    //         then {// displayAccidentGuide =
    //             <AddImagePage />
    //     } else if
    //         (this.state.display = "incident") {
    //         // displayAccidentGuide =
    //             <IncidentInput />
    //     } else if
    //         (this.state.state = "vehicle") {
    //         // displayAccidentGuide =
    //             <AddVehiclePage />
    //     } else {
    //         // displayAccidentGuide  =
    //             <AddWitnessPage />
    //     }

    // }


    render() {
        // const { classes } = props;
        return (

            <div class="card-deck">
                <div class="card btn-spl">
                    <img class="card-img-top" src="https://img.webnots.com/2017/04/Bootstrap-Card-Image.png" alt="Card image cap" />
                    <div class="card-block">
                        <h4 class="card-title">Witnesses</h4>
                        <p class="card-text">Record witnesses and their contact information here.</p>
                        <button class="btn btn-primary btn-spl" href="#" onClick={this.goToAddNewWitness} role="button">Add Witness Information</button>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">Here is a footer</small>
                    </div>
                </div>
            </div>

        );
    }
}

const mapStateToProps = (reduxStore) => ({
    reduxStore
});

export default connect(mapStateToProps)(CardWitnesses);