var React = require('react');
var AppActions = require('../actions/AppActions');
var BusinessStore = require('../stores/BusinessStore');

var Navbar = React.createClass({
  newItemClick: function(){
    AppActions.newItem();
  },
  homeItemClick: function(){
    AppActions.cancelItem();
  },
  render: function(){
    var newLink = '';
    var homeLink = '';
    if(this.props.mainState === 'list'){
      homeLink = 'active';
    } else if(this.props.mainState === 'new'){
      newLink = 'active'
    }
    return(
      <div>
        <nav className="navbar navbar-default">
          <div className="container">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="#">Business List</a>
            </div>
            <div id="navbar" className="collapse navbar-collapse">
              <ul className="nav navbar-nav">
                <li className={homeLink} onClick={this.homeItemClick}><a href="#">Home</a></li>
                <li className={newLink} onClick={this.newItemClick}><a href="#about">Add Business</a></li>
             </ul>
           </div>
         </div>
       </nav>
      </div>
    );
  }
});

module.exports = Navbar;
