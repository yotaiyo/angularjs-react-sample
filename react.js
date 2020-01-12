var HelloComponent = React.createClass({
    render: function () {
        return React.DOM.span(null, `Hello ${this.props.firstName} ${this.props.lastName}`);
    }
});