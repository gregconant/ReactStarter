var React = require('react');
var ReactDOM = require('react-dom');
var ReactFire = require('reactfire');
var Firebase = require('firebase');
var Header = require('./header');
var List = require('./list');

var rootUrl = 'https://learningreact-3fa38.firebaseio.com/';

var myFirebaseRef = new Firebase(rootUrl + 'items/');

var App = React.createClass({
    mixins: [ReactFire], // copies methods from mixins to this component
    getInitialState: function () {
        return {
            items: {},
            loaded: false
        }
    },
    componentWillMount: function () {

        this.bindAsObject(myFirebaseRef, 'items'); // binds to 'this.state.items'
        // this.state.items = {} from Firebase
        myFirebaseRef.on('value', this.handleDataLoaded);
    },
    render: function () {
        return <div className="row panel panel-default">Poop
            <div className="col-md-8 col-md-offset-2">
                <h2 className="text-center">
                    To-Do List
                </h2>
                <Header itemsStore={this.firebaseRefs.items}/>
                <div className={"content " + (this.state.loaded ? 'loaded' : '')}>

                    <List items={this.state.items}/>
                </div>
            </div>
        </div>

    },
    handleDataLoaded: function () {
        this.setState({loaded: true});
    }
});

var element = React.createElement(App, {});
ReactDOM.render(element, document.querySelector('.container'));
