var React = require('react');
var AppActions = require('../actions/AppActions');
var BusinessStore = require('../stores/BusinessStore');
var Business = require('./Business.jsx');

var BusinessList = React.createClass({
  render: function(){
    console.log('Lista:',this.props.businesses)
    var businessesNodes;
    if(this.props.businesses){
      businessesNodes = this.props.businesses.map(function(business, index){
        return(
          <Business businessInfo={business} key={index} />
        );
      });
    } else {
      businessesNodes = 'Non ci sono liste';
    }
    return(
      <div>
        {businessesNodes}
      </div>
    );
  }
});

module.exports = BusinessList;
