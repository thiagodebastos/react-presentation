import React from 'react';
import Aside from './aside';
import store from 'store';
import { connect } from 'react-redux';

const AsideContainer = React.createClass({
    render: function() {
        return (
            <Aside hasUsers={this.props.hasUsers} />
        )
    }
});

const storeSelector = function(store) {
    console.log(store);
    return {
        hasUsers: store.userReducer.users.length ? true : false
    }
}

export default connect(storeSelector)(AsideContainer);