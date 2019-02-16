import React, { Component } from 'react';
import { connect } from 'react-redux';
import DisplayWitnesses from '../DisplayWitnesses/DisplayWitnesses';
import DisplayImages from '../DisplayImages/DisplayImages';
import DisplayVehicless from '../DisplayVehicles/DisplayVehicles';
import DisplayFacts from '../DisplayFacts/DisplayFacts'



class NewIncidentPage extends Component {
    goToAddNewImage = () => {
        this.props.history.push('image');
    }



componentDidMount() {
        this.getWitnesses();
    

    }

    getWitnesses = () => {
        const action = { type: 'GET_WITNESSES' };
        this.props.dispatch(action);
        console.log('action', action);
    }

getincidentItems=()=>{
    const action ={type: 'GET_INCIDENT_ITEMS'};
    this.props.dispatch(action);
}

    addNewVehicle = (event) => {
        this.props.history.push('vehicle');
    }

    render() {
        // const { classes } = props;
        return (
            <div>

                <p>
                    <a class="btn btn-primary" data-toggle="collapse" href="#multipleCollapse1" aria-expanded="false" aria-controls="multipleCollapse1">Basic Facts </a>
                    <button class="btn btn-secondary" type="button" data-toggle="collapse" data-target="#multipleCollapse2" aria-expanded="false" aria-controls="multipleCollapse2">Vehicles</button>
                    <button class="btn btn-secondary" type="button" data-toggle="collapse" data-target="#multipleCollapse3" aria-expanded="false" aria-controls="multipleCollapse3">Witnesses</button>
                    <button class="btn btn-secondary" type="button" data-toggle="collapse" data-target="#multipleCollapse4" aria-expanded="false" aria-controls="multipleCollapse4">Images</button>
                    <button class="btn btn-success" type="button" data-toggle="collapse" data-target=".multi-collapse" aria-expanded="false" aria-controls="multipleCollapse1 multipleCollapse2 multipleCollapse3 multipleCollapse4">Revierw Information Added </button>
                </p>
                <div class="row">
                    <div class="col">
                        <div class="collapse multi-collapse" id="multipleCollapse1">
                            <div class="card card-body">

                                <button class="button-add" onClick={this.goToAddNewImage} Link to="/image">
                                    Add Image
                </button>

                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="collapse multi-collapse" id="multipleCollapse2">
                            <div class="card card-body">
                                 second button is clicked. This uses button with data-target attribute for collapsing.

      </div>
                        </div>

                    </div>
                    <div class="col">
                        <div class="collapse multi-collapse" id="multipleCollapse3">
                            <div class="card card-body">
                                3ere is the content for block which will be shown when the second button is clicked. This uses button with data-target attribute for collapsing.

      </div>
                        </div>

                    </div>
                    <div class="col">
                        <div class="collapse multi-collapse" id="multipleCollapse4">
                            <div class="card card-body">
                                clicked. This uses button with data-target attribute for collapsing.

      </div>
                        </div>

                    </div>
                    
                </div>

                {/* <DisplayImages history={this.props.history} />
                <br></br>
                <DisplayVehicless history={this.props.history}/>
                <br></br>
                <DisplayWitnesses history={this.props.history}/>
                <br></br>
                <DisplayFacts history={this.props.history}/>
                <br></br> */}
                <button class="button-complete" onClick={this.goToAddNewFact} Link to="/facts">
                    Complete
      </button>
            </div>

        );
    }
}

const mapStateToProps = state => ({

});

export default connect(mapStateToProps)(NewIncidentPage);