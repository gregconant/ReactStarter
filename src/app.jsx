var React = require('react');
var ReactDOM = require('react-dom');
var ReactFire = require('reactfire');
var Firebase = require('firebase');
var Header = require('./header');
var rootUrl = 'https://learningreact-3fa38.firebaseio.com/';

var myFirebaseRef = new Firebase(rootUrl + 'items/');
myFirebaseRef.authAnonymously(function(error, authData) {
   if (error) {
       console.log("Login failed.");
   } else {
       console.log("Authenticated successfully with payload: " + authData);
   }
});

var App = React.createClass({
  mixins: [ ReactFire ], // copies methods from mixins to this component
  componentWillMount: function() {
    this.bindAsObject(myFirebaseRef, 'items');
    // this.state.items = {} from Firebase
  },
  render: function() {
    return <div className="row panel panel-default">
      <div className="col-md-8 col-md-offset-2">
        <h2 className="text-center">
          To-Do List
        </h2>
        <Header itemsStore={ this.firebaseRefs.items } />
      </div>
    </div>

  }
});

var element = React.createElement(App, {});
ReactDOM.render(element, document.querySelector('.container'));
