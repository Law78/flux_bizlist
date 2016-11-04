var React = require('react');
var ReactDOM = require('react-dom');

var appAPI = require('./utils/appAPI');
var App = require('./components/App');
var FakeData = require('./fakeData/fakedata.js');

if(localStorage.getItem('businesses') == null){
  FakeData.init();
}

appAPI.getAllItems();

ReactDOM.render(<App />, document.getElementById('app'));
