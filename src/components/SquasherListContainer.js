import React from 'react';
import SquasherList from './SquasherList';
import {getSquashers} from '../actions/squasher';
import {connect} from 'react-redux';

class SquasherListContainer extends React.Component {

    componentDidMount() {
        console.log("IM RUNNING 4")
        this.props.getSquashers()
    }

    render() {
        return (
            <div>
                <SquasherList squashers={this.props.squashers} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        squashers: state.squashers
    }
}

export default connect(mapStateToProps, {getSquashers})(SquasherListContainer)