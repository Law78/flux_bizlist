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
  // E' la callback che richiamo quando un evento modifica lo stato
  _onChange: function(){
    this.setState(getAppState());
  },
  render: function(){
    console.log(this.state.businesses);
    if(this.state.mainState === 'new'){
      var businessForm = <BusinessFormNew />;
    } else if(this.state.mainState === 'edit'){
      var businessForm = <BusinessFormEdit />;
    } else if(this.state.mainState === 'list'){
      var businessList = <BusinessList businesses={this.state.businesses}/>;
    }
    return(
      <div className="wrapper">
        <Navbar mainState={this.state.mainState}/>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              {businessForm}
              {businessList}
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = App;
