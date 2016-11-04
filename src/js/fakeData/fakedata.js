module.exports = {
  // Utilizzo localStorage per memorizzare i valori
  init: function() {
    localStorage.clear();
    localStorage.setItem('businesses', JSON.stringify([ // Prendo questi oggetti JSON e li trasformo in stringhe
      {
        id: '00001',
        name: 'First Business',
        category: 'Technology',
        address: {
          street: '425 South Palos Verdes Street',
          city: 'San Pedro',
          state: 'CA',
          zipcode:'90731'
        },
        phone: '(310) 732-3508',
        email: 'support@firstbusiness.com',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ultrices vestibulum sapien vel egestas. Nullam placerat purus nec sagittis laoreet. In nec metus molestie'
      },
      {
        id: '00002',
        name: 'Second Business',
        category: 'Food',
        address: {
          street: '341 9TH Ave',
          city: 'New York',
          state: 'NY',
          zipcode:'10001'
        },
        phone: '212-330-2510',
        email: 'support@secondbusiness.com',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ultrices vestibulum sapien vel egestas. Nullam placerat purus nec sagittis laoreet. In nec metus molestie'
      }
    ]));
  }
};
