var React = require('react');
var ReactDOM = require('react-dom');
var ReactFire = require('reactfire');
var Firebase = require('firebase');
var rootUrl = 'https://learningreact-3fa38.firebaseio.com';

var myFirebaseRef = new Firebase(rootUrl + 'items/');

myFirebaseRef.set({
  title: "Hello React Data!",
  author: "Firebase",
  location: {
    city: "Philadelphia",
    state: "PA",
    zip: 19103
  }
});

var Hello = React.createClass({
  mixins: [ ReactFire ], // copies methods from mixins to this component
  componentWillMount: function() {
    this.bindAsObject(myFirebaseRef, 'items');
    // this.state.items = {} from Firebase
  },
  render: function() {
    console.log(this.state);
    return <h1 className="red">
      Hello!
    </h1>
  }
});

var element = React.createElement(Hello, {});
ReactDOM.render(element, document.querySelector('.container'));
