//jest.dontMock('../../src/js/components/App.js');

describe('App component', function(){
  var React = require('react');
  var ReactDOM = require('react-dom');
  var TestUtils = require('react-addons-test-utils');

  var App;

  beforeEach(function() {
    App = require('../../src/js/components/App.js');
  });

  it('should exists', function() {
    // Render into document
    var app = TestUtils.renderIntoDocument(<App />);
    expect(TestUtils.isCompositeComponent(app)).toBeTruthy();
  });

})
