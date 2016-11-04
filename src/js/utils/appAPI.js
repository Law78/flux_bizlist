var AppActions = require('../actions/AppActions');

module.exports = {
  getAllItems: function(){
    var items = JSON.parse(localStorage.getItem('businesses'));
    // Qui dovrei avere una callback di successo se facessi la richiesta ad un server vero :)
    AppActions.receiveItems(items);
  }
}
