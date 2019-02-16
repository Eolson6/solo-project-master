import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';


class DisplayWitnesses extends Component {

    componentDidMount() {
        this.getWitnesses();
    }

    getWitnesses = () => {
        const action = { type: 'GET_WITNESSES' };
        this.props.dispatch(action);
        console.log('action', action);
        

    }
    deleteWitness = (event) => {
        console.log('in delete image', event.target.value);
        this.setState({
            id: event.target.value
        });
        const action = { type: 'DELETE_WITNESS', payload: event.target.value }
        this.props.dispatch(action)
        window.location.reload()
    };

    goToAddNewWitness = () => {
        this.props.history.push('/witness');
    }


    render() {
        // const { classes } = props;
        return (
            <div>
                {this.props.reduxStore.witnessReducer.witnessReducer.map((witness,i)=>{
                            return (<tr>
                                <h1>{witness.name}</h1>
                           
                                <button class ="button-delete" onClick={this.deleteWitness} value={witness.id} >
                                    Delete Witness
                                        </button>
                            </tr>
                            )
                                })}
        
              
              
      
                <button class="button-add" onClick={this.goToAddNewWitness} Link to="/witness">
                    Add Witness
      </button>
            </div>

        );
    }
}

const mapStateToProps = (reduxStore) => ({
    reduxStore
});

export default connect(mapStateToProps)(DisplayWitnesses);