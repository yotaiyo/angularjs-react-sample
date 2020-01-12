"use strict";

var HelloComponent = React.createClass({
    displayName: "HelloComponent",
    render: function render() {
        return React.createElement(
            "span",
            null,
            "Hello " + this.props.firstName + " " + this.props.lastName
        );
    }
});