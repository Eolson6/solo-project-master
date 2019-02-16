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
                        {/* <h1>{fact.location}</h1> */}
                        <p>
                            <a class="btn btn-primary" data-toggle="collapse" href="#multipleCollapse1" aria-expanded="false" aria-controls="multipleCollapse1">Basic Facts</a>
                            <button class="btn btn-secondary" type="button" data-toggle="collapse" data-target="#multipleCollapse2" aria-expanded="false" aria-controls="multipleCollapse2">Toggle Second Element</button>
                            <button class="btn btn-success" type="button" data-toggle="collapse" data-target=".multi-collapse" aria-expanded="false" aria-controls="multipleCollapse1 multipleCollapse2">Toggle Both Elements</button>
                        </p>
                        <div class="row">
                            <div class="col">
                                <div class="collapse multi-collapse" id="multipleCollapse2">
                                    <div class="card card-body">
                                        {fact.location}
                                        <button class="button-add" onClick={this.goToAddNewImage} Link to="/image">
                                            Add Image
                </button>

                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="collapse multi-collapse" id="multipleCollapse2">
                                    <div class="card card-body">
                                        Here is the content for block which will be shown when the second button is clicked. This uses button with data-target attribute for collapsing.

      </div>
                                </div>

                            </div>
                        </div>


                      
                        <button class="button-delete" onClick={this.deleteFacts} value={fact.id}>
                            Delete Facts
                                        </button>
                    </tr>
                    )
                })}
                <button class="button-add" onClick={this.goToAddNewFact} Link to="/facts">
                    Add Facts
      </button>
            </div>

        );
    }
}

const mapStateToProps = (reduxStore) => ({
    reduxStore
});
export default connect(mapStateToProps)(DisplayFacts);