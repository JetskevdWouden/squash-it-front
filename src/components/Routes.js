import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

function Routes(props) {
    return (
        <div>
            {/* <Route path='/' exact comnponent={} /> */}
        </div>
    )
}

const mapStateToProps = state => ({

})

export default withRouter(connect(mapStateToProps)(Routes))