import React, { Component } from 'react';
import { connect } from 'react-redux';

class Cards extends Component {

    render() {
        // const { classes } = props;
        return (
<div>
                <div class="card-deck">
                    <div class="card btn-spl">
                        <img class="card-img-top" src="https://img.webnots.com/2017/04/Bootstrap-Card-Image.png" alt="Card image cap"/>
                            <div class="card-block">
                                <h4 class="card-title">Incident: 1</h4>
                                <p class="card-text">Here is a longer description of the card and the height will be auto aligned with flex box.</p>
                                <button class="btn btn-primary btn-spl" href="#" role="button">Buy Now</button>
                            </div>
                            <div class="card-footer">
                                <small class="text-muted">Here is a footer</small>
                            </div>
</div>
                        <div class="card btn-spl">
                            <img class="card-img-top" src="https://img.webnots.com/2017/04/Bootstrap-Card-Image.png" alt="Card image cap"/>
                                <div class="card-block">
                                    <h4 class="card-title">Incident 2</h4>
                                    <p class="card-text">Date: Location:</p>
                                    <button class="btn btn-danger btn-spl" href="#" role="button">Open</button>
                                </div>
                                <div class="card-footer">
                                    <small class="text-muted">Here is a footer</small>
                                </div>
</div>
                            <div class="card btn-spl">
                                <img class="card-img-top" src="https://img.webnots.com/2017/04/Bootstrap-Card-Image.png" alt="Card image cap"/>
                                    <div class="card-block">
                                        <h4 class="card-title">Incident 3</h4>
                                        <p class="card-text">Here is a longer description of the card and the height will be auto aligned with flex box.</p>
                                        <button class="btn btn-secondary btn-spl" href="#" role="button">Buy Now</button>
                                    </div>
                                    <div class="card-footer">
                                        <small class="text-muted">Here is a footer</small>
                                    </div>
</div>
                            </div>
            </div>
                          
                   );
    }
}

const mapStateToProps = (reduxStore) => ({
    reduxStore
});

export default connect(mapStateToProps)(Cards);