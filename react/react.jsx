var HelloComponent = React.createClass({
    render() {
        return (
    <span>{`Hello ${this.props.firstName} ${this.props.lastName}`}</span>
        )
    }
});