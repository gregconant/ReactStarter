var React = require('react');
module.exports = React.createClass({
  getInitialState: function() {
    return {
      text: ''
    }
  },
  render: function() {
    return <div className="input-group">
      <input
        value={this.state.text}
        onChange={this.handleInputChange}
        type="text"
        className="form-control" />
      <span className="input-group-btn">
        <button
          onClick={this.handleClick}
          className="btn btn-default"
          type="button">
          Add
        </button>
      </span>
    </div>
  },
  handleClick: function() {
    // add this as new object to
    // reactfire database.
    // Ignore that it looks array-ish.
    this.props.itemsStore.push({
      text: this.state.text,
      done: false // have i completed this to-do item
    });

    this.setState({ text: ''});
  },
  handleInputChange: function(event) {
    this.setState({text: event.target.value});
  }
})
