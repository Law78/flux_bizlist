var React = require('react');
var AppActions = require('../actions/AppActions');
var BusinessStore = require('../stores/BusinessStore');
var Business = require('./Business.jsx');

var BusinessList = React.createClass({
  render: function(){
    return(
      <div>
        BUSINESS LIST
        <Business />
      </div>
    );
  }
});

module.exports = BusinessList;
