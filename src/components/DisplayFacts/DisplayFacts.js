import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class DisplayFacts extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
        }
    }


    componentDidMount() {
        this.getFacts();

    }

    getFacts = () => {
        const action = { type: 'GET_FACTS' };
        this.props.dispatch(action);
        console.log('action', action);


    }

    deleteFacts = (event) => {
        console.log('in delete', this.props.facts);
        this.setState({
            id: event.target.value

        });
        const action = { type: 'DELETE_FACTS', payload: event.target.value }
        this.props.dispatch(action)   
    };

    goToAddNewFact = () => {
        this.props.history.push('/facts');
    }




    render() {
        // const { classes } = props;
        return (
            <div>
                {this.props.reduxStore.factReducer.factReducer.map((fact, i) => {
                    return (<tr key={i}>
                    <h3>Basic Facts</h3>
                        <h4>{fact.location}</h4>
                    

                      
                        <button class="button-delete" onClick={this.deleteFacts} value={fact.id}>
                            Delete Facts
                                        </button>
                    </tr>
                    )
                })}
                {/* <button class="button-add" onClick={this.goToAddNewFact} Link to="/facts">
                    Add Facts
      </button> */}
            </div>

        );
    }
}

const mapStateToProps = (reduxStore) => ({
    reduxStore
});
export default connect(mapStateToProps)(DisplayFacts);