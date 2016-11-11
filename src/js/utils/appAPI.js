var AppActions = require('../actions/AppActions');

module.exports = {
  getAllItems: function(){
    // Converto la stringa in formato JSON
    var items = JSON.parse(localStorage.getItem('businesses'));
    // Simulazione della parte success di una callback
    // Qui dovrei avere una callback di successo se facessi la richiesta ad un server vero :)
    AppActions.receiveItems(items);
  }
}
