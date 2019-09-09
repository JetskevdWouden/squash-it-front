import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import Homepage from './Homepage';
import SquasherListContainer from './SquasherListContainer';

function Routes(props) {
    return (
        <div>
            <Route path='/home' exact component={Homepage} />
            <Route path='/squashers' exact component={SquasherListContainer} />
        </div>
    )
}

const mapStateToProps = state => ({

})

export default withRouter(connect(mapStateToProps)(Routes))