var React = require('react');
var AppActions = require('../actions/AppActions');
var BusinessStore = require('../stores/BusinessStore');
var Navbar = require('./Navbar.jsx');
var BusinessFormNew = require('./BusinessFormNew.jsx');
var BusinessList = require('./BusinessList.jsx');

function getAppState(){
  return {
    businesses: BusinessStore.getBusinesses().list,
    mainState: BusinessStore.getBusinesses().mainState
  }
}

var App = React.createClass({
  getInitialState: function(){
    return getAppState();
  },
  componentDidMount: function(){
    BusinessStore.addChangeListener(this._onChange);
  },
  componentUnmound: function(){
    BusinessStore.removeChangeListener(this._onChange);
  },
  _onChange: function(){
    this.setState(getAppState());
  },
  render: function(){
    console.log(this.state.businesses);
    return(
      <div className="wrapper">
        <Navbar />
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <BusinessFormNew />
              <BusinessList />
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = App;
