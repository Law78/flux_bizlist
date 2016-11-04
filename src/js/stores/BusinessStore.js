var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var AppAPI = require('../utils/appAPI');

var CHANGE_EVENT =  'change';

// Definisco lo store, cioè lo stato del mio domain:
var _businesses = {
  list: [],
  mainState: 'list'
}

var BusinessStore = assign({}, EventEmitter.prototype, {
  getBusinesses: function(){
    return _businesses;
  },
  emitChange: function(){
    this.emit(CHANGE_EVENT);
  },
  addChangeListener: function(callback){
    this.on('change', callback);
  },
  removeChangeListener: function(callback){
    this.removeListener('change', callback);
  }
});


BusinessStore.dispatchToken = AppDispatcher.register(function(payload){
  var action = payload.action;
  switch(action.actionType){
    case 'RECEIVE_ITEMS':
      console.log("Receiving items...", action.items);
      _businesses.list = action.items;
      BusinessStore.emit(CHANGE_EVENT);
      break;
  }

  return true;
});


module.exports = BusinessStore;
