import React, { Component } from 'react';
import { connect } from 'react-redux';

class ReviewPage extends Component {



render() {
    
    return (
        
        <div class="container">
            <h2>Collapsible List Group</h2>
            <p>Click on the collapsible panel to open and close it.</p>
            <div class="panel-group">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4 class="panel-title">
                            <a data-toggle="collapse" href="#collapse1">Collapsible list group</a>
                        </h4>
                    </div>
                    <div id="collapse1" class="panel-collapse collapse">
                        <ul class="list-group">
                            <li class="list-group-item">One</li>
                            <li class="list-group-item">Two</li>
                            <li class="list-group-item">Three</li>
                        </ul>
                        <div class="panel-footer">Footer</div>
                    </div>
                </div>
            </div>
            <div class="container">
                <h2>Collapsible List Group</h2>
                <p>Click on the collapsible panel to open and close it.</p>
                <div class="panel-group">
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <h4 class="panel-title">
                                <a data-toggle="collapse" href="#collapse1">Collapsible list group</a>
                            </h4>
                        </div>
                        <div id="collapse1" class="panel-collapse collapse">
                            <ul class="list-group">
                                <li class="list-group-item">One</li>
                                <li class="list-group-item">Two</li>
                                <li class="list-group-item">Three</li>
                            </ul>
                            <div class="panel-footer">Footer</div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        


    );
}
}

const mapStateToProps = state => ({

});

export default connect(mapStateToProps)(ReviewPage);