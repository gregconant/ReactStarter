var React = require('react');

module.exports = React.createClass({
    render: function () {
        return <li>
            {this.props.item.text} - {this.props.item.key} - {this.props.item.done}
        </li>
    }
});
