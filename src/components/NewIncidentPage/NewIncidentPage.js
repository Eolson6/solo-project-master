import React, { Component } from 'react';
import { connect } from 'react-redux';
import DisplayWitnesses from '../DisplayWitnesses/DisplayWitnesses';
import DisplayImages from '../DisplayImages/DisplayImages';
import DisplayVehicless from '../DisplayVehicles/DisplayVehicles';
import DisplayIncident from '../DisplayIncident/DisplayIncident'
import { EventEmitter } from 'events';
import { timingSafeEqual } from 'crypto';
import CardImages from '../CardImages/CardImages';
import CardVehicle from '../CardVehicle/CardVehicle';
import CardPassengers from '../CardPassengers/CardPassengers';
import IncidentCard from '../IncidentCard/IncidentCard';
import CardWitnesses from '../CardWitnesses/CardWitnesses';
import IncidentInput from '../IncidentInput/IncidentInput';
import AddImagePage from '../AddImagePage/AddImagePage';
import AddVehiclePage from '../AddVehiclePage/AddVehiclePage';
import AddWitnessPage from '../AddWitnessPage/AddWitnessPage';



class NewIncidentPage extends Component {

    constructor(props) {
        super(props)
    //     this.display=this.display.bind(this)
    // }

    // display(){
        
        
        this.state = ({
            card: ''
        })
        console.log('new incident', this.state);
    }


// componentDidMount() {
//     this.getWitnesses();


// }

// getWitnesses = () => {
//     const action = { type: 'GET_WITNESSES' };
//     this.props.dispatch(action);
//     console.log('action', action);
// }

// getincidentItems = () => {
//     const action = { type: 'GET_INCIDENT_ITEMS' };
//     this.props.dispatch(action);
// }


// goToAddNewImage = () => {
//     this.props.history.push('image');
// }

// goToAddNewFact = () => {
//     this.props.history.push('/incident');
// }
// goToAddNewWitness = () => {
//     this.props.history.push('/witness');
// }

// handleChange = (event) => {
//     console.log(this.state);

//     this.setState({

//         accidentType: event.target.value,
//     })

// }

display = (event) =>{
    console.log('new incident', this.state);
    
    this.setState({
        card: ''
    })
}
    
    


render() {

    // let displayAccidentGuide='';
  
    //     let card = this.state.display;
    //     let displayAccidentGuide = '';
    //     console.log('handle change', card);
    //     console.log(displayAccidentGuide);


    // if (this.state.display = "image") {
    //     displayAccidentGuide =
    //         <AddImagePage />
    // } else if
    //     (this.state.display = "incident") {
    //     displayAccidentGuide =
    //         <IncidentInput />
    // } else if
    //     (this.state.state = "vehicle") {
    //     displayAccidentGuide =
    //         <AddVehiclePage />
    // } else {
    //     displayAccidentGuide =
    //         <AddWitnessPage />
    // }

   
    // <div>
/* 
        if (this.state.display === "image") {
                return {
            <div>
                <AddImagePage />
            </div>
        }
        } else if
        (this.state.display = "incident") {
            displayAccidentGuide =
            <IncidentInput />
        } else if
        (this.state.state = "vehicle") {
            displayAccidentGuide =
            <AddVehiclePage />
        } else {
            displayAccidentGuide =
            <AddWitnessPage />
        } */
    
    return (
        <div>
            {/* <CardImages display={this.display} history={this.props.history} />
            <CardPassengers display={this.display} history={this.props.history}   />
            <CardVehicle display={this.display} history={this.props.history}  />
            <CardWitnesses display={this.display} history={this.props.history}   /> */}
            <IncidentCard display={this.display} history={this.props.history} />
            

            {/* <CardImages/>
            <CardPassengers />
            <CardVehicle />
            <CardWitnesses  />
            <IncidentCard /> */}

        {/* {(() => {
        switch(this.state) {
            case "image":
            return <AddImagePage/>;
            case "incident":
            return <IncidentInput/>;
            case "vehicle":
            return <AddVehiclePage/>;
            case "witnesses":
            return <AddWitnessPage/>
            default: 
             return <AddVehiclePage/>
            }
        })()}  */}






                       {/* </div>
                   </div>
                </div>
               <br></br> */}



            

                  {/* <IncidentInput/>
                <AddImagePage/>
                <AddVehiclePage/>
                <AddWitnessPage/>   */}

                {/* <DisplayImages history={this.props.history} />
                <br></br>
                <DisplayVehicless history={this.props.history} />
                <br></br>
                <DisplayWitnesses history={this.props.history} />
                <br></br>
                <DisplayIncident history={this.props.history} />
                <br></br>
                <button class="button-complete" onClick={this.goToAddNewFact} Link to="/incident">
                    Complete
      </button> */}




            
        


    </div>
   

                );
            }
        }
        
const mapStateToProps = (reduxStore) => ({
                    reduxStore
                });
                
export default connect(mapStateToProps)(NewIncidentPage);