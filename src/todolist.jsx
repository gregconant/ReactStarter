var React = require('react');
var ListItem = require('./listitem');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      text: ''
    }
  },
  render: function() {
    return <ListItem {...this.props.itemsStore[0]} />

  }
})
