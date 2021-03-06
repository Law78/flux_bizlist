var React = require('react');
var AppActions = require('../actions/AppActions');
var BusinessStore = require('../stores/BusinessStore');

var Business = React.createClass({
  render: function(){
    return(
      <div className="well">
        <h3>{this.props.businessInfo.name}</h3>
        <small>Category: {this.props.businessInfo.category}</small>
      </div>
    );
  }
});

module.exports = Business;
