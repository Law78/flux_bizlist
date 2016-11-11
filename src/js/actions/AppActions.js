var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');

// Action Creator - Definisco il type e l'oggetto che voglio modificare nello store.
// devo richiamare il Dispatcher con il metodo che riceve il mio plain object
var AppActions = {
  receiveItems: function(items){
    AppDispatcher.handleViewAction({
      actionType: AppConstants.RECEIVE_ITEMS,
      items
    });
  },
  newItem: function(){
    AppDispatcher.handleViewAction({
      actionType: AppConstants.NEW_ITEM
    });
  },
  cancelItem: function(){
    AppDispatcher.handleViewAction({
      actionType: AppConstants.CANCEL_ITEM
    });
  }
}

module.exports = AppActions;
