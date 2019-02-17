import React, { Component } from 'react';
import { connect } from 'react-redux';
import DisplayWitnesses from '../DisplayWitnesses/DisplayWitnesses';
import DisplayImages from '../DisplayImages/DisplayImages';
import DisplayVehicless from '../DisplayVehicles/DisplayVehicles';
import DisplayFacts from '../DisplayFacts/DisplayFacts'
import { EventEmitter } from 'events';



class NewIncidentPage extends Component {
   
constructor() {
    super();
        this.state = {
            scenario: ''
        }
    }

  



    componentDidMount() {
        this.getWitnesses();


    }

    getWitnesses = () => {
        const action = { type: 'GET_WITNESSES' };
        this.props.dispatch(action);
        console.log('action', action);
    }

    getincidentItems = () => {
        const action = { type: 'GET_INCIDENT_ITEMS' };
        this.props.dispatch(action);
    }

    goToAddNewVehicle = () => {
        this.props.history.push('vehicle')
    }
    goToAddNewImage = () => {
        this.props.history.push('image');
    }

    goToAddNewFact = () => {
        this.props.history.push('/facts');
    }

    goToAddNewWitness = () => {
        this.props.history.push('/witness');
    }

    //     handleChange = (event) =>{
    //         this.setState({
    //             scenario: EventEmitter.target.value,
    //         })
    //     }
    // }

    render() {
       
        return (
            <div>


                <p>
                    <a class="button-collapse" data-toggle="collapse" href="#multipleCollapse1" aria-expanded="false" aria-controls="multipleCollapse1">Basic Facts </a>
                    <button class="button-collapse" type="button" data-toggle="collapse" data-target="#multipleCollapse2" aria-expanded="false" aria-controls="multipleCollapse2">Vehicles</button>
                    
                    <button class="button-collapse" type="button" data-toggle="collapse" data-target="#multipleCollapse3" aria-expanded="false" aria-controls="multipleCollapse3">Witnesses</button>
                    
                    <button class="button-collapse" type="button" data-toggle="collapse" data-target="#multipleCollapse4" aria-expanded="false" aria-controls="multipleCollapse4">Images</button>
                    
                    <button class="button-collapse" type="button" data-toggle="collapse" data-target=".multi-collapse" aria-expanded="false" aria-controls="multipleCollapse1 multipleCollapse2 multipleCollapse3 multipleCollapse4">Revierw Information Added </button>
                </p>
                <div class="row">
                    <div class="col">
                        <div class="collapse multi-collapse" id="multipleCollapse1">
                            <div class="card card-body">
                                <DisplayFacts history={this.props.history} />
                                <button class="button-add" onClick={this.goToAddNewFact} Link to="/facts">
                                    Add Facts
                                    
      </button>




                            </div>
                        </div>
                    </div>
                    <br></br>
                    <div class="col">
                        <div class="collapse multi-collapse" id="multipleCollapse2">
                            <div class="card card-body">
                                {/* second button is clicked. This uses button with  */}
                                <DisplayVehicless history={this.props.history} />
 
 <button class="button-add" onClick={this.goToAddNewVehicle} >
                                    Add Vehicle
      </button>
                            </div>
                        </div>

                    </div>
                    <div class="col">
                        <div class="collapse multi-collapse" id="multipleCollapse3">
                            <div class="card card-body">
                                {/* 3ere is the content for block which will be shown when the second button is clicked.  */}
                                 
                                <button class="button-add" onClick={this.goToAddNewWitness} Link to="/witness">
                                    Add Witness
      </button>
                            </div>
                        </div>

                    </div>
                    <div class="col">
                        <div class="collapse multi-collapse" id="multipleCollapse4">
                            <div class="card card-body">
                             
                                    <button class="button-add" onClick={this.goToAddNewImage} Link to="/image">
                                    Add Image
                </button>

                            </div>
                        </div>

                    </div>

                </div>

                <DisplayImages history={this.props.history} />
                <br></br> 
                <DisplayVehicless history={this.props.history}/>
                <br></br> 
                <DisplayWitnesses history={this.props.history}/>
                <br></br>
                <DisplayFacts history={this.props.history}/>
                <br></br>
                <button class="button-complete" onClick={this.goToAddNewFact} Link to="/facts">
                    Complete
      </button>


                <div class="dropdown">
                <select onChange={this.handleChange} value={this.state.scenario}>
                    <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Scenarios
    <span class="caret"></span></button>
                    <ul class="dropdown-menu">
                        <li><a href="#">Parking Lot</a></li>
                        <li><a href="#">Hit and Run</a></li>
                        <li><a href="#">Intersection</a></li>
                        <li><a href="#">Hit Pedistrian/Bicyclist</a></li>
                        <li><a href="#">Hit Animal/Falling Object/Weather Related</a></li>
                        <li><a href="#">Injuries</a></li>
                   </ul>
                    </select>
                </div>
            </div>
            

        );
    }
}

const mapStateToProps = state => ({

});

export default connect(mapStateToProps)(NewIncidentPage);